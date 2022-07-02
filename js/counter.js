(function(){
    const minusBtn = document.querySelector('#minus')
    const plusBtn = document.querySelector('#plus')
    const counterNumber = document.querySelector('#number-counter')

    minusBtn.addEventListener('click',()=>{
        addNumber(-1)
    })

    plusBtn.addEventListener('click',()=>{
        addNumber(1)
    })

    const addNumber = (number)=>{
        value = Number(counterNumber.innerHTML)
        if(value===0 && number<0){
         return
        }else{
            value+= number
        }
        counterNumber.innerHTML = value
    }
})()