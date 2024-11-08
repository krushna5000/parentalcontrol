import { h } from 'preact';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Optional for icons

const ChildMonitoringPage = ({ child, appUsageData, onSetTimeLimit, onViewDetails }) => {
  // Sample data structure for app usage (you can replace this with dynamic data)
  // const appUsageData = [
  //   { app: 'YouTube', usage: 120 }, // usage in minutes
  //   { app: 'TikTok', usage: 60 },
  //   { app: 'Instagram', usage: 90 },
  // ];

  const handleSetLimit = (appName) => {
    Alert.alert(
      "Set Time Limit",
      `Set a new time limit for ${appName}`,
      [
        { text: 'Cancel' },
        { text: 'Set Limit', onPress: () => onSetTimeLimit(appName) }
      ]
    );
  };

  const renderAppUsage = ({ item }) => {
    return (
      <View style={styles.appUsageItem}>
        <Text style={styles.appName}>{item.app}</Text>
        <Text style={styles.appUsage}>{item.usage} mins</Text>
        <TouchableOpacity onPress={() => handleSetLimit(item.app)} style={styles.setLimitButton}>
          <Icon name="clock" size={20} color="#fff" />
          <Text style={styles.setLimitText}>Set Limit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header with child’s name and profile picture */}
      <View style={styles.header}>
        <Image source={{ uri: child.profilePicture }} style={styles.profilePic} />
        <Text style={styles.childName}>{child.name}</Text>
      </View>

      {/* Activity Overview */}
      <View style={styles.activityOverview}>
        <Text style={styles.overviewTitle}>Daily Screen Time</Text>
        <Text style={styles.screenTime}>{child.dailyScreenTime} mins</Text>
        <Text style={styles.overviewSubtitle}>Apps used today:</Text>
      </View>

      {/* App Usage Breakdown */}
      <FlatList
        data={appUsageData}
        renderItem={renderAppUsage}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  childName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  activityOverview: {
    marginBottom: 20,
  },
  overviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  screenTime: {
    fontSize: 22,
    color: '#4CAF50', // Green for positive metrics
    fontWeight: 'bold',
    marginVertical: 8,
  },
  overviewSubtitle: {
    fontSize: 16,
    color: '#777',
  },
  appUsageItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  appName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  appUsage: {
    fontSize: 16,
    color: '#777',
  },
  setLimitButton: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  setLimitText: {
    color: '#fff',
    marginLeft: 8,
  },
});

export default ChildMonitoringPage;
