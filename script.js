// Tabs
document.querySelectorAll(".tab-link").forEach(btn => {
  btn.addEventListener("click", function(){
    document.querySelectorAll(".tab-link").forEach(b=>b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c=>c.style.display="none");
    this.classList.add("active");
    document.getElementById(this.dataset.tab).style.display="block";
  });
});

// Popups
document.getElementById("shareBtn").onclick = () => openPopup('sharePopup');
document.getElementById("qrBtn").onclick = () => openPopup('qrPopup');

function openPopup(id){
  document.getElementById(id).style.display = "flex";
}

function closePopup(id){
  document.getElementById(id).style.display = "none";
}
