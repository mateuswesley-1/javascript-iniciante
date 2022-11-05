function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var ano_input = document.querySelector('input#txt-ano')
    var res = document.querySelector('div#res')
        if (ano_input.value.length == 0){
            window.alert("Preencha todos os dados obrigatórios.")
        } else if (ano_input.value > ano){
            window.alert(`Entre com um ano menor que o ano atual: ${ano}`)
        }else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(ano_input.value)
            var genero;
            var img = document.createElement('img')
            img.setAttribute('id','foto')

            if (fsex[0].checked){
                genero = 'Homem'
                if(idade<10){
                    img.setAttribute('src','imagens/foto-bebe-m.png')
                }else if(idade<20){
                    img.setAttribute('src','imagens/foto-jovem-m.png')
                }else if(idade<60){
                    img.setAttribute('src','imagens/foto-adulto-m.png')
                }else{
                    img.setAttribute('src','imagens/foto-idoso-m.png')
                }
            }else if(fsex[1].checked){
                genero = 'Mulher'
                if(idade<10){
                    img.setAttribute('src','imagens/foto-bebe-f.png')
                }else if(idade<20){
                    img.setAttribute('src','imagens/foto-jovem-f.png')
                }else if(idade<60){
                    img.setAttribute('src','imagens/foto-adulto-f.png')
                }else{
                    img.setAttribute('src','imagens/foto-idoso-f.png')
                }
            }else{
                genero = 'Outro'
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos `
            res.appendChild(img)



}}