class Animal {

    constructor() {
        this.say = phrase => console.log(phrase)
    }

    run() {
        this.say('running');
    }
}

class Dog extends Animal{
    constructor() {
        super();

    }

    bark() {
        this.say('barking');
    }
}

dog = new Dog();
const mode = 1;
const action = mode === 1 ? dog.run() : dog.bark();console.log("test123")
