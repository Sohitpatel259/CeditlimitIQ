// // Toggle Sign-in Modal
// document.getElementById('get-started').addEventListener('click', function() {
//     document.getElementById('signin-modal').style.display = 'flex';
// });

// // Toggle Chatbot
// document.getElementById('send-message').addEventListener('click', function() {
//     const userMessage = document.getElementById('chatbot-input').value;
//     if (userMessage.trim() === '') return;
    
//     // Append user message
//     const messageContainer = document.createElement('div');
//     messageContainer.classList.add('user-message');
//     messageContainer.innerText = userMessage;
//     document.getElementById('chatbot-messages').appendChild(messageContainer);

//     // Clear input
//     document.getElementById('chatbot-input').value = '';

//     // Simulate chatbot response
//     setTimeout(() => {
//         const botMessageContainer = document.createElement('div');
//         botMessageContainer.classList.add('bot-message');
//         botMessageContainer.innerText = "I'm here to assist you with your queries!";
//         document.getElementById('chatbot-messages').appendChild(botMessageContainer);
//     }, 1000);
// });

// // Close Modals on Outside Click
// window.onclick = function(event) {
//     const signinModal = document.getElementById('signin-modal');
//     const signupModal = document.getElementById('signup-modal');
//     if (event.target == signinModal) signinModal.style.display = "none";
//     if (event.target == signupModal) signupModal.style.display = "none";
// }

// // Chatbot Toggle on Page Load
// window.addEventListener('load', function() {
//     document.getElementById('chatbot').style.display = 'block';
// });
// Define chatbot responses
// const botResponses = [
//     "I'm here to assist you with your queries!",
//     "How can I help you today?",
//     "Feel free to ask any questions related to your credit limit or account.",
//     "I can guide you through the login process or explain our features.",
//     "Need help with setting up your account? Just let me know!",
//     "I'm here to make your experience smooth and seamless. Ask away!",
//     "Do you have questions about your credit score or eligibility? I’m here to help.",
//     "Looking for assistance with account verification? I’m here to support you!",
//     "Have a question about the features of CreditlimitIQ? I'm all ears!",
//     "I can provide information about our security and data policies."
// ];

// // Toggle Sign-in Modal
// document.getElementById('get-started').addEventListener('click', function() {
//     document.getElementById('signin-modal').style.display = 'flex';
// });

// // Toggle Chatbot
// document.getElementById('send-message').addEventListener('click', function() {
//     const userMessage = document.getElementById('chatbot-input').value;
//     if (userMessage.trim() === '') return;
    
//     // Append user message
//     const messageContainer = document.createElement('div');
//     messageContainer.classList.add('user-message');
//     messageContainer.innerText = userMessage;
//     document.getElementById('chatbot-messages').appendChild(messageContainer);

//     // Clear input
//     document.getElementById('chatbot-input').value = '';

//     // Simulate chatbot response with a random message
//     setTimeout(() => {
//         const botMessageContainer = document.createElement('div');
//         botMessageContainer.classList.add('bot-message');
//         // Pick a random response
//         const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
//         botMessageContainer.innerText = randomResponse;
//         document.getElementById('chatbot-messages').appendChild(botMessageContainer);
//     }, 1000);
// });

// // Close Modals on Outside Click
// window.onclick = function(event) {
//     const signinModal = document.getElementById('signin-modal');
//     const signupModal = document.getElementById('signup-modal');
//     if (event.target == signinModal) signinModal.style.display = "none";
//     if (event.target == signupModal) signupModal.style.display = "none";
// }

// // Chatbot Toggle on Page Load
// window.addEventListener('load', function() {
//     document.getElementById('chatbot').style.display = 'block';
// });
// ChatGPT API Key
// Define chatbot responses
const botResponses = [
    "I'm here to assist you with your queries!",
    "How can I help you today?",
    "Feel free to ask any questions related to your credit limit or account.",
    "I can guide you through the login process or explain our features.",
    "Need help with setting up your account? Just let me know!",
    "I'm here to make your experience smooth and seamless. Ask away!",
    "Do you have questions about your credit score or eligibility? I’m here to help.",
    "Looking for assistance with account verification? I’m here to support you!",
    "Have a question about the features of CreditlimitIQ? I'm all ears!",
    "I can provide information about our security and data policies.",
    "Our risk assessment feature helps evaluate your creditworthiness for informed decisions.",
    "Our credit card limit approval process is streamlined to help you quickly know your eligibility.",
    "We offer real-time updates on your credit limit approval status.",
    "Our AI-driven risk assignment process helps ensure secure and accurate credit limit recommendations.",
    "Would you like to know more about our fraud detection capabilities?",
    "You can check your credit score insights to get a clear view of your financial health.",
    "We use advanced AI to analyze your credit risk and provide you with personalized recommendations.",
    "Our platform offers detailed credit risk analysis for transparent and safe lending.",
    "Do you need assistance understanding the eligibility criteria for credit card limit approvals?",
    "Our services include secure account verification for enhanced protection."
];

// Toggle Sign-in Modal
document.getElementById('get-started').addEventListener('click', function() {
    document.getElementById('signin-modal').style.display = 'flex';
});

// Toggle Chatbot
document.getElementById('send-message').addEventListener('click', function() {
    const userMessage = document.getElementById('chatbot-input').value;
    if (userMessage.trim() === '') return;
    
    // Append user message
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('user-message');
    messageContainer.innerText = userMessage;
    document.getElementById('chatbot-messages').appendChild(messageContainer);

    // Clear input
    document.getElementById('chatbot-input').value = '';

    // Simulate chatbot response with a random message
    setTimeout(() => {
        const botMessageContainer = document.createElement('div');
        botMessageContainer.classList.add('bot-message');
        // Pick a random response
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        botMessageContainer.innerText = randomResponse;
        document.getElementById('chatbot-messages').appendChild(botMessageContainer);
    }, 1000);
});

// Close Modals on Outside Click
window.onclick = function(event) {
    const signinModal = document.getElementById('signin-modal');
    const signupModal = document.getElementById('signup-modal');
    if (event.target == signinModal) signinModal.style.display = "none";
    if (event.target == signupModal) signupModal.style.display = "none";
}

// Chatbot Toggle on Page Load
window.addEventListener('load', function() {
    document.getElementById('chatbot').style.display = 'block';
});
