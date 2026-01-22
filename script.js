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
    homeContent.style.opacity = 0;
    surpriseText.style.opacity = 1;

    setTimeout(() => {
        surpriseText.style.opacity = 0;
        homeContent.style.opacity = 1;

        // FIXED: Handle both opacity and visibility for a clean swap
        noBtn.style.display = "none";
        yesSwap.style.visibility = "visible";
        yesSwap.style.opacity = 1;
        yesSwap.style.pointerEvents = "auto";
    }, 1000);
});