    let navbar = document.querySelector('nav ul'),
            bars = document.querySelector('.bars');
        console.log(bars)
    bars.onclick = () => {
        if (!(navbar.classList.contains('show'))) {
            navbar.classList.toggle('show');
            navbar.style.display = 'block'
        }else {
            navbar.classList.toggle('show');
            navbar.style.display = 'none'
        }
    }

    let links = document.querySelectorAll('nav ul li a');

    scrollTo(links);

    function scrollTo(el) {
        el.forEach(e => {
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior : 'smooth'
            })
        })
    };