export interface IWeatherResponse {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  rain: {
    '1h': number;
  };
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: IWeather[];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

export interface ISomeDaysWeatherResponse {
  cod: string;
  message: number;
  cnt: number;
  list: ISomeDaysWeather[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: string;
      lon: string;
    };
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export interface IWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface ISomeDaysWeather {
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
    temp_kf?: number;
  };
  pop: number;
  sys: {
    pod: string;
  };
  visibility: number;
  weather: IWeather[];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}
