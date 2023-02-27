class Hero {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
        this.canFly = false;
        this.shield = false;
    }

    attacked(damage) {
        //daca eroul are proprietatea canFly === true
        if(this.canFly) {
            let chance = Math.random(); // cream o variabila 'chance' care tine valoarea returnata prin apelarea metodei Math.random (returneaza nr. intre 0 si 1)
            if(chance > 0.5) {
                console.log(this.name + ' flew away.');
                damage = 0; //eroul a zburat si a evitat damage-ul
            } 
        }

        // daca eroul are proprietatea SHIELD === true, damage-ul este redus cu 20%
        if(this.shield) {
            damage *= 0.8; // damage = damage * 0.8; damageul este redus cu 20%
            console.log(this.name + ' defends with a shield.')
            }
        this.hp -= damage;
        
        console.log(this.name + ' has been attacked. HP reduced by ' + damage + ". HP remaining: " + this.hp + ".");
    }
}


class Dwarf extends Hero {
    constructor(name, hp) {
        super(name, hp); // chemam constructorul Parinte
        this.shield = true; // am suprascris proprietatea din clasa Parinte
    }

    attack(otherHero) {
        let damage = 10;
        console.log(this.name + ' attacked with damage: ' + damage + '.');
        otherHero.attacked(damage);
    }
}

class Sprite extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.canFly = true;
    }

    attack(otherHero) {
        let damage = 15;
        console.log(this.name + ' attacked with damage: ' + damage + '.');
        otherHero.attacked(damage);
    }
}

class Dragon extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.canFly = true;
        this.shield = true;
    }

    attack(otherHero) {
        let damage = 5;
        console.log(this.name + ' attacked with damage: ' + damage + '.');
        otherHero.attacked(damage);
    }
}

class Fight {
    constructor(hero1, hero2) {
        this.hero1 = hero1;
        this.hero2 = hero2;
        this.turn = 0;
    }

    performAttack() {
        if (this.turn === 0) {
            this.hero1.attack(this.hero2);
        } else {
            this.hero2.attack(this.hero1);
        }
    }

    changeTurn() {
        this.turn = 1 - this.turn;
    }

    findWinner() {
        let winnerText = '';
        if (this.hero1.hp > 0) {
            winnerText = this.hero1.name + ' won with ' + this.hero1.hp + ' HP left.'
            console.log(winnerText);
        } else if (this.hero2.hp > 0) {
            winnerText = this.hero2.name + ' won with ' + this.hero2.hp + ' HP left.'
            console.log(winnerText);
        } else {
            console.log('No heroes left alive.');
            winnerText = 'No heroes left alive.';
          
        }
        return winnerText;
    }

    go() {
        do {
            this.performAttack();
            this.changeTurn();
        } while (this.hero1.hp > 0 && this.hero1.hp > 0);
        this.findWinner();
    }
}

let dwarf = new Dwarf('Blue Bird Sword', 60);
let sprite = new Sprite('The Purple Dragon', 40);
let dragon = new Dragon('Killer Fan Queen', 50);
// console.log(dwarf);
// console.log(sprite);
// console.log(dragon);

let epicFight = new Fight(dwarf, sprite);
epicFight.go();
var winner = epicFight.findWinner();
// console.log('castigatorul este' + winner);


function showAlert() {
var winner = epicFight.findWinner();
boxMessage.classList.add('d-block');
document.getElementById('myText').innerHTML = winner;
showWinner.classList.remove('d-block');
}