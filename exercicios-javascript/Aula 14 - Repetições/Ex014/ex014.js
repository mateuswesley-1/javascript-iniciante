function contar(){
    var inicio = window.document.querySelector('input#inicio').value
    var fim = window.document.querySelector('input#fim').value
    var passo = window.document.querySelector('input#passo').value
    var texto = 'Início: <br>'
    
    if(fim == '' || passo=='0'){
        window.alert("Valores inválidos para Fim e/ou Passo!")
    }else{
        if(passo == ''){
            passo = '1'
        }
        // se o valor de inicio ou passo não forem fornecidos, serão considerados 0 e 1 
        // respectivamente
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
        if(inicio<fim){
            for (inicio; inicio<fim; inicio+=passo){
                texto +=`${inicio}<span>&#128684;</span>`
            }
        }
        else{
            for (inicio; inicio>fim; inicio-=passo){
                texto +=`${inicio}<span>&#128684;</span>`
            }
        }
        
        texto+='Fim'

        res.innerHTML = texto
    
    }

    
}