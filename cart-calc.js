const additionBtns = document.querySelectorAll('.addition')
const subtractBtns = document.querySelectorAll('.subtract')
const valueInput = document.querySelectorAll('.value-input')



additionBtns.forEach((button)=>{
    let inputBox = button.nextElementSibling;
    console.log(inputBox) 
    button.addEventListener('click',()=>{
        inputBox.value++;
                console.log('addition clicked')
    })
})

subtractBtns.forEach((button)=>{
    let inputBox = button.previousElementSibling;
    console.log(inputBox) 
    button.addEventListener('click',()=>{
        if(inputBox.value > 0){
            inputBox.value--;

        }
                console.log('addition clicked')
    })
})

// additionBtn.addEventListener('click',()=>{
//     valueInput.value++;
//     console.log('addition clicked')
// })
// subtractBtn.addEventListener('click',()=>{
//     if(valueInput.value > 0){
//         valueInput.value--;
//         console.log('subtraction clicked')
//     }
// })