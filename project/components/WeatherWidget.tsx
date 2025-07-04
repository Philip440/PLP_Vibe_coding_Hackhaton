import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Cloud, Sun, CloudRain, Thermometer } from 'lucide-react-native';

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  rainfall: number;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 28,
    condition: 'partly_cloudy',
    humidity: 65,
    rainfall: 0,
  });

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun size={24} color="#FFC107" />;
      case 'rainy':
        return <CloudRain size={24} color="#2196F3" />;
      default:
        return <Cloud size={24} color="#9E9E9E" />;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Weather</Text>
      <View style={styles.weatherInfo}>
        <View style={styles.tempSection}>
          {getWeatherIcon(weather.condition)}
          <Text style={styles.temperature}>{weather.temperature}°C</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailText}>Humidity: {weather.humidity}%</Text>
          <Text style={styles.detailText}>Rainfall: {weather.rainfall}mm</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8F5E8',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 8,
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tempSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperature: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginLeft: 8,
  },
  details: {
    alignItems: 'flex-end',
  },
  detailText: {
    fontSize: 12,
    color: '#4CAF50',
    marginBottom: 2,
  },
});