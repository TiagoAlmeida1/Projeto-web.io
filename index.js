var elementos = document.querySelectorAll('.duvida')

elementos.forEach(function (duvida) {
    const [p] = duvida.querySelectorAll(".paragrafo")
    duvida.addEventListener("click", function () {
        if (p.classList.contains('duvida-fechada')) {
            p.classList.remove('duvida-fechada')
        } else {
            p.classList.add('duvida-fechada')
        }
    })
})