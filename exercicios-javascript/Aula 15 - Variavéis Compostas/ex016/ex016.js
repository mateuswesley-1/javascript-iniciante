var lista = []
var res = document.querySelector('div#res')
var i = 1

// função para adicionar valores a lista
function adicionar(){
    // sempre que adicionar um número na lista reseta o resultado
    res.innerHTML = ''

    // número fornecido pelo usuário
    var txt_num = window.document.querySelector('input#numero')
    var num = Number(txt_num.value)

    // select onde serão exibidos todos os números
    var print_lista = document.querySelector('select#print_lista')
    
    // verifica se o usuário forneceu algum número,
    //precisamos verificar diretamente a propriedade que possui o conteúdo (.value) não o elemento em si, txt_num.value é uma string, diferente de txt_num, que é object
    if(txt_num.value == ''){
        window.alert('Entre com um valor válido!')
    }else{
        // adciona o valor fornecido ao fim da lista,
        // criamos um elemento que vai armazenar a option que será adcionada ao select
        lista.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        print_lista.appendChild(item)
    }

    // reseta a entrada no campo de preenchimento e seleciona ele para que o usuário não precise clicar novamente.
    txt_num.value = ''
    txt_num.focus()


}

// função que usará os valores armazenados pelo usuário para cálcular algumas métricas e depois exibir na tela.
function finalizar(){

    //verifica se a lista possui valores, é importante dizer que os valores não estão sendo armazenados no select, que serve somente para dar um feedback ao usuário, e sim numa lista = []
    if(lista.length == 0){
        window.alert('Adicione valores à lista!')
    }else{
        // conteúdo que será impresso e soma.
        var txt_resposta = ''
        var soma = 0

        // calculando soma
        for(i in lista){
            soma+=lista[i]
        }

        // ordena a lista de forma decrescente, para que o menor valor esteja na posição 0 e dps reverte para pegar o maior valor
        lista.sort()
        //menor
        var menor = lista[0]
        //maior
        lista.reverse()
        var maior = lista[0]

        //media
        var media = soma/lista.length

        // Coloca o texto dentro de <p>, para garantir que cada variável apareça em uma única linha.
        txt_resposta = `<p>Soma: ${soma}</p>
                        <p>Maior número: ${maior}</p>
                        <p>Menor número: ${menor}</p>
                        <p>Média: ${(media).toFixed(1)}</p>`

        res.innerHTML = txt_resposta
    }
    

}
    


