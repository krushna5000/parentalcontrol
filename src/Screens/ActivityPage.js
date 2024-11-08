import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

const ActivityPage = () => {
  // Activity log state
  const [activityLogs, setActivityLogs] = useState([]);

  // Function to log an activity (for example: screen change, button click)
  const logActivity = (activityDescription) => {
    const newLog = {
      id: activityLogs.length + 1,
      description: activityDescription,
      timestamp: new Date().toLocaleString(),
    };
    setActivityLogs((prevLogs) => [newLog, ...prevLogs]); // Add new log to the top
  };

  // Sample function for when the child interacts with the app
  const handleButtonPress = () => {
    logActivity('Child pressed the "Check Profile" button.');
  };

  // Simulate navigating to a screen (you can add your actual navigation logic)
  const handleNavigate = () => {
    logActivity('Child navigated to the Profile page.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Activity Log</Text>

      <Button title="Simulate Button Press" onPress={handleButtonPress} />
      <TouchableOpacity onPress={handleNavigate} style={styles.navigateButton}>
        <Text style={styles.navigateButtonText}>Navigate to Profile</Text>
      </TouchableOpacity>

      {/* Display the activity log */}
      <FlatList
        data={activityLogs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.logItem}>
            <Text>{item.description}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  navigateButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  navigateButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  logItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    width: '100%',
    borderRadius: 5,
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
  },
});

export default ActivityPage;
