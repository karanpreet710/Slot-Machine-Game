let value1=document.getElementById('value1')
let value2=document.getElementById('value2')
let value3=document.getElementById('value3')

let inpSpeed=document.getElementById('inpSpeed')

let start=document.getElementById('start')
let stop=document.getElementById('stop')

let values = [
    '😁','😇','😭'
]

function getRandomValue(){
    return values[Math.floor(Math.random()*3)]
}

let animationId;
start.onclick = function(){
    value1.classList.add('animate')
    value2.classList.add('animate')
    value3.classList.add('animate')
    animationId=setInterval(()=>{
    value1.innerText=getRandomValue()
    value2.innerText=getRandomValue()
    value3.innerText=getRandomValue()
},100)
}

stop.onclick = function(){
    value1.classList.remove('animate')
    value2.classList.remove('animate')
    value3.classList.remove('animate')
    clearInterval(animationId)
    if(value1.innerText==value2.innerText && value2.innerText==value3.innerText)
    {
        setTimeout(()=>{
            alert('You have won......Hurrayyyyy!!!!')
        },100)
    }
    else
    {
        setTimeout(()=>{
            alert('Try Again!')
        },100)
    }
}

function updateAnimation(newSpeed)
{
    if(animationId) clearInterval(animationId)

    animationId=setInterval(()=>{
        value1.innerText=getRandomValue()
        value2.innerText=getRandomValue()
        value3.innerText=getRandomValue()
    },1000/newSpeed)
}


inpSpeed.onchange = function(ev){
    document.documentElement.style.setProperty('--speed',ev.target.value)
    updateAnimation(ev.target.value)
}