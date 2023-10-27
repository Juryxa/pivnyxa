const yes = document.getElementsByClassName("yes")[0];
const no = document.getElementsByClassName("no")[0];
const no18 = document.getElementsByClassName("no_18")[0];
const no18txt = document.getElementsByClassName("no_18_txt")[0];
const modal = document.getElementsByClassName("modal")[0];
const confirmModal = document.getElementsByClassName("confirm-modal")[0];
const body = document.getElementsByTagName('body')[0];
yes.addEventListener("click", function () {
  confirmModal.style.display = "none";
  body.style.overflow = "auto";
});
no.addEventListener("click", function (){
  modal.style.display = "none";
  modal.style.zIndex = "-1";
  no18.style.zIndex = "2";
  no18txt.style.zIndex = "2";
  no18.style.display = "block";
  modal.classList.toggle('no_18')
})
