window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
})

const keys = document.querySelectorAll(`div[data-key]`);
keys.forEach((key) => {
    key.addEventListener('transitionend', (e) => {
        e.target.classList.remove('playing')
    })
})
