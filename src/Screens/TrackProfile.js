import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Example Image for Child Profile (You can use a local image or URL)
const childImage = 'https://via.placeholder.com/100'; // Placeholder image URL

const HomeScreen = () => {
  // State variables to represent screen time, device status, and child data
  const [deviceStatus, setDeviceStatus] = useState('Online');
  const [screenTime, setScreenTime] = useState(3); // Example: 3 hours of screen time today
  const [remainingTime, setRemainingTime] = useState(1); // Example: 1 hour left

  // Functions to handle quick actions
  const pauseDevice = () => {
    setDeviceStatus('Paused');
  };

  const setScreenTimeLimit = (timeLimit) => {
    setRemainingTime(timeLimit);
  };

  return (
    <View style={styles.container}>
      {/* Profile and Device Status Section */}
      <View style={styles.profileContainer}>
        <Image source={{ uri: childImage }} style={styles.profileImage} />
        <View style={styles.profileDetails}>
          <Text style={styles.childName}>Johnny's Device</Text>
          <Text style={styles.deviceStatus}>Status: {deviceStatus}</Text>
        </View>
      </View>

      {/* Screen Time Section */}
      <View style={styles.screenTimeContainer}>
        <Text style={styles.screenTimeText}>Today's Screen Time: {screenTime} hours</Text>
        <Text style={styles.remainingTimeText}>Remaining Time: {remainingTime} hours</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={pauseDevice}>
          <Text style={styles.actionButtonText}>Pause Device</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => setScreenTimeLimit(2)}>
          <Text style={styles.actionButtonText}>Set 2-hour Limit</Text>
        </TouchableOpacity>
      </View>

      {/* More Options Section */}
      <View style={styles.moreOptionsContainer}>
        <Button title="Set Time Limits" onPress={() => alert('Set Screen Time Limits')} />
        <Button title="Content Restrictions" onPress={() => alert('Content Restrictions')} />
      </View>
    </View>
  );
};

// Styles for the Home Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileDetails: {
    flex: 1,
  },
  childName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  deviceStatus: {
    fontSize: 16,
    color: deviceStatus === 'Online' ? 'green' : 'red',
  },
  screenTimeContainer: {
    marginBottom: 20,
  },
  screenTimeText: {
    fontSize: 18,
    color: '#333',
  },
  remainingTimeText: {
    fontSize: 16,
    color: '#666',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  moreOptionsContainer: {
    marginTop: 20,
    flexDirection: 'column',
  },
});

export default HomeScreen;
