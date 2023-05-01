var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.observers = [];
    }
    WeatherStation.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherStation.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    };
    WeatherStation.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    };
    WeatherStation.prototype.setMetrics = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        console.log('*Weather Station Data Updated*');
        this.notifyObservers();
    };
    return WeatherStation;
}());
var Phone = /** @class */ (function () {
    function Phone(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    Phone.prototype.update = function (temperature, humidity, pressure) {
        console.log("Phone Data: \n\tTemperature: ".concat(temperature, ",  \n\tHumidity: ").concat(humidity, ",\n\tPressure: ").concat(pressure));
    };
    return Phone;
}());
var Thermostat = /** @class */ (function () {
    function Thermostat(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    Thermostat.prototype.update = function (temperature, humidity, pressure) {
        console.log("Thermostat Data: \n\tTemperature: ".concat(temperature, ",  \n\tHumidity: ").concat(humidity, ",\n\tPressure: ").concat(pressure));
    };
    return Thermostat;
}());
var Car = /** @class */ (function () {
    function Car(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    Car.prototype.update = function (temperature, humidity, pressure) {
        console.log("Car Data: \n\tTemperature: ".concat(temperature, ",  \n\tHumidity: ").concat(humidity, ",\n\tPressure: ").concat(pressure));
    };
    return Car;
}());
var Airport = /** @class */ (function () {
    function Airport(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    Airport.prototype.update = function (temperature, humidity, pressure) {
        console.log("Airport Data: \n\tTemperature: ".concat(temperature, ",  \n\tHumidity: ").concat(humidity, ",\n\tPressure: ").concat(pressure));
    };
    return Airport;
}());
var weatherStation = new WeatherStation();
var phone = new Phone(weatherStation);
var thermostat = new Thermostat(weatherStation);
var car = new Car(weatherStation);
var airport = new Airport(weatherStation);

weatherStation.setMetrics(20, 30, 40);
weatherStation.setMetrics(50, 60, 70);
