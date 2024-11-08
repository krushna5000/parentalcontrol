import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const FamilyProfileScreen = () => {
  // Initial empty state for child profiles
  const [family, setFamily] = useState([]);
  
  // State to manage the inputs for name, age, phone, and profile picture URL
  const [name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profilePic, setProfilePic] = useState('');

  // Function to handle adding a new profile
  const handleAddProfile = () => {
    if (name && phone&& Email) {
      // Add the new profile to the family list
      const newProfile = {
        id: Math.random().toString(), // Generate a random ID
        name,
        Email,
        phone,
        profilePic,
      };
      
      // Update the family state with the new profile
      setFamily([...family, newProfile]);

      // Clear input fields after adding
      setName('');
      setEmail('');
      setPhone('');
      setProfilePic('');
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Child Profile</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={Email}
        onChangeText={setEmail}
        
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      {/* <TextInput
        style={styles.input}
        placeholder="Profile Picture URL"
        value={profilePic}
        onChangeText={setProfilePic}
      /> */}
      
      {/* Add Profile Button */}
      <Button title="Add Profile" onPress={handleAddProfile} />

      <Text style={styles.title}>Family Profiles</Text>
      
      {/* Display Profiles with FlatList */}
      <FlatList
        data={family}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <View style={styles.profileCard}>
            {/* <Image source={{ uri: item.profilePic }} style={styles.profilePic} /> */} 
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.Email}>Email: {item.Email}</Text>
            <Text style={styles.phone}>Phone: {item.phone}</Text>
      </TouchableOpacity>
          </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop : 50,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  profileCard: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  Email: {
    fontSize: 16,
    color: '#555',
  },
  phone: {
    fontSize: 14,
    color: '#555',
  },
});

export default FamilyProfileScreen;