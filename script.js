import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyDM0nhuVztE-6JV8GCj29ZKDCe9kdFpM5M");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
async function sendMessage(message) {
    const userChatBubble = document.createElement("div");
    userChatBubble.className = "chatbox-user";
    userChatBubble.innerText = result;
    document.getElementById("main").append(userChatBubble)
    const result = await model.generateContent(message);
    const chatBubble = document.createElement("div");
    chatBubble.className = "chatbox-ai";
    chatBubble.innerText = result;
    document.getElementById("main").append(chatBubble)
}