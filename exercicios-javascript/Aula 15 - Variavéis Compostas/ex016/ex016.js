var lista = []
var res = document.querySelector('div#res')
var i = 1

function remover(botao){
    var txt_num = window.document.querySelector('input#numero')
    var num = Number(txt_num.value)
    var print_lista = document.querySelector('select#print_lista')
}

function adicionar(){
    res.innerHTML = ''
    var txt_num = window.document.querySelector('input#numero')
    var num = Number(txt_num.value)
    var print_lista = document.querySelector('select#print_lista')

    if(txt_num.value == ''){
        window.alert('Entre com um valor válido!')
    }else{
        lista.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        print_lista.appendChild(item)
    }
    txt_num.value = ''
    txt_num.focus()


}

function finalizar(){
    if(lista.length == 0){
        window.alert('Adicione valores à lista!')
    }else{
        res.innerHTML = ''
        var txt_resposta = ''
        var soma = 0
        for(i in lista){
            soma+=lista[i]
        }
        lista.sort().reverse()
        //maior
        var maior = lista[0]
        //menor
        lista.reverse()
        var menor = lista[0]
        //media
        var media = soma/lista.length

        txt_resposta = `<p>Soma: ${soma}</p>
                        <p>Maior número: ${maior}</p>
                        <p>Menor número: ${menor}</p>
                        <p>Média: ${(media).toFixed(1)}</p>`

        res.innerHTML = txt_resposta
    }
    

}
    


