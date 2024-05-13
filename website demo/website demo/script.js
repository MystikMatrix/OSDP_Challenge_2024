// Chatbot interaction setup
document.getElementById('openChatbot').addEventListener('click', function () {
    document.getElementById('chatbot').style.display = 'block'; // Show chatbot
    this.style.display = 'none'; // Hide the open button
});

document.getElementById('closeChatbot').addEventListener('click', function () {
    document.getElementById('chatbot').style.display = 'none'; // Hide chatbot
    document.getElementById('openChatbot').style.display = 'block'; // Show the open button
});

function sendMessage() {
    var input = document.getElementById("userInput").value;
    displayMessage(input, "user");

    var response = getResponse(input);
    displayMessage(response, "bot");

    document.getElementById("userInput").value = ""; // Clear input field after sending
}

function displayMessage(message, sender) {
    var messagesContainer = document.getElementById("messages");
    var messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.className = sender;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getResponse(input) {
    if (input.toLowerCase().includes("how to use data")) {
        return "To use data in your project, start by identifying the datasets relevant to your UX challenge. Would you like more detailed instructions?";
    } else if (input.toLowerCase().includes("yes")) {
        return "Great! Start by accessing the OSDP datasets. Here's how: [explain steps]. Do you have any specific dataset in mind?";
    } else {
        return "I'm not sure how to answer that. Can you try asking something else?";
    }
}

// Modal interaction setup
var modal = document.getElementById("ml-modal");
var btn = document.getElementById("ml-info-btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Tutorial interaction setup
let currentStep = 1;
const maxStep = 3; // Adjust based on the number of steps in the tutorial

function openTutorial() {
    document.getElementById('tutorialModal').style.display = 'flex';
    showStep(1); // Start from the first step
}

function showStep(step) {
    for (let i = 1; i <= maxStep; i++) {
        document.getElementById('step' + i).classList.remove('step-active');
    }
    document.getElementById('step' + step).classList.add('step-active');
}

function nextStep() {
    if (currentStep < maxStep) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

function closeTutorial() {
    document.getElementById('tutorialModal').style.display = 'none';
}

// Initial setups when the window loads
window.onload = function () {
    displayMessage("Hi! I'm AlexData. I can help you find  data! Just ask me how!", "bot");
    document.getElementById('chatbot').style.display = 'block'; // Automatically open the chatbot
    document.getElementById('openChatbot').style.display = 'none'; // Hide the open button
    // Uncomment below to automatically open the tutorial
    // openTutorial();
};
