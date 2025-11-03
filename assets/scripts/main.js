const size = document.querySelector("#size")
const weight = document.querySelector("#weight")
let resultContainer = document.querySelector("#result")
let commentContainer = document.querySelector("#comment")

commentContainer.textContent = "Veuillez saisir vos données"
commentContainer.style.color = "#959eb3"
let comment = ""

function calculIMC(){
    
    if( size.value <= 0 || weight.value <= 0 || !isFinite(size.value) || !isFinite(weight.value)) {
            commentContainer.textContent = ""
            resultContainer.textContent = ""
            commentContainer.style.color = "#ef4444"
            resultContainer.style.color = "#ef4444"
            commentContainer.textContent = "Les données saisies ne sont pas valides"
            return
    }

    commentContainer.textContent = ""
    let result = (parseFloat(weight.value) / parseFloat(size.value**2)).toFixed(1)
    resultContainer.textContent = result

    if(result >= 40.0){
        resultContainer.style.color = "#ef4444"
        comment = 'Plus de 40.0 => Obésité de classe III'
    }else if(result >= 35.0){
        comment = 'Plus de 35.0 => Obésité de classe II'
        resultContainer.style.color = "#ea580c"
    }else if(result >= 30.0){
        comment = 'Plus de 30.0 => Obésité de classe I'
        resultContainer.style.color = "#d97706"
    }else if(result >= 25.0){
        comment = 'Plus de 25.0 => surpoids'
        resultContainer.style.color = "#ca8a04"
    }else if(result >= 18.5){
        comment = 'Plus de 25.0 => Corpulence normale'
        resultContainer.style.color = "#16a34a"
    }else if(result > 0){
        comment = 'Moins de 18.5 => Insuffisance pondérale'
        resultContainer.style.color = "#ea580c"
    }
    commentContainer.style.color = "#14161c"
    commentContainer.textContent = comment

}

