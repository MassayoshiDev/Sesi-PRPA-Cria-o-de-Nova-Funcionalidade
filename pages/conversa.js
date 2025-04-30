function goBackToHomePage() {
    window.location.replace("../index.html")
}

const op = document.getElementById("options")
op.style.opacity = 0
function showOptions() {
    if (op.style.opacity = 1) {
        op.style.opacity = 0
    } else {
        op.style.opacity = 1
    }
}