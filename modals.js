"use-strict";
// Grabbing universal modal elements
const mainModal = document.querySelector(".modal-window");
const mainOverlay = document.querySelector(".modal-overlay");
const mainCloseModal = document.querySelector(".close-modal");

// Grabbing custom modal elements
// Kamenolomi
const modalUsitnjavanje = document.getElementById("usitnjavanje");
const modalKlasiranje = document.getElementById("klasiranje");
const modalTransport = document.getElementById("transport");
const modalOtprasivanje = document.getElementById("otprasivanje");
const modalMiniranje = document.getElementById("miniranje");
const modalPogon = document.getElementById("pogon");
const modalUtovar = document.getElementById("utovar");
const modalSigurnost = document.getElementById("sigurnost");
// Reciklaza
const modalGradevinskiMaterijal = document.getElementById(
  "gradevinskiMaterijal"
);
const modalDrvo = document.getElementById("drvo");
const modalMetal = document.getElementById("metal");
const modalBioOtpad = document.getElementById("bioOtpad");
const modalOstali = document.getElementById("ostali");

const openModal = function () {
  mainModal.classList.remove("hidden");
  mainOverlay.classList.remove("hidden");
};

const closeModal = function () {
  mainModal.classList.add("hidden");
  mainOverlay.classList.add("hidden");
};

mainCloseModal.addEventListener("click", closeModal);
mainOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !mainModal.classList.contains("hidden")) {
    closeModal();
  }
});

// Custom modals
modalUsitnjavanje.addEventListener("click", openModal);
modalKlasiranje.addEventListener("click", openModal);
modalTransport.addEventListener("click", openModal);
modalOtprasivanje.addEventListener("click", openModal);
modalMiniranje.addEventListener("click", openModal);
modalPogon.addEventListener("click", openModal);
modalUtovar.addEventListener("click", openModal);
modalSigurnost.addEventListener("click", openModal);
modalGradevinskiMaterijal.addEventListener("click", openModal);
modalDrvo.addEventListener("click", openModal);
modalMetal.addEventListener("click", openModal);
modalBioOtpad.addEventListener("click", openModal);
modalOstali.addEventListener("click", openModal);
