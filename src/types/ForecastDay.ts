export type ForecastDay = {
  condition: {
    description: string;
    icon: string;
    icon_url: string;
  };
  temperature: {
    day: number;
    humidity: number;
    maximum: number;
    minimum: number;
  };
  time: number;
  wind: {
    speed: number;
  };
}