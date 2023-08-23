const fileInput = document.getElementById('fileInput');

fileInput.addEventListener("change", (e) => {
    const file = fileInput.files[0];
    console.log(file);

});