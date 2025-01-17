/**
 * Inicializa uma instância do Peer para gerenciar conexões P2P.
 */
const peer = new Peer();

/** Elementos da interface do usuário */
const connectButton = document.getElementById("connectButton");
const sendButton = document.getElementById("sendButton");
const chatArea = document.getElementById("chatArea");
const peerIdInput = document.getElementById("peerId");
const chatInput = document.getElementById("chat");
const connectionInfo = document.getElementById("connectionInfo");
const peerTitle = document.getElementById("peerTitle");

/** Armazena cores únicas para cada usuário conectado */
let userColors = {};

/** Lista de conexões ativas com outros peers */
let peersConnected = [];

/**
 * Exibe o ID do peer quando o peer é iniciado.
 * @param {string} id - O ID gerado pelo PeerJS.
 */
peer.on("open", (id) => {
  peerTitle.textContent = id;
});

/**
 * Conecta-se a outro peer usando o ID fornecido pelo usuário.
 */
connectButton.addEventListener("click", () => {
  const peerId = peerIdInput.value.trim();

  if (peerId) {
    const connection = peer.connect(peerId);

    connection.on("open", () => {
      showModal("Conexão estabelecida!");
      chatInput.disabled = false;
      sendButton.disabled = false;
      addConnectionBox(peerId);
      peersConnected.push(connection);
    });

    connection.on("data", (data) => {
      displayMessage(`Amigo: ${data}`, "friend", userColors[peerId]);
    });

    peerIdInput.value = "";
  } else {
    showModal("Digite um Peer ID válido!");
  }
});

/**
 * Envia uma mensagem para todos os peers conectados.
 */
sendButton.addEventListener("click", () => {
  const message = chatInput.value.trim();

  if (message && peersConnected.length > 0) {
    peersConnected.forEach((connection) => connection.send(message));
    displayMessage(`Você: ${message}`, "you", userColors[peer.id]);
    chatInput.value = "";
  } else {
    showModal("Não há conexões ou a mensagem está vazia.");
  }
});

chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    sendButton.click();
  }
});

/**
 * Gerencia conexões recebidas de outros peers.
 */
peer.on("connection", (connection) => {
  connection.on("open", () => {
    showModal("Um usuário conectou-se ao seu Peer!");
    chatInput.disabled = false;
    sendButton.disabled = false;
    addConnectionBox(connection.peer);
    peersConnected.push(connection);
  });

  connection.on("data", (data) => {
    displayMessage(`Amigo: ${data}`, "friend", userColors[connection.peer]);
  });
});

/**
 * Adiciona um indicador visual para um novo peer conectado.
 * @param {string} peerId - O ID do peer conectado.
 */
function addConnectionBox(peerId) {
  if (!userColors[peerId]) {
    userColors[peerId] = getRandomColor();
  }

  const box = document.createElement("div");
  box.classList.add("connection-box");
  box.style.backgroundColor = userColors[peerId];
  connectionInfo.appendChild(box);
}

/**
 * Exibe uma mensagem na área de chat.
 * @param {string} message - O texto da mensagem.
 * @param {string} senderClass - Classe CSS que define o remetente ("you" ou "friend").
 * @param {string} color - Cor associada ao remetente.
 */
function displayMessage(message, senderClass, color) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", senderClass);
  messageElement.textContent = message;
  messageElement.style.backgroundColor = color;
  chatArea.appendChild(messageElement);
  chatArea.scrollTop = chatArea.scrollHeight;
}

/**
 * Gera uma cor aleatória em formato hexadecimal.
 * @returns {string} Uma cor aleatória.
 */
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  // Gera valores restritos a "00" a "88" para cores mais escuras
  for (let i = 0; i < 6; i++) {
    const darkValue = Math.floor(Math.random() * 9); // Restrito a 0-8
    color += letters[darkValue];
  }

  return color;
}

/**
 * Exibe uma mensagem em um modal.
 * @param {string} message - A mensagem a ser exibida.
 */
function showModal(message) {
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modalText");
  const modalClose = document.getElementById("modalClose");

  modalText.textContent = message; // Define a mensagem do modal
  modal.style.display = "flex"; // Mostra o modal

  // Fecha o modal ao clicar no botão
  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Fecha o modal ao clicar fora do conteúdo
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}