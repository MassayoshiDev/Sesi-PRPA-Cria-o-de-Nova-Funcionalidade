function goBackToHomePage() {
    window.location.replace("../index.html")
}

const op = document.getElementById("options")
op.style.opacity = 0
function showOptions() {
    if (op.style.opacity == 1) {
        op.style.opacity = 0
        op.style.zIndex = 1
    } else {
        op.style.opacity = 1
        op.style.zIndex = 2
    }
}

function traduzirBatePapo() {
    window.location.replace("conversaTraduzida.html")
}

function DesligarTradutor() {
    window.location.replace("conversa.html")
}