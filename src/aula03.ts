class Curso {
  canal: string;
  curso: string;
  constructor(canal: string, curso:string) {
    this.canal = canal;
    this.curso = curso;
  }
}

let c1 = new Curso("CFB Cursos", "Typescript");
console.log(c1.canal);
console.log(c1.curso);
