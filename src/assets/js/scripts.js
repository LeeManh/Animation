const btns = document.querySelectorAll('.btn');

btns.forEach(btn => btn.addEventListener('click', activeBtn))

function activeBtn() {

  btns.forEach(btn => btn.classList.remove("btn--active"));
  this.classList.add("btn--active");
}
