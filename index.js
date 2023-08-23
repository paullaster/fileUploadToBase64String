const fileInput = document.getElementById('fileInput');

fileInput.addEventListener("change", async (e) => {
    const file = fileInput.files[0];
    
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        const base64String = reader.result
        console.log(base64String);
    });
    reader.readAsDataURL(file);
});