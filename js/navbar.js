var menuList = document.getElementById('menu-list')
var menu = document.getElementById('menu-button')
var header = document.getElementById('header')
var headerBottom = document.getElementById('header-bottom')

menu.addEventListener('click', () => {
  let width = window.innerWidth
  if(menuList.style.display === 'flex'){
    menuList.style.display = 'none'
    menu.style.backgroundColor = 'transparent'
    menu.style.color = 'white'
    header.classList.remove('header-increase')
    headerBottom.classList.remove('header-bottom-show')
  } else{
    menuList.style.display = 'flex'
    menu.style.backgroundColor = 'white'
    menu.style.color = '#0a0a23'
    if(width <= 980){
      header.classList.add('header-increase')
      headerBottom.classList.add('header-bottom-show')
    }
  }
})