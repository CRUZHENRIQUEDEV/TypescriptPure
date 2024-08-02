class Conta {
  numero: number;
  titular: string;
  constructor(numero: number, titular: string) {
    this.numero = numero;
    this.titular = titular;
  }
}

class AccountPF extends Conta {}
class AccountPJ extends Conta {}

const accout1 = new AccountPF(1235, "João");
const accout2 = new AccountPJ(1234, "Maria");

console.log(accout1.titular);
console.log(accout2.titular);
