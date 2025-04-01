# PeerTalk - 🔗 Comunicação Peer-to-Peer

[![Aplicação](https://img.shields.io/badge/Aplicação-%23007bff.svg)](https://michellegomes85.github.io/PeerTalk/) [![PeerJS](https://img.shields.io/badge/PeerJS-%23ff9800.svg)](https://peerjs.com/) [![WebRTC](https://img.shields.io/badge/WebRTC-%234caf50.svg)](https://webrtc.org/)

Este projeto demonstra o funcionamento básico de uma rede **Peer-to-Peer (P2P)**, onde dispositivos podem se conectar diretamente uns aos outros para trocar dados, sem a necessidade de um servidor intermediário. 

---

## 📊 O que é uma Rede P2P?

Uma rede **Peer-to-Peer (P2P)** é um tipo de rede distribuída em que todos os dispositivos ou "peers" têm capacidades equivalentes e podem se conectar uns aos outros para compartilhar recursos, como dados ou serviços. 

### ✨ Características principais:
- 🔄 **Descentralização**: Os dispositivos comunicam-se diretamente sem a necessidade de um servidor central.
- 💪 **Colaboração**: Cada peer pode fornecer e consumir recursos, contribuindo para a eficiência da rede.

---

## 💻 Tecnologias Utilizadas

### Principais Tecnologias:
- 🔖 **HTML & CSS**: Para a estruturação e estilização da interface de usuário.
- ✨ **JavaScript (PeerJS)**: Para a implementação da funcionalidade de comunicação P2P.
- 🌐 **PeerJS**: Uma biblioteca JavaScript que facilita a criação de redes P2P.

### [PeerJS](https://peerjs.com/) 
O **PeerJS** simplifica a implementação de redes P2P em navegadores, utilizando a tecnologia WebRTC.

- ⚙️ **Abstrações**: Fornece uma API amigável para criar e gerenciar conexões entre peers.
- 🔗 **Conexão Direta**: Utiliza WebRTC para estabelecer comunicação em tempo real.

### [WebRTC](https://webrtc.org/) 
O **WebRTC** (Web Real-Time Communication) é uma tecnologia que permite a comunicação direta entre navegadores sem necessidade de servidores intermediários.

- 🎧 **Funcionalidades**: Troca de dados, áudio e vídeo em tempo real.
- ✨ **Base para PeerJS**: A biblioteca PeerJS utiliza WebRTC como base para transmissão de dados entre peers.

---

## 🔌 Funcionalidades do Projeto

- 🔗 **Conexão entre Peers**: Cada usuário recebe um ID único gerado automaticamente para conexões.
- 📨 **Envio de Mensagens**: Mensagens podem ser trocadas entre peers conectados.
- 🔍 **Conexões Visuais**: Indicadores visuais mostram o estado e o número de peers conectados.
- 📢 **Notificações**: Mensagens de erro e de conexão são exibidas para o usuário.

---

## 🛠️ Como Rodar o Projeto

### ⚙️ Pré-requisitos
- 🌐 Navegador moderno compatível com WebRTC (como Google Chrome ou Firefox).

### ✅ Passos

- Acesse o link da aplicação na parte de cima ou, se quiser rodar localmente, siga os passos abaixo:

1. ⬇️ Clone este repositório:
   ```bash
   git clone https://github.com/michelleGomes85/PeerTalk.git
   ```

2. 📂 Navegue até a pasta do projeto:
   ```bash
   cd PeerTalk
   ```

3. 👽 Abra o arquivo `index.html` no navegador para iniciar a aplicação.

4. 🔐 Ao abrir o aplicativo, um ID único de peer será gerado automaticamente. Compartilhe esse ID com outro usuário para estabelecer uma conexão.

5. 🔗 Para conectar-se a outro peer, insira o ID do outro usuário na seção "Digite o ID do Peer" e clique em "Conectar".

---

## 📚 Explicação do Código

Este código implementa um sistema básico de comunicação P2P utilizando a biblioteca PeerJS:

1. **Inicialização do Peer**: O Peer é criado para gerenciar conexões. O ID gerado é a identidade única do peer na rede.

2. **Conexão**: O botão "Conectar" usa o ID de outro peer para estabelecer uma conexão. As conexões são bidirecionais e permitem a troca de dados.

3. **Envio de Mensagens**: As mensagens digitadas são enviadas a todos os peers conectados. Cada mensagem recebida ou enviada é exibida na interface.

4. **Feedback ao Usuário**: Modais e indicadores visuais informam o status das conexões e mensagens.

5. **Cores e Identificação**: Cada peer recebe uma cor única, facilitando a distinção entre vários peers na interface.

Este exemplo demonstra a base de uma rede P2P descentralizada, onde os dispositivos podem se comunicar diretamente sem servidores intermediários.

---

## 📚 Referências

- [PeerJS Documentação Oficial](https://peerjs.com/)
- [WebRTC Documentação Oficial](https://webrtc.org/)

## 👨‍💻 Autora

Desenvolvido por **Michelle Gomes**

👉 [GitHub - michelleGomes85](https://github.com/michelleGomes85)
