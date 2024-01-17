enum WeatherCondition {
  ClearSky = 0,
  MainlyClear = 1,
  PartlyCloudy = 2,
  Overcast = 3,
  Fog = 45,
  DepositRimeFog = 48,
  DrizzleLight = 51,
  DrizzleModerate = 53,
  DrizzleDense = 55,
  FreezingDrizzleLight = 56,
  FreezingDrizzleDense = 57,
  RainSlight = 61,
  RainModerate = 63,
  RainHeavy = 65,
  FreezingRainLight = 66,
  FreezingRainHeavy = 67,
  SnowFallSlight = 71,
  SnowFallModerate = 73,
  SnowFallHeavy = 75,
  SnowGrains = 77,
  RainShowersSlight = 80,
  RainShowersModerate = 81,
  RainShowersViolent = 82,
  SnowShowersSlight = 85,
  SnowShowersHeavy = 86,
  ThunderstormSlight = 95,
  ThunderstormHeavy = 99
}

type WeatherConditionStrings = {
  [key in WeatherCondition]: string;
};

// Descriptions in pt-br
const WeatherConditionDescriptions: WeatherConditionStrings = {
  [WeatherCondition.ClearSky]: "☀️",
  [WeatherCondition.MainlyClear]: "☀️",
  [WeatherCondition.PartlyCloudy]: "🌤️",
  [WeatherCondition.Overcast]: "⛅️",
  [WeatherCondition.Fog]: "🌫️",
  [WeatherCondition.DepositRimeFog]: "🌨️",
  [WeatherCondition.DrizzleLight]: "🌦️",
  [WeatherCondition.DrizzleModerate]: "🌧️",
  [WeatherCondition.DrizzleDense]: "⛈️",
  [WeatherCondition.FreezingDrizzleLight]: "🌨️",
  [WeatherCondition.FreezingDrizzleDense]: "🌨️",
  [WeatherCondition.RainSlight]: "🌦️",
  [WeatherCondition.RainModerate]: "🌨️",
  [WeatherCondition.RainHeavy]: "⛈️",
  [WeatherCondition.FreezingRainLight]: "🌨️",
  [WeatherCondition.FreezingRainHeavy]: "🌨️",
  [WeatherCondition.SnowFallSlight]: "❅",
  [WeatherCondition.SnowFallModerate]: "❅",
  [WeatherCondition.SnowFallHeavy]: "❄️",
  [WeatherCondition.SnowGrains]: "❅",
  [WeatherCondition.RainShowersSlight]: "🌦️",
  [WeatherCondition.RainShowersModerate]: "🌧️",
  [WeatherCondition.RainShowersViolent]: "⛈️",
  [WeatherCondition.SnowShowersSlight]: "🌨️",
  [WeatherCondition.SnowShowersHeavy]: "🌨️",
  [WeatherCondition.ThunderstormSlight]: "⛈️",
  [WeatherCondition.ThunderstormHeavy]: "⛈️"
};

export { WeatherCondition, WeatherConditionDescriptions };
