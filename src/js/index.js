// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { printRating } from './rating.js';
import { showWindow, comeBackWindow } from './show-window.js';

const formElement = document.getElementById('form')
const comeBackElement = document.getElementById('come-back')

formElement.addEventListener('submit', ev =>{
    ev.preventDefault()
    printRating(ev.target.points.value)
    showWindow()
})

comeBackElement.addEventListener('click', ev => {
    comeBackWindow()

})