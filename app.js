const loadText=document.querySelector('.loading-text')
const bg=document.querySelector('.bg')
const precision=0.01
let load=0

let int=setInterval(blurring,30)

function blurring(){
    load++
    if(load>99){
        clearInterval(init)
    }

    loadText.innerText=`${load}%`
    loadText .style.opacity=(1-load*precision)
    bg.style.filter=`blur(${(100-load)}px)`
}W