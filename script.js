const modeToggle = document.getElementById("modeToggle");

// Check user's preference on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    modeToggle.checked = true;
}

// Toggle dark mode on checkbox change
modeToggle.addEventListener("change", () => {
    if (modeToggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
});
