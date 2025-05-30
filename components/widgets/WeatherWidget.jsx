"use client";

import { useState, useEffect } from 'react';
import { Cloud, CloudRain, Sun, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WeatherWidget() {
  const [city, setCity] = useState('London');
  const [isSearching, setIsSearching] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  
  const weatherData = {
    temperature: 18,
    condition: 'Partly Cloudy',
    humidity: 65,
    wind: 8,
    forecast: [
      { day: 'Mon', temp: 18, icon: Cloud },
      { day: 'Tue', temp: 16, icon: CloudRain },
      { day: 'Wed', temp: 15, icon: CloudRain },
      { day: 'Thu', temp: 19, icon: Sun },
      { day: 'Fri', temp: 21, icon: Sun },
    ]
  };
  
  const handleSearch = () => {
    if (searchInput.trim()) {
      setCity(searchInput);
      setIsSearching(false);
      setSearchInput('');
    }
  };
  
  const toggleSearch = () => {
    setIsSearching(!isSearching);
    if (!isSearching) {
      setTimeout(() => {
        document.getElementById('weather-search')?.focus();
      }, 100);
    }
  };

  return (
    <section className="bg-card rounded-lg border overflow-hidden">
      <div className="bg-muted p-4 border-b flex justify-between items-center">
        <h2 className="font-bold">Weather</h2>
        <Button variant="ghost" size="icon" onClick={toggleSearch}>
          <Search className="h-4 w-4" />
        </Button>
      </div>
      
      {isSearching ? (
        <div className="p-4">
          <div className="flex">
            <input
              id="weather-search"
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Enter city name"
              className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none"
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button 
              className="rounded-l-none"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="p-4 text-center">
            <h3 className="text-lg font-medium mb-2">{city}</h3>
            <div className="flex justify-center items-center mb-2">
              <Cloud className="h-10 w-10 mr-2 text-muted-foreground" />
              <span className="text-3xl font-bold">{weatherData.temperature}°C</span>
            </div>
            <p className="text-muted-foreground">{weatherData.condition}</p>
            <div className="flex justify-center space-x-4 mt-2 text-sm text-muted-foreground">
              <div>Humidity: {weatherData.humidity}%</div>
              <div>Wind: {weatherData.wind} km/h</div>
            </div>
          </div>
          
          <div className="grid grid-cols-5 divide-x border-t">
            {weatherData.forecast.map((day, index) => {
              const Icon = day.icon;
              return (
                <div key={index} className="p-3 text-center">
                  <div className="font-medium text-sm">{day.day}</div>
                  <Icon className="h-5 w-5 mx-auto my-1 text-muted-foreground" />
                  <div className="text-sm">{day.temp}°</div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}