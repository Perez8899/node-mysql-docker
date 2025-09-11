class ChatApp {
    constructor() {
        this.username = null;
        this.socket = null;
        this.messages = [];
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const messageInput = document.getElementById('messageInput');
        
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }

    setUsername() {
        const usernameInput = document.getElementById('username');
        const username = usernameInput.value.trim();
        
        if (username) {
            this.username = username;
            this.connectToChat();
            
            // Habilitar input de mensajes
            document.getElementById('messageInput').disabled = false;
            document.querySelector('.chat-input button').disabled = false;
            
            // Ocultar input de username
            usernameInput.disabled = true;
            document.querySelector('.user-info button').disabled = true;
            
            this.addSystemMessage(`Te has unido como ${username}`);
        }
    }

    connectToChat() {
        // Simulación de conexión WebSocket (en una app real usarías WebSocket)
        console.log('Conectado al chat...');
        
        // Simular mensajes de otros usuarios
        setTimeout(() => {
            this.addMessage('Sistema', 'Bienvenido al chat!');
        }, 1000);
        
        setTimeout(() => {
            this.addMessage('Usuario1', 'Hola! ¿Cómo estás?');
        }, 2000);
    }

    sendMessage() {
        const messageInput = document.getElementById('messageInput');
        const message = messageInput.value.trim();
        
        if (message && this.username) {
            this.addMessage(this.username, message, true);
            messageInput.value = '';
            
            // Simular respuesta automática
            setTimeout(() => {
                this.addMessage('Bot', '¡Mensaje recibido!');
            }, 1000);
        }
    }

    addMessage(sender, text, isOwn = false) {
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        
        messageDiv.className = `message ${isOwn ? 'own' : 'other'}`;
        
        const time = new Date().toLocaleTimeString();
        messageDiv.innerHTML = `
            <div class="message-info">${sender} - ${time}</div>
            <div class="message-text">${this.escapeHtml(text)}</div>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        this.messages.push({ sender, text, time, isOwn });
    }

    addSystemMessage(text) {
        this.addMessage('Sistema', text);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Inicializar la aplicación
const chatApp = new ChatApp();

// Funciones globales para los botones
function setUsername() {
    chatApp.setUsername();
}

function sendMessage() {
    chatApp.sendMessage();
}