// Animation on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Chatbot functionality
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbot = document.getElementById('chatbot');
if (chatbotIcon && chatbot) {
    chatbotIcon.addEventListener('click', () => {
        chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
    });
}

// AI Chatbot
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotQuery = document.getElementById("chatbot-query");
const chatbotSend = document.getElementById("chatbot-send");

if (chatbotMessages && chatbotQuery && chatbotSend) {
    chatbotSend.addEventListener("click", () => {
        const userMessage = chatbotQuery.value;
        if (!userMessage.trim()) return;
        chatbotMessages.innerHTML += `<div><strong>You:</strong> ${userMessage}</div>`;
        chatbotQuery.value = "";

        // Mock AI response
        setTimeout(() => {
            chatbotMessages.innerHTML += `<div><strong>AI:</strong> I'm here to assist you!</div>`;
        }, 1000);
    });
}