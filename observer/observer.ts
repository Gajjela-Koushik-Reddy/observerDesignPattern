interface publisher {
    registerObserver(o: subscriber): void;
    removeObserver(o: subscriber): void;
    notifyObservers(): void;
}

interface subscriber {
    update(temperature: number): void;
}

class WeatherStation implements publisher {
    private observers: subscriber[] = [];
    private temperature: number;

    registerObserver(o: subscriber): void {
        this.observers.push(o);
    }

    removeObserver(o: subscriber): void {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }

    notifyObservers(): void {
        for (let observer of this.observers) {
            observer.update(this.temperature);
        }
    }

    setMetrics(temperature: number) { 
        this.temperature = temperature;

        console.log('*Weather Station Data Updated*');
        this.notifyObservers();
    }
}

class Thermostat implements subscriber {
    private subject: publisher;

    constructor(weatherStation: publisher) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number,  humidity: number, pressure: number): void {
        console.log(`Thermostat Data: \n\tTemperature: ${temperature},  \n\tHumidity: ${humidity},\n\tPressure: ${pressure}`);
    }

    // Logic
}


let weatherStation = new WeatherStation();

let thermostat = new Thermostat(weatherStation);

weatherStation.setMetrics(20);