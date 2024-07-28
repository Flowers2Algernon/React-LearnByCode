class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        console.log(Object.getPrototypeOf(this));
    }
}

class highSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed on?', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% optional');
    }
}

var myFirstTrain = new Train('red', true);
// console.log(myFirstTrain);
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('green', true);

var train4 = new Train('red', false);
// console.log(train4.toggleLights());
// console.log(train4.getSelf());
// console.log(train4.getPrototype());
// console.log(train4.lightsStatus());

var highTrain = new highSpeedTrain(200, false, 'yello', false);
highTrain.toggleHighSpeed();
highTrain.toggleLights();