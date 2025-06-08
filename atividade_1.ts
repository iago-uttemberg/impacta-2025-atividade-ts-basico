const nome: string = "Maria";
const idade: number = 30;
const altura: number = 1.75;
const estudante: boolean = true;

const verificaParImpar = function(n: number): string {
    return n % 2 === 0 ? "par" : "ímpar";
};

const somatorio = function(n: number): number {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    return soma;
};

const fibonacci = function(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

class Retangulo {
    constructor(private largura: number, private altura: number) {}

    area(): number{
        return this.largura * this.altura;
    }

    perimetro(): number {
        return 2 * (this.largura + this.altura);
    }
};

export {nome, idade, altura, estudante, verificaParImpar, somatorio, fibonacci, Retangulo};