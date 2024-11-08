import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Platform, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const LocationTrackerPage = () => {
  const [location, setLocation] = useState(null);
  const [isTracking, setIsTracking] = useState(false);

  // Request location permission (for Android)
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'We need access to your location to track the device.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
      } else {
        Alert.alert('Permission Denied', 'Cannot access location without permission');
      }
    }
  };

  // Get current location and set up a tracking loop
  const startTracking = () => {
    requestLocationPermission();
    
    setIsTracking(true);

    // Start geolocation tracking
    const watchId = Geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error(error);
        Alert.alert('Error', 'Failed to get location');
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0, // Update location on every change
        interval: 10000, // Update every 10 seconds
        fastestInterval: 5000, // Update no faster than 5 seconds
      }
    );

    // Store watch ID to stop it later
    return watchId;
  };

  const stopTracking = (watchId) => {
    setIsTracking(false);
    Geolocation.clearWatch(watchId); // Stop tracking location
  };

  useEffect(() => {
    // Clean up when component unmounts
    return () => {
      if (isTracking) {
        stopTracking();
      }
    };
  }, [isTracking]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Location Tracking</Text>

      {location ? (
        <>
          <Text style={styles.locationText}>
            Latitude: {location.latitude.toFixed(5)}
          </Text>
          <Text style={styles.locationText}>
            Longitude: {location.longitude.toFixed(5)}
          </Text>
        </>
      ) : (
        <Text style={styles.locationText}>Tracking Location...</Text>
      )}

      <View style={styles.buttonsContainer}>
        {!isTracking ? (
          <Button title="Start Tracking" onPress={() => startTracking()} />
        ) : (
          <Button title="Stop Tracking" onPress={() => stopTracking()} />
        )}
      </View>

      <MapView
        style={styles.map}
        region={{
          latitude: location ? location.latitude : 37.78825, // Default location if undefined
          longitude: location ? location.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {location && (
          <Marker coordinate={location} title="Child's Location" />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  locationText: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonsContainer: {
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
});

export default LocationTrackerPage;
