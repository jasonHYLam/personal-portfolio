export function show(className, visibleHeight) {
    const content = document.querySelectorAll(className)
    const windowHeight = window.innerHeight;

    content.forEach(el => {
        if (el.classList.contains('active')) return;

        const elTop = el.getBoundingClientRect().top;
        if (elTop < windowHeight - visibleHeight) {
            el.classList.add('active')
        }
    })
}

export function showContentContainer() {
    show('.content-container', 380)
}

export function showLinkIcon() {
    show('.link', 120)
}

export function showOnScroll() {
    window.addEventListener('scroll', showContentContainer);
    window.addEventListener('scroll', showLinkIcon);
}
