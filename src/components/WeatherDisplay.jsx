function WeatherDisplay({ data }) {
  if (!data) return <p>No data yet. Search a city!</p>;

  return (
    <div>
      <h2>{data.name}, {data.sys.country}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Weather: {data.weather[0].main}</p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
}

export default WeatherDisplay;