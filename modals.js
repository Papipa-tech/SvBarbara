"use-strict";
// KLASIRANJE////////////////////////////////////////
// Grabbing modal elements
//const mainModal = document.querySelector('.modal-usitnjavanje');
const mainModalKlasiranje = document.querySelector(".modal-klasiranje");
// generic modal properties
const mainOverlayKlasiranje = document.querySelector(".modal-overlay");
const mainCloseModalKlasiranje = document.querySelector(".close-modal");

// Grabbing custom modal elements
// Kamenolomi
// const modalUsitnjavanje = document.getElementById("usitnjavanje");
const modalKlasiranje = document.getElementById("klasiranje");
// const modalTransport = document.getElementById("transport");
// const modalOtprasivanje = document.getElementById("otprasivanje");
// const modalMiniranje = document.getElementById("miniranje");
// const modalPogon = document.getElementById("pogon");
// const modalUtovar = document.getElementById("utovar");
// const modalSigurnost = document.getElementById("sigurnost");
// Reciklaza
// const modalGradevinskiMaterijal = document.getElementById(
//   "gradevinskiMaterijal"
// );
// const modalDrvo = document.getElementById("drvo");
// const modalMetal = document.getElementById("metal");
// const modalBioOtpad = document.getElementById("bioOtpad");
// const modalOstali = document.getElementById("ostali");

const openModalKlasiranje = function () {
  mainModalKlasiranje.classList.remove("hidden");
  mainOverlayKlasiranje.classList.remove("hidden");
};

const closeModalKlasiranje = function () {
  mainModalKlasiranje.classList.add("hidden");
  mainOverlayKlasiranje.classList.add("hidden");
};

mainCloseModalKlasiranje.addEventListener("click", closeModalKlasiranje);
mainOverlayKlasiranje.addEventListener("click", closeModalKlasiranje);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !mainModalKlasiranje.classList.contains("hidden")) {
    closeModalKlasiranje();
  }
});

// Custom modals
//modalUsitnjavanje.addEventListener("click", openModalUsitnjavanje);
modalKlasiranje.addEventListener("click", openModalKlasiranje);
// modalTransport.addEventListener("click", openModal);
// modalOtprasivanje.addEventListener("click", openModal);
// modalMiniranje.addEventListener("click", openModal);
// modalPogon.addEventListener("click", openModal);
// modalUtovar.addEventListener("click", openModal);
// modalSigurnost.addEventListener("click", openModal);
// modalGradevinskiMaterijal.addEventListener("click", openModal);
// modalDrvo.addEventListener("click", openModal);
// modalMetal.addEventListener("click", openModal);
// modalBioOtpad.addEventListener("click", openModal);
// modalOstali.addEventListener("click", openModal);

//USITNJAVANJE
const mainModalUsitnjavanje = document.querySelector(".modal-usitnjavanje");
// generic modal properties
const mainOverlayUsitnjavanje = document.querySelector(".modal-overlay");
const mainCloseModalUsitnjavanje = document.querySelector(
  ".close-usitnjavanje"
);

const modalUsitnjavanje = document.getElementById("usitnjavanje");

const openModalUsitnjavanje = function () {
  mainModalUsitnjavanje.classList.remove("hidden");
  mainOverlayUsitnjavanje.classList.remove("hidden");
};

const closeModalUsitnjavanje = function () {
  mainModalUsitnjavanje.classList.add("hidden");
  mainOverlayUsitnjavanje.classList.add("hidden");
};

mainCloseModalUsitnjavanje.addEventListener("click", closeModalUsitnjavanje);
mainOverlayUsitnjavanje.addEventListener("click", closeModalUsitnjavanje);

document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    !mainModalUsitnjavanje.classList.contains("hidden")
  ) {
    closeModalUsitnjavanje();
  }
});

modalUsitnjavanje.addEventListener("click", openModalUsitnjavanje);
