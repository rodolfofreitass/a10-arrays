const numeros = [2, -4, 9, 1, -12, 5, 20]
const strings = ['carros','motos','barcos','avioes']
const mistos = [38, 11, -23, 'youtube', 'instagram', false, true]

const mensagemQuant = ('Quantidade de itens do array')

console.log(mensagemQuant,'numeros:', numeros.length)
console.log(mensagemQuant, 'strings:', strings.length)
console.log(mensagemQuant, 'mistos:', mistos.length)

console.log('Primeiro item de numeros:', numeros[0])
console.log('Segundo item de strings:', strings[1])
console.log('Terceiro item de mistos:', mistos[2])

numeros.push(6)
console.log('numeros possui o 6?', numeros.includes(6))
console.log('mistos possui o 6?', mistos.includes(6))


