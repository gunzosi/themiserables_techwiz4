const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// product
var mainImg = document.getElementById('main-img')
var samlling = document.querySelectorAll('.smail-img')

samlling.forEach(img => {
    img.addEventListener('click', () => {
        mainImg.src = img.src
    })
})


// item detail
var pro = document.querySelectorAll('.pro')
pro.forEach(item => {
    item.addEventListener('click', () => {
        window.location.href = 'sproduct.html'
    })
})










