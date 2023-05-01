class WeatherStation {
    private temperature: number;
    private humidity: number;
    private pressure: number;

   public setMetrics(temperature: number, humidity: number, pressure: number) { 
      this.temperature = temperature;
      this.humidity = humidity;
      this.pressure = pressure;
      console.log('*Weather Station Data Updated*');
    }

    public getTemperature(): number{
        return this.temperature;
    }

    public getHumidity(): number{
        return this.humidity;
    }

    public getPressure(): number{
        return this.pressure;
    }
}

class Phone {
  private weatherStation: WeatherStation;

  constructor(weatherStation: WeatherStation){
      this.weatherStation = weatherStation;
  }

  public displayPhoneData(): void{
      console.log(`Temperature: ${this.weatherStation.getTemperature()}`);
      console.log(`Humidity: ${this.weatherStation.getHumidity()}`);
      console.log(`Pressure: ${this.weatherStation.getPressure()}`);
  }
}

class Thermostat {
    private weatherStation: WeatherStation;

    constructor(weatherStation: WeatherStation){
        this.weatherStation = weatherStation;
    }

    public displayThermostatData(): void{
        console.log(`Temperature: ${this.weatherStation.getTemperature()}`);
        console.log(`Humidity: ${this.weatherStation.getHumidity()}`);
        console.log(`Pressure: ${this.weatherStation.getPressure()}`);
    }
}

class Car {
    private weatherStation: WeatherStation;

    constructor(weatherStation: WeatherStation){
        this.weatherStation = weatherStation;
    }

    public displayCarData(): void{
        console.log(`Temperature: ${this.weatherStation.getTemperature()}`);
        console.log(`Humidity: ${this.weatherStation.getHumidity()}`);
        console.log(`Pressure: ${this.weatherStation.getPressure()}`);
    }
}

class Airport {
    private weatherStation: WeatherStation;

    constructor(weatherStation: WeatherStation){
        this.weatherStation = weatherStation;
    }

    public displayAirportData(): void{
        console.log(`Temperature: ${this.weatherStation.getTemperature()}`);
        console.log(`Humidity: ${this.weatherStation.getHumidity()}`);
        console.log(`Pressure: ${this.weatherStation.getPressure()}`);
    }
}

const weatherStation = new WeatherStation();

const phone = new Phone(weatherStation);
const thermostat = new Thermostat(weatherStation);
const car = new Car(weatherStation);
const airport = new Airport(weatherStation);

weatherStation.setMetrics(25, 50, 760);

phone.displayPhoneData();
thermostat.displayThermostatData();
car.displayCarData();
airport.displayAirportData();