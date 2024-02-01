let registerbox = document.querySelector('.register')

let search = document.querySelector('.input__search')


const burger = document.querySelector('.burger')
const burger__btn = document.querySelector('.burger__btn')


let popup = () =>{
registerbox.classList.toggle('active')
}

let popout = () =>{
    registerbox.classList.toggle('cancel')
}
let search_popup = () =>{
    search.classList.toggle('active')
}

let toggleBurger = () =>{
    burger.classList.toggle('active')
    burger__btn.classList.toggle('active')
}


