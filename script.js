let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').oneclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active')
    cartItem.classList.remove('active')
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').oneclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
}

let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').oneclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
}