let el1 = document.getElementById('el1')
let el2 = document.getElementById('el2')
let el3 = document.getElementById('el3')
let el4 = document.getElementById('el4')

window.addEventListener('resize', function () {
    if (window.innerWidth <= 575) {
      el2.classList.add('order-3');
      el2.classList.remove('order-1');
    } else {
      el2.classList.remove('order-3');
      el2.classList.add('order-1')
    }
});