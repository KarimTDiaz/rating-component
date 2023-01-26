const numberSelectedElement = document.getElementById('number-selected')

const printRating = (value)=>{
    numberSelectedElement.textContent = `You selected ${value} out of 5`
}

export {printRating}
