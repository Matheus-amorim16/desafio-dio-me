class heroi {
    constructor(nome, classe, idade, ataque) {
        this.nome = nome;
        this.classe = classe;
        this.idade = idade;
        this.ataque = ataque;
    }

    atacar() {
        if(this.classe === "guerreiro"){
            if(this.idade < 18){
                console.log(`O  ${this.nome} é apenas um aprendiz, ele acertou o alvo com um ${this.ataque}. Não foi forte o suficiente, eler precisa treinar mais. `);
            } else if (this.idade >= 18 && this.idade <= 50){   
                console.log(`O ${this.nome} atacou com um ${this.ataque} e acertou em cheio no inimigo! Um ataque poderoso!`); 
                } else {
                    console.log(`O ${this.nome} é um guerreiro experiente, mas a idade pesa. Ele atacou com um ${this.ataque}, foi um corte limpo, perfeito, mas sem tanta força quanto antes.`   
            );
        }
    }
    else if (this.classe === "mago"){
        if(this.idade < 18){
            console.log(`O ${this.nome} é um jovem mago, ele lançou um feitiço de ${this.ataque}. O feitiço foi lançado, mas faltou controle e poder. Precisa de mais prática.`);
        } else if (this.idade >= 18 && this.idade <= 50){   
            console.log(`O ${this.nome} conjurou um feitiço de ${this.ataque} com maestria! O inimigo foi atingido em cheio, um ataque mágico impressionante!`);
        } else {
            console.log(`O ${this.nome} é um mago sábio, mas a idade afeta sua energia. Ele lançou um feitiço de ${this.ataque}, foi devastador, não sobrou nada do inimigo, apesar da idade, sua mente continua afiada.`);
        
        }
    }
    else if (this.classe === "monge"){
        if(this.idade < 18){
            console.log(`O ${this.nome} é um jovem monge, ele atacou com ${this.ataque}. O ataque foi preciso, mas ainda não dominou o estilo.`);
        } else if (this.idade >= 18 && this.idade <= 50){   
            console.log(`O ${this.nome} atacou com ${this.ataque} com maestria! O inimigo foi derrotado em um único golpe.`);
        } else {
            console.log(`O ${this.nome} é um monge experiente, mas a idade afeta sua força. Ele atacou com ${this.ataque}, foi um movimento rápido e eficaz.`);
        }
    }
    else if (this.classe === "ninja"){
        if(this.idade < 18){
            console.log(`O ${this.nome} é apenas um aprendiz, ele atacou com ${this.ataque}. O ataque foi rápido e eficaz, mas não foi furtivo, precisa de mais treinamento..`);
        } else if (this.idade >= 18 && this.idade <= 50){   
            console.log(`O ${this.nome} atacou com ${this.ataque} com maestria! O inimigo foi derrotado em um único golpe.`);
        } else {
            console.log(`O ${this.nome} é um ninja experiente, mas a idade afeta sua velocidade. Ele atacou com ${this.ataque}, foi um movimento preciso e silenciosamente letal.`);

        }
    }   
    else if (this.classe === "arqueiro"){
        if(this.idade < 18){
            console.log(`O ${this.nome} é apenas um aprendiz, ele atirou com ${this.ataque}. O ataque não foi tão preciso, então ainda precisa de mais treinamento.`);
        } else if (this.idade >= 18 && this.idade <= 50){   
            console.log(`O ${this.nome} atirou com ${this.ataque} com maestria! O inimigo foi derrotado em um único disparo`);
        } else {
            console.log(`O ${this.nome} é um arqueiro experiente, mas a idade afeta sua precisão. Ele atirou com ${this.ataque}, foi um disparo eficaz mas um pouco impreciso.`);
        }
    }
 }
}
let mago = new heroi ( "Zakrarim", "mago", 27, "Tempestade de Raios!");
mago.atacar();

let guerreiro = new heroi ( "Thorgal", "guerreiro", 52, "Corte Devastador!");  
guerreiro.atacar();

let ninja = new heroi ( "Kaito", "ninja", 16, "Estrela Cadente!");  
ninja.atacar()

let arqueiro = new heroi ( "Lyria", "arqueiro", 34, "Flecha Veloz!");  
arqueiro.atacar()

let monge = new heroi ( "Tenzin", "monge", 61, "Punho do Dragão!");  
monge.atacar()      
