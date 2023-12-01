//Escrevendo as classes de um Jogo

//O Que deve ser utilizado:

//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//- Funções
//- Classes e Objetos

// Objetivo:

//Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

//- nome
//- idade
//- tipo (ex: guerreiro, mago, monge, ninja )

//além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

//- exibir a mensagem: "o {tipo} atacou usando {ataque}")
//- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
//- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
//se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)

// Saída

//Ao final deve se exibir uma mensagem:

//- "o {tipo} atacou usando {ataque}"
//  ex: mago atacou usando magia
//  guerreiro atacou usando espada

//Solução:

//Classe Heroi com o construtor e o método atacar

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    if (this.tipo == "mago") {
      console.log(`${this.tipo} atacou usando magia`);
    } else if (this.tipo == "guerreiro") {
      console.log(`${this.tipo} atacou usando espada`);
    } else if (this.tipo == "monge") {
      console.log(`${this.tipo} atacou usando artes marciais`);
    } else if (this.tipo == "ninja") {
      console.log(`${this.tipo} atacou usando shuriken`);
    }
  }
}

//Instanciando os objetos

let heroi1 = new Heroi("Gustavo", 100, "mago");

heroi1.atacar();

let heroi2 = new Heroi("Luiz", 87, "guerreiro");

heroi2.atacar();

let heroi3 = new Heroi("Leonardo", 80, "monge");

heroi3.atacar();

let heroi4 = new Heroi("Roberto", 20, "ninja");

heroi4.atacar();

//Fim