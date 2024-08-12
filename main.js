let color='black';
let black=document.querySelector('#black')
let rainbow=document.querySelector('#rainbow')
let eraser=document.querySelector('#eraser')
let reset=document.querySelector('#reset')
let value=document.querySelector('#resizeValue')
let resizeBtn=document.querySelector('#resizeBtn')

function drawCells(size){
  let container=document.querySelector('#container')
let squares=container.querySelectorAll('div')
    squares.forEach((div) => div.remove())
    container.style.gridTemplateColumns=`repeat(${size},1fr)`
    container.style.gridTemplateRows=`repeat(${size},1fr)`

    let amount=size*size
    for(let i=0; i<amount; i++){
        let square=document.createElement('div')
        square.classList.add('cell')
        square.addEventListener('mouseover', colorSquare)
        container.insertAdjacentElement('beforeend',square)
    }
}

drawCells(24)

function changeSize(input){
    input>=2 && input<=100 ? drawCells(input) : console.log('change error')
}

function colorSquare() {
    color === "random" ? this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` : this.style.backgroundColor = color;
  }

  function changeColor(choice) {
    color = choice;
  }

  function resetContainer(){
    let container=document.querySelector('#container')
let squares=container.querySelectorAll('div')
    squares.forEach((div) => (div.style.backgroundColor = "whitesmoke"));
  }

  resizeBtn.addEventListener('click',(e)=>{drawCells(value.value)})
  black.addEventListener('click', (e)=>{changeColor('black')})
  rainbow.addEventListener('click',(e)=>{changeColor('random')})
  eraser.addEventListener('click',(e)=>{changeColor('whitesmoke')})
  reset.addEventListener('click',(e)=>{resetContainer()})
