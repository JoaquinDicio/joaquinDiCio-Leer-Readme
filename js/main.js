function main(){
    setMenu()
}

function setMenu(){
    const $menuBtn = document.getElementById('menuBtn')
    const $closeBtn = document.getElementById('closeBtn')
    $menuBtn.addEventListener('click',menuHandleClick)
    $closeBtn.addEventListener('click',menuHandleClick)
}
function menuHandleClick(){
    const $menu = document.getElementById('menu')
    $menu.classList.toggle('d-flex-md')
}