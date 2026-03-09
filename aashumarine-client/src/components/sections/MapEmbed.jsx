import { useState } from 'react';
import './MapEmbed.css';

const MapEmbed = ({ 
  latitude = 40.7128, 
  longitude = -74.0060, 
  zoom = 15,
  businessName = "Aashu Marine Equipment"
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // OpenStreetMap embed URL using Leaflet-based iframe
  // Using OpenStreetMap as it's free and doesn't require API keys
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01},${latitude - 0.01},${longitude + 0.01},${latitude + 0.01}&layer=mapnik&marker=${latitude},${longitude}`;

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="map-embed">
      <div className="map-container">
        {!isLoaded && (
          <div className="map-loading" aria-live="polite">
            Loading map...
          </div>
        )}
        <iframe
          title={`Map showing location of ${businessName}`}
          src={mapUrl}
          className="map-iframe"
          onLoad={handleLoad}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label={`Interactive map showing the location of ${businessName}`}
        />
        <div className="map-link">
          <a 
            href={`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=${zoom}/${latitude}/${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="view-larger-map"
          >
            View Larger Map
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapEmbed;
