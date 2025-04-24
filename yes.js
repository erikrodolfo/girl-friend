var audio = new Audio('src/falling-down.mp3')

function som() {
    let msg = document.getElementById('msg')
    msg.style.visibility = 'visible'

    
    let play = document.getElementById('music')
    audio.play()
    play.style.display = 'none'
    
    let carousel = document.getElementById('carrossel')
    setTimeout(() => {
        carousel.style.opacity = 0.8 
    }, 1200);
    
    let pausar = document.getElementById('pausar')
    pausar.style.display = 'block'

    let video = document.getElementById('video')
    
    video.style.transition = 'all 0.2s ease'
    setTimeout(() => {
        video.style.display = 'block' 
    }, 1200);
}

function pausar() {
    let pausar = document.getElementById('pausar')
    if(!audio.paused) {
        audio.pause()
    }
    pausar.style.display = 'none'

    let play = document.getElementById('music')
    play.style.display = 'block'
    play.textContent = 'play'
}
