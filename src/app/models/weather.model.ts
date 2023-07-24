export interface WeatherData {
    base: string
    clouds: Clouds
    coord: Coord
    main: Main
    rain: Rain
    sys: Sys
    weather: Weather[]
    wind: Wind
  }
  
  export interface Clouds {
    all: number
    cod: string
  }
  
  export interface Coord {
    lat: number
    lon: number
    dt: number
    id: number
  }
  
  export interface Main {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
    name: string
  }
  
  export interface Rain {
    "1h": number
  }
  
  export interface Sys {
    country: string
    id: number
    sunrise: number
    sunset: number
    type: number
    timezone: number
    visibility: number
  }
  
  export interface Weather {}
  
  export interface Wind {
    deg: number
    gust: number
    speed: number
  }
  