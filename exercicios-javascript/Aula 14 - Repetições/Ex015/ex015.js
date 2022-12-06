 function tabuada(){
    var txt_numero = document.querySelector('input#numero').value
    var tab = document.querySelector('select#tabuada')
    var limite = document.querySelector('input#limite')

    if(txt_numero == ''){
        window.alert("Por favor digite um número!")
    }else{
        let num_numero = Number(txt_numero)
        let limite_tabuada = Number(limite.value)
        tab.innerHTML = ' '
        for(var i=1;i<=limite_tabuada;i++){
            let item = document.createElement('option')
            item.text = `${num_numero}x${i}=${num_numero*i}`
            tab.appendChild(item)
        }
    }
 }
