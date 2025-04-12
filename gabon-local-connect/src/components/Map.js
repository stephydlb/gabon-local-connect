import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = { height: '400px', width: '100%' };
  const defaultCenter = { lat: 0.4162, lng: 9.4673 }; // Coordonnées de Libreville
  const [eventLocations, setEventLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Fetch from data.json
        const data = await response.json();
        setEventLocations(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div data-testid="map">
        <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE"> {/* Replace with your API key */}
        <GoogleMap mapContainerStyle={mapStyles} zoom={14} center={defaultCenter}>
            {eventLocations.map((event, index) => (
            <Marker key={index} position={{ lat: event.location.lat, lng: event.location.lng }} />
        ))}
        </GoogleMap>
        </LoadScript>
    </div>
  );
};

export default Map;
