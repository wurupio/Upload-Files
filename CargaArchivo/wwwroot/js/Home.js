// Funcionalidades

//Open Explorer - File
function openFileExplorer() {
    document.getElementById('fileInput').click();
}

//Show Name - File
function displayFileName() {
    var fileInput = document.getElementById('fileInput');
    var uploadText = document.getElementById('uploadText');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        uploadText.value = file.name; 
        openUploadModal(file); 
    }
}

//Open Upload - Modal 
function openUploadModal(file) {
    
    const subirModal = document.getElementById('subirModal');
    subirModal.style.display = 'flex';

    // instanciar
    const progressBar = document.querySelector(".progress-bar .progress");
    const percentText = document.querySelector(".percent");
    const fileNameText = document.querySelector(".file-name");
    const fileSizeText = document.querySelector(".file-size");

    
    let fileName = file.name;
    let fileSize = (file.size / 1024).toFixed(2) + " KB"; 
    if (fileName.length > 12) {
        const splitName = fileName.split(".");
        fileName = splitName[0].substring(0, 9) + "... ." + splitName[1];
    }
    fileNameText.textContent = fileName;
    fileSizeText.textContent = fileSize;

    
    simulateUploadProgress();
}

//Simulación - Process Bar 
function simulateUploadProgress() {
    let progress = 1; 
    const progressBar = document.querySelector(".progress-bar .progress");
    const percentText = document.querySelector(".percent");

    const interval = setInterval(() => {
        progressBar.style.width = progress + "%";
        percentText.textContent = progress + "%";

        if (progress >= 100) {
            clearInterval(interval); 
            setTimeout(() => {
                document.getElementById('subirModal').style.display = 'none'; 
                resetUploadModal(); 
            }, 500);
        }
        progress++;
    }, 30); 
}

//Update - Modal
function resetUploadModal() {
    document.querySelector(".progress-bar .progress").style.width = "0%";
    document.querySelector(".percent").textContent = "0%";
    document.querySelector(".file-name").textContent = "";
    document.querySelector(".file-size").textContent = "";
}

//Open Delete - Modal
function openDeleteModal() {
    document.getElementById('deleteModal').style.display = 'flex';
}

//Close Delete - Modal
function closeDeleteModal() {
    document.getElementById('deleteModal').style.display = 'none';
}

//Delete - Confirm
function confirmDelete() {
    document.getElementById('uploadText').value = '';
    document.getElementById('fileInput').value = ''; 
    closeDeleteModal(); 
    alert("Archivo eliminado.");
}
