class Telephone {
    phoneNumbers = [];
    observer1 = new Observer("");
    observer2 = new Observer("");
  
    addPhoneNumber(number) {
        this.phoneNumbers.push(number);
    }

    removePhoneNumber(number) {
        const index = this.phoneNumbers.indexOf(number);
        if (index !== -1) {
            this.phoneNumbers.splice(index);
            console.log(`Phone Number: ${number} deleted successfully`);
        }
        else {
            console.log(`Number: ${number} not in database`);
        }
    }

    dialPhoneNumber() {
        this.notifyObserver(this.phoneNumbers[0], 0); 
        this.notifyObserver(this.phoneNumbers[1], 1); 
    }

    // Observer methods
    addObserver(observeObject) {
        this.observer1 = observeObject[0];
        this.observer2 = observeObject[1];
    }

    removeObserver(name) {
        if(observer1.name === name) {
            this.observer1.name = "";
            console.log(`Observer ${name} has been deleted Successfuly!`);
        }
        else {
            console.log(`Observer ${name} is not stored in database`);
        }
    }
    
    notifyObserver(number, bool) {
        if(bool === 0) {
            this.observer1.notify1(number);
        } else {
            this.observer2.notify2(number);
        }
    }
}

class Observer {
    name = "";
    constructor(nameOfObserver) {
        this.name = nameOfObserver;
    }

    notify1(number) {
        console.log(number);
    }
    
    notify2(number) {
        console.log("Now Dialing ", number);
    }

    printObserver() {
        console.log(`${this.name} is Observing`);
    }   
}

const telephone = new Telephone();
const observer1 = new Observer("Nonso");
const observer2 = new Observer("Reggie");

const temp = [observer1, observer2];

telephone.addObserver(temp);
telephone.addPhoneNumber('1234567890');
telephone.addPhoneNumber('2347023232');

telephone.dialPhoneNumber();
telephone.removePhoneNumber('2347023232');
telephone.removeObserver("Nonso");