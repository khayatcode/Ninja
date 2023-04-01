

class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`My ninja name is ${this.name}`);
        return this;
    }
    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
        return this;
    }
    drinkSake() {
        this.health += 10;
        return this;
    }
}
    class Sensei extends Ninja {
        constructor(name) {
            super(name, 200, 10, 10);
            this.wisdom = 10;
        }
        speakWisdom() {
            super.drinkSake();
            console.log(`What one programmer can do in one month, you can do in two months.`);
            super.showStats();
            return this;
        }
}

const superSensei = new Sensei("Master Sensei");
superSensei.speakWisdom();