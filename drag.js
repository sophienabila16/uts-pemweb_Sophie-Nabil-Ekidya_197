const dropArea = document.querySelector(".drag-area");
const button = dropArea.querySelector("button");
const input = dropArea.querySelector("input");

button.onclick = () => input.click();

input.addEventListener("change", function() {
  const file = this.files[0];
  dropArea.classList.add("active");
  showFile(file);
});

dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropArea.classList.add("active");
});

dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
});

dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  input.files = event.dataTransfer.files;  // Mengaitkan file yang di-drop ke input file
  showFile(file);
});

function showFile(file) {
  const validExtensions = ["application/pdf"];
  if (validExtensions.includes(file.type)) {
    alert("File uploaded: " + file.name);
  } else {
    alert("Invalid file type. Please upload a PDF file.");
    dropArea.classList.remove("active");
  }
}

function goToNextPage(event) {
  event.preventDefault(); // Mencegah form submission default
  // Ganti path di bawah ini dengan URL atau path halaman tujuan Anda
  window.location.href = 'index.html';
}