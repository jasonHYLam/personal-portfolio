export function show() {
    const content = document.querySelectorAll('.content-container')
    const windowHeight = window.innerHeight;
    const elVisible = 350;

    content.forEach(el => {
        if (el.classList.contains('active')) return;

        const elTop = el.getBoundingClientRect().top;
        if (elTop < windowHeight - elVisible) {
            el.classList.add('active')
        }
    })
}

export function showOnScroll() {
    window.addEventListener('scroll', show);
}
