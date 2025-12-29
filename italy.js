// Show/Hide Translation
const buttons = document.querySelectorAll(".word button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const wordBox = button.closest(".word");
        const translation = wordBox.querySelector(".translation");

        if (translation.style.display === "inline") {
            translation.style.display = "none";
            button.textContent = "Show Translation";
        } else {
            translation.style.display = "inline";
            button.textContent = "Hide Translation";
        }
    });
});

// Tabs
function openTab(tabId, button) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    button.classList.add('active');
}

// Dark Mode Toggle
const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
