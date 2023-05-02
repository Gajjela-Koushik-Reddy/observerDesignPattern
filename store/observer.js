var store = /** @class */ (function () {
    function store() {
        this.subscribers = [];
    }
    store.prototype.registerSubscriber = function (subscriber) {
        this.subscribers.push(subscriber);
    };
    store.prototype.removeSubscriber = function (subscriber) {
        var index = this.subscribers.indexOf(subscriber);
        this.subscribers.splice(index, 1);
    };
    store.prototype.notifySubscribers = function () {
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var subscriber = _a[_i];
            subscriber.update(this.avaliablity);
        }
    };
    store.prototype.setAvaliablity = function (avaliable) {
        this.avaliablity = avaliable;
        // After setting the avaliablity, notify all subscribers
        console.log("Avaliablity set to " + this.avaliablity);
        this.notifySubscribers();
    };
    return store;
}());
var customer = /** @class */ (function () {
    function customer(publisher, name) {
        this.publisher = publisher;
        this.name = name;
        publisher.registerSubscriber(this);
    }
    customer.prototype.update = function (avaliablity) {
        console.log(this.name + " got notified and Avaliablity changed to " + avaliablity);
        avaliablity ? console.log("Phone is Avaliable") : console.log("Phone is Unavaliable");
    };
    return customer;
}());
var localstore = new store();
var customer1 = new customer(localstore, "cust1");
var customer2 = new customer(localstore, "cust2");
var customer3 = new customer(localstore, "cust3");
var customer4 = new customer(localstore, "cust4");
localstore.setAvaliablity(true);
localstore.removeSubscriber(customer1);
localstore.setAvaliablity(true);
