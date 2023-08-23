const fileInput = document.getElementById('fileInput');

fileInput.addEventListener("change", (e) => {
    console.log(fileInput.files);
});