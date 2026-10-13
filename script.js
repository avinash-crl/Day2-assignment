
const themeBtn = document.getElementById("themeBtn");
const photoBtn = document.getElementById("photoBtn");
const downloadBtn = document.getElementById("downloadBtn");
const profileImage = document.getElementById("profileImage");

// DARK AND LIGHT THEME
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});

// SHOW AND HIDE PROFILE IMAGE
photoBtn.addEventListener("click", function () {
    profileImage.hidden = !profileImage.hidden;

    if (profileImage.hidden) {
        photoBtn.textContent = "Show Photo";
    } else {
        photoBtn.textContent = "Hide Photo";
    }
});

// DOWNLOAD RESUME AS PDF
downloadBtn.addEventListener("click", function () {
    window.print();
});
