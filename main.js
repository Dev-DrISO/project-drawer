function generateNumber(){
    
    const min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)
    const result = document.querySelector(".result")

    if(min >= max){
        alert("O valor minimo tem que ser MAIOR que o valor maximo !")
    }else{
        const result1 = Math.floor(Math.random() * (max - min + 1)) + min;
        result.textContent = `Resultado ${result1}`
    }

}