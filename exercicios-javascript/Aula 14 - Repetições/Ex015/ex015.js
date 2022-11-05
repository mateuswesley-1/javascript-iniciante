 function tabuada(){
    var txt_numero = document.querySelector('input#numero').value
    var tab = document.querySelector('select#tabuada')

    if(txt_numero == ''){
        window.alert("Por favor digite um número!")
    }else{
        var num_numero = Number(txt_numero)
        tab.innerHTML = ' '
        for(var i=1;i<=10;i++){ 
            let item = document.createElement('option')
            item.text = `${num_numero}x${i}=${num_numero*i}`
            tab.appendChild(item)
        }
    }
 }