const cardRatingElement = document.getElementById('card-rating')
const cardThanksElement = document.getElementById('card-thanks')

const showWindow = () => {
    cardRatingElement.classList.add('card-remove')
    cardThanksElement.classList.add('card-add')
}

const comeBackWindow = () => {
    cardRatingElement.classList.remove('card-remove')
    cardThanksElement.classList.remove('card-add')

}

export {showWindow, comeBackWindow}