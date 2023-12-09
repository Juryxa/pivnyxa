const btns = document.querySelectorAll('.liquid');
const btns2 = document.querySelectorAll('.non_liquid');

btns.forEach(btn => {
  btn.addEventListener('click', function (){
    const direction = this.dataset.direction;
    const inp = this.parentElement.querySelector('.text');
    const currentValue = inp.value;
    let newValue;

    if (direction==='plus'){
      newValue = +currentValue + 0.5 < 500 ? +currentValue + 0.5 : 500;
    } else{
      newValue = +currentValue - 0.5 > 0.5 ? +currentValue - 0.5 : 0.5;
    }

    inp.value = newValue;
  })
})
btns2.forEach(btn => {
  btn.addEventListener('click', function (){
    const direction = this.dataset.direction;
    const inp = this.parentElement.querySelector('.text');
    const currentValue = parseInt(inp.value);
    let newValue;

    if (direction==='plus'){
      newValue = currentValue + 1 < 50 ? currentValue + 1 : 50;
    } else{
      newValue = currentValue - 1 > 1 ? currentValue - 1 : 1;
    }

    inp.value = newValue;
  })
})
const elem = document.querySelector('.liquid_text')
elem.onchange=function(e){
  let value = parseInt(e.target.value);
  if(value > 500) {
    e.target.value = 500;
  }
  if(!value || value < 0.5) {
    e.target.value = 0.5;
  }
}

const elem2 = document.querySelector('.non_liquid_text')
elem2.onchange=function(e){
  let value = parseInt(e.target.value);
  if(value > 50) {
    e.target.value = 50;
  }
  if(!value || value < 1) {
    e.target.value = 1;
  }
}
