import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView ,TouchableOpacity} from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entypo from '@expo/vector-icons/Entypo';


// Parent Control HomeScreen Component
const HomeScreen = ({ navigation }) => {
  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Title style={styles.header}></Title>
        </View>

      {/*add one more child*/}
      <Card style={styles.card}>
          <Card.Content>
          <Entypo name="add-to-list" size={24} color="black" />
            <Title style={styles.cardTitle}>Add Multipal Students</Title>
            <Paragraph style={styles.cardDescription}> 
            </Paragraph>
            <Button 
              mode="contained" 
              onPress={() => navigation.navigate('Profile')}>
             Add
            </Button>
          </Card.Content>
        </Card>
      
        {/* Screen Time Card */}
        <Card style={styles.card}>
          <Card.Content>
            <Icon name="time-outline" size={30} color="#4CAF50" />
            <Title style={styles.cardTitle}>Screen Time Management</Title>
            <Paragraph style={styles.cardDescription}>
              Set daily limits on screen time for your child’s device.
            </Paragraph>
            <Button 
              mode="contained" 
              onPress={() => navigation.navigate('ScreenTime')}>
              Set Screen Time
            </Button>
          </Card.Content>
        </Card>


        {/* Location Tracking Card */}
        <Card style={styles.card}>
          <Card.Content>
            <Icon name="location-outline" size={30} color="#2196F3" />
            <Title style={styles.cardTitle}>Location Tracking</Title>
            <Paragraph style={styles.cardDescription}>
              Track your child's location in real-time.
            </Paragraph>
            <Button 
              mode="contained" 
              onPress={() => navigation.navigate('LocationTracking')}>
              View Location
            </Button>
          </Card.Content>
        </Card>

        {/* Reports Card */}
        <Card style={styles.card}>
          <Card.Content>
            <Icon name="document-text-outline" size={30} color="#673AB7" />
            <Title style={styles.cardTitle}>Activity Reports</Title>
            <Paragraph style={styles.cardDescription}>
              Get detailed reports on your child’s digital activities.
            </Paragraph>
            <Button 
              mode="contained" 
              onPress={() => navigation.navigate('ActivityPage')}>
              View Reports
            </Button>
          </Card.Content>
        </Card>

         {/* App Restrictions Card */}
         <Card style={styles.card}>
          <Card.Content>
            <Icon name="lock-closed-outline" size={30} color="#FF5722" />
            <Title style={styles.cardTitle}>App Restrictions</Title>
            <Paragraph style={styles.cardDescription}>
              Restrict access to specific apps and websites.
            </Paragraph>
            <Button 
              mode="contained" 
              onPress={() => navigation.navigate('ChildMonitring')}>
              Set Restrictions
            </Button>
          </Card.Content>
        </Card>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 15,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    color: '#333',
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 15,
    borderRadius: 8,
    elevation: 5,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardDescription:{
    fontSize: 14,
    color: '#555',
    marginVertical: 10,
  },
});

export default HomeScreen;

