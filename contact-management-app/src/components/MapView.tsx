
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Country } from '../types/covidData';

//* Fetch function using axios
const fetchCountryData = async (): Promise<Country[]> => {
  const { data } = await axios.get('https://disease.sh/v3/covid-19/countries');
  return data;
};

const MapView: React.FC = () => {
  const { data, error, isLoading } = useQuery<Country[]>({
    queryKey: ['countries'],
    queryFn: fetchCountryData,
  });

  if (isLoading) return <p className="text-center text-gray-700">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading data</p>;
  if (!data) return <p className="text-center text-gray-700">No data available</p>;

  //* Leaflet icon
  const icon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <div className="w-full h-full">
      <h2 className="text-2xl font-bold mb-4 text-center">COVID-19 Cases by Country</h2>
      <div className="relative w-full h-[calc(100vh-100px)]">
        <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.map((country) => {
            const { lat, long } = country.countryInfo;
            //* Ensure lat and lng are valid
            if (lat && long) {
              return (
                <Marker
                  key={country.countryInfo.iso2}
                  position={[lat, long]}
                  icon={icon}
                >
                  <Popup>
                    <div className="text-center">
                      <img
                        src={country.countryInfo.flag}
                        alt={country.country}
                        className="w-10 h-6 mb-2"
                      />
                      <strong>{country.country}</strong><br />
                      Active Cases: {country.active.toLocaleString()}<br />
                      Recovered Cases: {country.recovered.toLocaleString()}<br />
                      Deaths: {country.deaths.toLocaleString()}
                    </div>
                  </Popup>
                </Marker>
              );
            }
            return null;
          })}
        </MapContainer>
      </div>
    </div>
  )
}

export default MapView
