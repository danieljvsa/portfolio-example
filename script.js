const toggleButton = document.querySelector('#btn-mobile')
const navbarLinks = document.querySelector('.menu')

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})