const btnActiveNav = document.getElementById('btnActivNav')

btnActiveNav.addEventListener('click',()=>{
    const nav = document.getElementById('nav')
    nav.classList.toggle('nav-container_active')
})