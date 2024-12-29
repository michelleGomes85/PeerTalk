# PeerTalk - Comunicação Peer-to-Peer

[![Aplicação](https://img.shields.io/badge/Aplicação-%23007bff.svg)](https://michellegomes85.github.io/PeerTalk/)

Este projeto demonstra o funcionamento básico de uma rede **Peer-to-Peer (P2P)**, onde dispositivos podem se conectar diretamente uns aos outros para trocar dados, sem a necessidade de um servidor intermediário. A comunicação entre os peers ocorre diretamente, permitindo uma rede descentralizada e mais eficiente.

## O que é uma Rede P2P?

Uma rede **Peer-to-Peer (P2P)** é um tipo de rede distribuída em que todos os dispositivos ou "peers" têm capacidades equivalentes e podem se conectar uns aos outros para compartilhar recursos, como dados ou serviços. Ao contrário das redes tradicionais client-servidor, onde os clientes fazem solicitações a um servidor centralizado, em uma rede P2P, cada dispositivo pode tanto fornecer quanto consumir recursos, permitindo comunicação e colaboração descentralizada.

Na rede P2P, os dispositivos (chamados de "peers") se comunicam diretamente entre si, sem depender de um servidor central para gerenciar ou armazenar dados. 

## Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **HTML & CSS**: Para a estruturação e estilização da interface de usuário.
- **JavaScript (PeerJS)**: Para implementação da funcionalidade de comunicação P2P.
- **PeerJS**: Uma biblioteca JavaScript que facilita a construção de redes P2P, fornecendo abstrações para a criação de conexões entre peers e a troca de dados.

### PeerJS

O **PeerJS** é uma biblioteca que simplifica a implementação de redes P2P em navegadores, utilizando a API WebRTC para estabelecer comunicação direta entre dispositivos. Com PeerJS, podemos facilmente criar e gerenciar conexões entre peers, enviando dados em tempo real através dessas conexões.

## Funcionalidades do Projeto

- **Conexão entre Peers**: O usuário pode conectar-se a outro peer através de um ID único, fornecido automaticamente quando a aplicação é iniciada.
- **Envio de Mensagens**: Após a conexão, o usuário pode enviar mensagens para o peer conectado.
- **Conexões Visuais**: O número de peers conectados é mostrado na interface com indicadores visuais, permitindo visualizar o estado das conexões.
- **Notificações**: Mensagens de conexão e erro são exibidas em modais, fornecendo feedback para o usuário.

## Como Rodar o Projeto

### Pré-requisitos

Antes de rodar o projeto, é necessário ter um navegador web moderno que suporte WebRTC (como o Google Chrome ou Firefox).

### Rodando o Projeto Localmente

1. Clone este repositório para sua máquina local:

   ```bash
   git clone https://github.com/michelleGomes85/PeerTalk.git
   ```

2. Navegue até a pasta do projeto

  ```bash
  cd Peer-Talk
  ```

3. Abra o arquivo index.html no seu navegador para iniciar a aplicação.

4. Ao abrir o aplicativo, um ID de peer será gerado automaticamente e exibido na parte superior da página. O usuário pode então compartilhar esse ID com outros para permitir a conexão.

4. Para se conectar a outro peer, digite o ID fornecido por outro usuário na seção "Digite o ID do Peer" e clique em "Conectar". Após a conexão ser estabelecida, você poderá enviar mensagens entre os peers.

## Funcionamento 

O código JavaScript gerencia a lógica de conexão entre os peers:

1. **Criação de um Peer:** Ao iniciar a aplicação, um peer é criado usando a biblioteca PeerJS. O ID do peer é gerado e exibido para o usuário.

2. **Conectar a outro Peer:** Quando o usuário insere um ID de peer e clica no botão "Conectar", o aplicativo tenta estabelecer uma conexão com o peer remoto utilizando o método peer.connect(peerId).

3. **Troca de Dados:** Após a conexão ser estabelecida, os dados podem ser enviados entre os peers através do método connection.send(). Quando o peer remoto envia dados, a função on("data") é acionada para exibir a mensagem no chat.

4. **Gerenciamento de Conexões:** O aplicativo mantém um registro de todas as conexões ativas e exibe uma caixa colorida para cada peer conectado.
