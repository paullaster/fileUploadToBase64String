const fileInput = document.getElementById('fileInput');

fileInput.addEventListener("change", (e) => {
    const file = fileInput.files.shift();
    console.log(file);

});