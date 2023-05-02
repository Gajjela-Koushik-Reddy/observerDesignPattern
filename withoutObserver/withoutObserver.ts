class WeatherStation {
    private temperature: number;

    public setMetrics(temperature: number) { 
      this.temperature = temperature;

      console.log('*Weather Station Data Updated*');
    }

    public getTemperature(): number{
        return this.temperature;
    }

}

class Thermostat {
    private weatherStation: WeatherStation;

    constructor(weatherStation: WeatherStation){
        this.weatherStation = weatherStation;
    }

    public displayThermostatData(): void{
        console.log(`Temperature: ${this.weatherStation.getTemperature()}`);
    }
}


const weatherStation = new WeatherStation();

const thermostat = new Thermostat(weatherStation);

weatherStation.setMetrics(25);

thermostat.displayThermostatData();
