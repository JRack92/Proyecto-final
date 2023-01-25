const elements = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {

            entry.target.classList.add('card__Animation');

            observer.unobserve(entry.target);
        }
    });
});

elements.forEach(element => {
    observer.observe(element);
});