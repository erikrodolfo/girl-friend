
function not() {  
    let btnYes = document.getElementById('btnYes')
    let btnNot = document.getElementById('btnNot')
    let altura = window.innerHeight - btnYes.offsetHeight
    let largura = window.innerWidth - btnYes.offsetWidth
    let posicaoX = Math.floor(Math.random() * largura) 
    let posicaoY = Math.floor(Math.random() * altura)
    let opacidade = 1
    
    posicaoX < 0 ? 0 : posicaoX
    posicaoY < 0 ? 0 : posicaoY

    btnNot.style.position = 'absolute'
    btnNot.style.left = `${posicaoX}px`
    btnNot.style.top = `${posicaoY}px`
    btnNot.style.transition = "all 0.2s ease";
    btnYes.className = 'anim-btn'
    btnYes.style.transition = "all 0.2s ease";

   let opAtual = parseFloat(getComputedStyle(btnNot).opacity)

    if(opAtual > 0) {
        let newOp = Math.max(opAtual - 0.04, 0)
        btnNot.style.opacity = newOp.toFixed(2)
    }

    if (opAtual === 0) {
        btnNot.style.display = 'none'
    }
} 

//criando botão de reset
let resetDiv = document.createElement('div')
let button = document.createElement('button')
resetDiv.style.alignSelf = 'end'
resetDiv.style.background = '#351C59'
resetDiv.style.width = `100vw`
resetDiv.style.position = 'absolute'
resetDiv.style.left = `0px`
resetDiv.style.bottom = `0px`
resetDiv.style.textAlign = 'center'
button.textContent = 'clique aqui para resetar'
button.style.display = 'inline-block';
button.style.marginBottom = '4px'
button.style.border = 'none'
button.style.background = 'none'
button.style.fontSize = `13px`
button.style.fontWeight = 'bolder'
button.className = 'resetBtn'
button.addEventListener("click", () => {
    location.reload()
})

resetDiv.appendChild(button)
document.body.appendChild(resetDiv)

function yes() {

}



    