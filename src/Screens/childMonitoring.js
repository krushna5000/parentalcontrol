import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Platform, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const TrackLocation = () => {
  const [location, setLocation] = useState(null);
  const [isTracking, setIsTracking] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Request location permission when the page loads
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    const result =
      Platform.OS === 'ios'
        ? await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        : await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

    if (result === RESULTS.GRANTED) {
      console.log('Permission granted');
    } else {
      Alert.alert('Permission Denied', 'Location permission is required to track location.');
    }
  };

  const startTrackingLocation = () => {
    setIsTracking(true);

    // Watch for location updates
    Geolocation.watchPosition(
      (position) => {
        setLocation(position.coords);
        setError(null);
      },
      (error) => {
        console.error(error);
        setError(error.message);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 10, // Update location every 10 meters
        interval: 2000, // Update every 2 seconds
        fastestInterval: 1000, // Update at least every 1 second
      }
    );
  };

  const stopTrackingLocation = () => {
    setIsTracking(false);
    Geolocation.clearWatch();
  };

  const renderLocation = () => {
    if (error) {
      return <Text style={styles.errorText}>{error}</Text>;
    }
    if (location) {
      return (
        <View style={styles.locationInfo}>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
        </View>
      );
    } else {
      return <Text>Waiting for location...</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track Location</Text>

      {renderLocation()}

      <Button
        title={isTracking ? 'Stop Tracking' : 'Start Tracking'}
        onPress={isTracking ? stopTrackingLocation : startTrackingLocation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  locationInfo: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default TrackLocation;
