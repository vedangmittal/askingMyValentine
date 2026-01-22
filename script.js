const yesMain = document.getElementById("yesBtnMain");
const yesSwap = document.getElementById("yesBtnSwap");
const noBtn = document.getElementById("noBtn");
const homeContent = document.getElementById("homeContent");
const surpriseText = document.getElementById("surpriseText");

const goToYesPage = () => {
    window.location.href = "yes.html";
};

yesMain.addEventListener("click", goToYesPage);
yesSwap.addEventListener("click", goToYesPage);

noBtn.addEventListener("click", () => {
    // 1. Fade out homepage content
    homeContent.style.opacity = 0;

    // 2. Show surprise text
    surpriseText.style.opacity = 1;

    // 3. After 2 seconds
    setTimeout(() => {
        // Fade out surprise text
        surpriseText.style.opacity = 0;

        // Fade back homepage
        homeContent.style.opacity = 1;

        // Replace No button with swapped Yes
        noBtn.style.display = "none";
        yesSwap.style.opacity = 1;
        yesSwap.style.pointerEvents = "auto";
    }, 1000);
});
