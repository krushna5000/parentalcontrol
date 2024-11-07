import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; // React Native Maps
import { Button } from 'react-native-paper'; // Optional: for styled buttons

const LocationTrackingScreen = () => {
  // State to hold current location data
  const [location, setLocation] = useState({
    latitude: 37.78825, // Default to a sample location
    longitude: -122.4324,
  });

  // Fetching real-time location (dummy data for this example)
  useEffect(() => {
    const interval = setInterval(() => {
      // Here you would typically fetch the actual real-time location
      // For demo purposes, we're just updating the location with a random offset
      setLocation((prevLocation) => ({
        latitude: prevLocation.latitude + (Math.random() * 0.0001 - 0.00005), // Slight random change
        longitude: prevLocation.longitude + (Math.random() * 0.0001 - 0.00005),
      }));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <View style={styles.container}>
      {/* Title and current location text */}
      <Text style={styles.title}>Child's Real-Time Location</Text>
      <Text style={styles.locationText}>
        Latitude: {location.latitude.toFixed(5)} | Longitude: {location.longitude.toFixed(5)}
      </Text>

      {/* MapView displaying the location */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922, // Zoom level
          longitudeDelta: 0.0421,
        }}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Marker to indicate the child’s location */}
        <Marker coordinate={location} title="Child's Location" />
      </MapView>

      {/* Button to go back to the dashboard */}
      <Button mode="contained" onPress={() => console.log('Go back to Dashboard')} style={styles.button}>
        Back to Dashboard
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  locationText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#555',
  },
  map: {
    width: '100%',
    height: Dimensions.get('window').height * 0.6, // 60% of screen height
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007BFF',
  },
});

export default LocationTrackingScreen;
