class Animal {
    constructor(color, energy){
        this.color = color;
        this.energy = energy;
    }
    isActive(){
        if(this.energy > 0){
            this.energy -= 20;
            console.log(this.energy);
        }else{
            this.sleep();
        }
    }
    sleep(){
        this.energy += 20;
        console.log(this.energy);
    }
}
class Cat extends Animal {
    constructor(sound, canJumpHigh, canClimbTrees, color, energy){
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound(){
        console.log(this.sound);
    }
}
class Bird extends Animal {
    constructor(sound, canFly, color, energy){
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound(){
        console.log(this.sound);
    }
}
class HouseCat extends Cat {
    constructor(houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option){
        if(option){
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}
class Tiger extends Cat {
    constructor(tigerSound, sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option){
        if(option){
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}
class Parrot extends Bird {
    constructor(canTalk, sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }
    makeSound(option){
        if(option){
            super.makeSound();
        }
        if(this.canTalk){
            console.log('talking!');
        }
    }
}