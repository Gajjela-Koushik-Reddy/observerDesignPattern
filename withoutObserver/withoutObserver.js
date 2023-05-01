var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
    }
    WeatherStation.prototype.setMetrics = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        console.log('*Weather Station Data Updated*');
    };
    WeatherStation.prototype.getTemperature = function () {
        return this.temperature;
    };
    WeatherStation.prototype.getHumidity = function () {
        return this.humidity;
    };
    WeatherStation.prototype.getPressure = function () {
        return this.pressure;
    };
    return WeatherStation;
}());
var Phone = /** @class */ (function () {
    function Phone(weatherStation) {
        this.weatherStation = weatherStation;
    }
    Phone.prototype.displayPhoneData = function () {
        console.log("Temperature: ".concat(this.weatherStation.getTemperature()));
        console.log("Humidity: ".concat(this.weatherStation.getHumidity()));
        console.log("Pressure: ".concat(this.weatherStation.getPressure()));
    };
    return Phone;
}());
var Thermostat = /** @class */ (function () {
    function Thermostat(weatherStation) {
        this.weatherStation = weatherStation;
    }
    Thermostat.prototype.displayThermostatData = function () {
        console.log("Temperature: ".concat(this.weatherStation.getTemperature()));
        console.log("Humidity: ".concat(this.weatherStation.getHumidity()));
        console.log("Pressure: ".concat(this.weatherStation.getPressure()));
    };
    return Thermostat;
}());
var Car = /** @class */ (function () {
    function Car(weatherStation) {
        this.weatherStation = weatherStation;
    }
    Car.prototype.displayCarData = function () {
        console.log("Temperature: ".concat(this.weatherStation.getTemperature()));
        console.log("Humidity: ".concat(this.weatherStation.getHumidity()));
        console.log("Pressure: ".concat(this.weatherStation.getPressure()));
    };
    return Car;
}());
var Airport = /** @class */ (function () {
    function Airport(weatherStation) {
        this.weatherStation = weatherStation;
    }
    Airport.prototype.displayAirportData = function () {
        console.log("Temperature: ".concat(this.weatherStation.getTemperature()));
        console.log("Humidity: ".concat(this.weatherStation.getHumidity()));
        console.log("Pressure: ".concat(this.weatherStation.getPressure()));
    };
    return Airport;
}());
var weatherStation = new WeatherStation();
var phone = new Phone(weatherStation);
var thermostat = new Thermostat(weatherStation);
var car = new Car(weatherStation);
var airport = new Airport(weatherStation);
weatherStation.setMetrics(25, 50, 760);
phone.displayPhoneData();
thermostat.displayThermostatData();
car.displayCarData();
airport.displayAirportData();
