divC.style.display = 'none'


const hideImputs = () => {
    let selected = selectTemp.value
    console.log(selected);

    if(selected === 'c'){
        divC.style.display = 'none'
        divF.style.display = 'block'

    }else if(selected === 'f'){
        divF.style.display = 'none'
        divC.style.display = 'block'

    }
}

const toC = () => {
    event.preventDefault()
    console.log('para celsius')
}

const toF = () => {
    event.preventDefault();
    console.log('para fahrenheit')
    let tempCelsius = celsius.value
    let tempF = ( tempCelsius * 9/5) + 32
    resultado.innerHTML = tempF

    exibirresult(tempF)
}
