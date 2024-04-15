class Pessoa {

    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
    meuImc(peso, altura){
        const imc = this.peso / (this.altura * this.altura)
        console.log(`Meu IMC é de ${imc.toFixed(2)}`)
    }
}

function compararPessoas(pessoa1, pessoa2){

if(pessoa1.idade > pessoa2.idade){
console.log(`${pessoa1.nome} é mais velho que ${pessoa2.nome}`);

}else if (pessoa2.idade > pessoa1.idade){
console.log(`${pessoa1.nome} é mais velho que ${pessoa2.nome}`);

}else {
    console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade`);
 }

}

const Joao = new Pessoa("João", 25, 80, 1.75)
const Maria = new Pessoa("Maria", 22, 50, 1.55)

compararPessoas(Joao, Maria)
