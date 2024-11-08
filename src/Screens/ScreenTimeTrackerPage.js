import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

const ScreenTimeTrackerPage = () => {
  const [screenTime, setScreenTime] = useState(0); // time in seconds
  const [isTracking, setIsTracking] = useState(false);
  const [usageHistory, setUsageHistory] = useState([]); // stores daily screen time history

  // Start tracking screen time when the user starts using the app
  const startTracking = () => {
    setIsTracking(true);
    BackgroundTimer.setInterval(() => {
      setScreenTime((prevTime) => prevTime + 1);
    }, 1000); // Increment screen time by 1 second
  };

  // Stop tracking screen time and save the current day usage
  const stopTracking = () => {
    setIsTracking(false);
    // Save current usage to history
    const currentDate = new Date().toLocaleDateString();
    setUsageHistory((prevHistory) => [
      ...prevHistory,
      { date: currentDate, timeSpent: screenTime },
    ]);
    // Reset screen time counter for the day
    setScreenTime(0);
    BackgroundTimer.clearInterval(); // Stop background timer
  };

  // Reset daily screen time history
  const resetHistory = () => {
    setUsageHistory([]);
  };

  // Convert seconds to HH:MM:SS format
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  // Display a summary alert for today's screen time usage
  const showScreenTimeAlert = () => {
    Alert.alert(
      "Today's Screen Time",
      `You have used the app for ${formatTime(screenTime)} today.`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Screen Time Tracker</Text>

      <Text style={styles.timer}>
        {isTracking ? 'Tracking...' : 'Not Tracking'}
      </Text>

      <Text style={styles.timeText}>
        Screen Time: {formatTime(screenTime)}
      </Text>

      <View style={styles.buttonsContainer}>
        {isTracking ? (
          <Button title="Stop Tracking" onPress={stopTracking} />
        ) : (
          <Button title="Start Tracking" onPress={startTracking} />
        )}
        <Button title="Show Today's Usage" onPress={showScreenTimeAlert} />
      </View>

      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>Screen Time History:</Text>
        {usageHistory.length > 0 ? (
          usageHistory.map((entry, index) => (
            <Text key={index} style={styles.historyItem}>
              {entry.date}: {formatTime(entry.timeSpent)}
            </Text>
          ))
        ) : (
          <Text>No screen time history yet.</Text>
        )}
      </View>

      <View style={styles.buttonsContainer}>
        <Button title="Clear History" onPress={resetHistory} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timer: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  timeText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonsContainer: {
    marginBottom: 20,
  },
  historyContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: 20,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ScreenTimeTrackerPage;
