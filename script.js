const QR_text = document.getElementById("qr_text");
const QR_imgBox = document.getElementById("imgBox");
const QR_img = document.getElementById("qr_img");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", generateQR);

function generateQR() {
    if (QR_text.value.length > 0) {
        QR_img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QR_text.value;  
        QR_imgBox.classList.add("show_img");
        QR_text.value = "";
    } else {
        QR_text.classList.add("error");
        setTimeout(()=>{
            QR_text.classList.remove("error");
        },1000)
  }
}
