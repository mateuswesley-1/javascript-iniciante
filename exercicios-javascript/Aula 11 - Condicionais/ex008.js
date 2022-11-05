var vel = 75

if(vel > 60){
    var multa = 10*(vel-60)
    console.log(`Você ultrapassou a velocidade limite de 60 km/h. Será aplicada uma multa de R$ ${multa} `)
} else{
    console.log(`Sua velocidade está dentro do limite permitido de 60km/h.
Parabéns!`)
}