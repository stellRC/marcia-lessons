const audioBtn = document.querySelector('[data-audio]')
const audio = document.querySelector('audio')

let state = 'play';

audioBtn.addEventListener('click', () => {
    if(state === 'play') {
        audio.play()
        state = 'pause'
        audioBtn.classList.add('grayscale')
    } else {
        audio.pause()
        state = 'play'
        audioBtn.classList.remove('grayscale')
    }
})