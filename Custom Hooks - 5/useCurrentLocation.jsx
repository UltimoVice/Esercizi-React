import { useState } from "react";

export function useCurrentLocation() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );
  };

  return {
    currentLocation,
    getCurrentLocation,
    error,
    loading,
  };
}
