// 🔒 Disable Right-Click
// document.addEventListener("contextmenu", function (event) {
//     event.preventDefault();
//     alert("Console is disabled for security reasons!");
// });

// 🔒 Disable Developer Tools (F12, Ctrl+Shift+I, Ctrl+U)
// document.addEventListener("keydown", function (event) {
//     if (event.key === "F12" || 
//         (event.ctrlKey && event.shiftKey && event.key === "I") || 
//         (event.ctrlKey && event.key === "U")) {
//         event.preventDefault();
//     }
// });

// 🔒 Prevent Debugging via DevTools (Breaks Console)
// (function() {
//     setInterval(() => {
//         debugger;
//     }, 100);
// })();

// 🔒 Obfuscate Console.log to Block Inspection
// console.log = function () {
    
// };

// 🔒 Prevent Dragging Elements (For Security)
// document.addEventListener("dragstart", function (event) {
//     event.preventDefault();
// });

// 🔒 Hide Elements in DevTools
// Object.defineProperty(window, "console", {
//     get: function () {
//         throw new Error("Access Denied!");
//     }
// });

// 🔒 Prevent Viewing Page Source
// document.onkeydown = function (event) {
//     if (event.ctrlKey && event.key === "s") {
//         event.preventDefault();
//     }
// };


function y() {

    open("https://www.youtube.com/");
    
}

function generateQRCode() {
    console.time();
    let qrImageLoaded = false;
    const upiID = document.getElementById("upi").value.trim();
    const amount = document.getElementById("amount").value;
    const payment_status = document.getElementById("payment-status");
    if (!/^[\w.-]+@[a-zA-Z]+$/.test(upiID) || amount <= 0) {
        alert("Please make sure you entered correct details as shown in message box")
        payment_status.innerText = "✋🏻 Enter a valid UPI ID & amount!";
        payment_status.style.color = "red";
        return;
    }

    payment_status.innerText = "Generating QR...";
    payment_status.style.color = "green";

    // UPI Payment URL
    const upiURL = `upi://pay?pa=${upiID}&pn=Merchant&mc=1234&tid=TXN123456&tr=ORDER123&tn=Payment&am=${amount}&cu=INR`;

    // New QR Code API (Fix)
    const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiURL)}`;

    // if(qrImageUrl) {
    //     document.getElementById("qr-section").style.display = "block";
    //     document.getElementById("qr-code").src = qrImageUrl;
    //     payment_status.innerText = "💰Scan QR to Pay!";
    //     payment_status.style.color = "pink";
    //     qrImageLoaded = true;
    // }

    setTimeout(() => {
        if(!qrImageLoaded) {
        document.getElementById("qr-section").style.display = "block";
        document.getElementById("qr-code").src = qrImageUrl;
        payment_status.innerText = "💰Scan QR to Pay!";
        payment_status.style.color = "white";
        }
        console.timeEnd();
    }, 100);
    
}
