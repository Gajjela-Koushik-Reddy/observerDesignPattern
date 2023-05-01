interface Subject {
    registerObserver(o: observer): void;
    removeObserver(o: observer): void;
    notifyObservers(): void;
}

interface observer {
    update(temperature: number,  humidity: number, pressure: number): void;
}

class WeatherStation implements Subject {
    private observers: observer[] = [];
    private temperature: number;
    private humidity: number;
    private pressure: number;

    registerObserver(o: observer): void {
        this.observers.push(o);
    }

    removeObserver(o: observer): void {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }

    notifyObservers(): void {
        for (let observer of this.observers) {
            observer.update(this.temperature,  this.humidity, this.pressure);
        }
    }

    setMetrics(temperature: number, humidity: number, pressure: number) { 
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        console.log('*Weather Station Data Updated*');
        this.notifyObservers();
    }
}

class Phone implements observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number,  humidity: number, pressure: number): void {
        console.log(`Phone Data: \n\tTemperature: ${temperature},  \n\tHumidity: ${humidity},\n\tPressure: ${pressure}`);
    }

    // Logic
}

class Thermostat implements observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number,  humidity: number, pressure: number): void {
        console.log(`Thermostat Data: \n\tTemperature: ${temperature},  \n\tHumidity: ${humidity},\n\tPressure: ${pressure}`);
    }

    // Logic
}

class Car implements observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number,  humidity: number, pressure: number): void {
        console.log(`Car Data: \n\tTemperature: ${temperature},  \n\tHumidity: ${humidity},\n\tPressure: ${pressure}`);
    }

    // Logic
}

class Airport implements observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number,  humidity: number, pressure: number): void {
        console.log(`Airport Data: \n\tTemperature: ${temperature},  \n\tHumidity: ${humidity},\n\tPressure: ${pressure}`);
    }

    // Logic
}

let weatherStation = new WeatherStation();

let phone = new Phone(weatherStation);
let thermostat = new Thermostat(weatherStation);
let car = new Car(weatherStation);
let airport = new Airport(weatherStation);

weatherStation.setMetrics(20, 30, 40);
weatherStation.setMetrics(50, 60, 70);