interface publisher {
    registerSubscriber(subscriber: subscriber);
    removeSubscriber(subscriber: subscriber);
    notifySubscribers();
}

interface subscriber {
    update(avaliablity: boolean);
}

class store implements publisher {

    private subscribers: subscriber[] = [];
    private avaliablity: boolean;

    registerSubscriber(subscriber: subscriber): void {
        this.subscribers.push(subscriber);
    }

    removeSubscriber(subscriber: subscriber) {
        let index = this.subscribers.indexOf(subscriber);
        this.subscribers.splice(index, 1);
    }

    notifySubscribers() {
        for (let subscriber of this.subscribers) {
            subscriber.update(this.avaliablity);
        }
    }

    setAvaliablity(avaliable: boolean) {
        this.avaliablity = avaliable;

        // After setting the avaliablity, notify all subscribers
        console.log("Avaliablity set to " + this.avaliablity);
        this.notifySubscribers();
        
    }
}

class customer implements subscriber {

    private publisher: publisher;
    private name:  string;

    constructor(publisher: publisher, name: string) { 
        this.publisher = publisher;
        this.name = name;
        publisher.registerSubscriber(this);
    }

    update(avaliablity: boolean) {
        console.log(this.name + " got notified and Avaliablity changed to " + avaliablity);
        avaliablity ? console.log("Phone is Avaliable") : console.log("Phone is Unavaliable");
    }   
}

let localstore  = new store();

let customer1 = new customer(localstore, "cust1");
let customer2 = new customer(localstore, "cust2");
let customer3 = new customer(localstore, "cust3");
let customer4 = new customer(localstore, "cust4");

localstore.setAvaliablity(true);

localstore.removeSubscriber(customer1);

localstore.setAvaliablity(true);

