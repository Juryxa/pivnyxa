const drop = document.querySelector('.dropdown_content');
const bar = document.querySelector('.bar');
  bar.onclick = function (e){
    e.preventDefault();
    drop.classList.toggle('dropdown_content_out')
  }

