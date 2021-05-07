const progress = document.getElementById('progressbar');
const steps = document.querySelectorAll('.step');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let currentState = 1;


next.addEventListener('click' ,() =>{
    currentState++
    
    if(currentState > steps.length){
        currentState=steps.length
    }
    update()
})

prev.addEventListener('click', () =>{
    currentState--
    
    if(currentState < 1){
        currentState =1 
    }
    update()
})

function update(){
    steps.forEach((step , idx) =>{
        if(idx < currentState){
            step.classList.add('active')
        }else{
            step.classList.remove('active')
        }
    })
    
    const actives = document.querySelectorAll('.active')
    
    progress.style.width = (actives.length - 1) / (steps.length - 1) * 100 + '%'
    
    if(currentState === 1){
        prev.classList.add('disabled')
    }else{
        prev.classList.remove('disabled')
    }
    if(currentState === steps.length){
    next.classList.add('disabled')
}else{
    next.classList.remove('disabled')
}
}