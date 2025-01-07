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
 chatbotIcon.addEventListener('click', () => {
     chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
 });
 // AI Chatbot
 const chatbotMessages = document.getElementById("chatbot-messages");
 const chatbotQuery = document.getElementById("chatbot-query");
 const chatbotSend = document.getElementById("chatbot-send");

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

 // Language change (placeholder function)
 function changeLanguage(lang) {
     alert(`Language changed to: ${lang}`);
 }
 // script.js

 // Wait for the DOM to load
 document.addEventListener("DOMContentLoaded", () => {
     console.log("JavaScript is loaded!");

     // Smooth scroll for internal links
     const links = document.querySelectorAll("a[href^='#']");
     links.forEach(link => {
         link.addEventListener("click", (e) => {
             e.preventDefault();
             const targetId = link.getAttribute("href").substring(1);
             const targetSection = document.getElementById(targetId);

             if (targetSection) {
                 targetSection.scrollIntoView({ behavior: "smooth" });
             }
         });
     });

     // Placeholder functionality for AI-powered mentorship button
     const mentorshipButton = document.querySelector(".button");
     mentorshipButton.addEventListener("click", () => {
         alert("Thank you for your interest! Our mentorship program will connect you with an advisor soon.");
     });

     // Add fade-in animation for sections on scroll
     const sections = document.querySelectorAll("section");
     const observer = new IntersectionObserver((entries, observer) => {
         entries.forEach(entry => {
             if (entry.isIntersecting) {
                 entry.target.classList.add("visible");
                 observer.unobserve(entry.target);
             }
         });
     }, { threshold: 0.1 });

     sections.forEach(section => {
         section.classList.add("hidden");
         observer.observe(section);
     });
 });
