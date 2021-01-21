const button = document.querySelectorAll('.sharing-icon');

button.forEach(btn => {
    btn.addEventListener('click', () => {
        const madeBy = document.querySelector('.card-by');
        const shareBox = document.querySelector('.share');
        // madeBy.classList.toggle('hidden');
        shareBox.classList.toggle('active')
    })
})
