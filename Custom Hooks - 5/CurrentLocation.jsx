import React from "react";
import { useCurrentLocation } from "./useCurrentLocation";

export function CurrentLocation() {
  const { currentLocation, getCurrentLocation, error, loading } =
    useCurrentLocation();

  const handleClick = () => {
    getCurrentLocation();
  };

  return (
    <div>
      <button onClick={handleClick}>
        Current Location
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {currentLocation && (
        <p>
          Latitudine: {currentLocation.latitude}, Longitudine:{" "}
          {currentLocation.longitude}
        </p>
      )}
    </div>
  );
}
