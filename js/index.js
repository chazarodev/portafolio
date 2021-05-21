//Cambio de color barra de navegación
window.onscroll = (e) => {
    const scroll = window.scrollY

    const header = document.querySelector('#navegacion-principal')
    if (scroll > 10) {
        header.classList.add('barra2')
        header.classList.remove('barra', 'pt-3')
    } else {
        header.classList.add('barra', 'pt-3')
        header.classList.remove('barra2')
    }

}

//Smooth scroll con js Nativo
document.querySelectorAll('.nav-link').forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault()

        document.querySelector(enlace.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})


//Tooltip
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover',
        placement: 'top'
    })
})
