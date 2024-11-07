import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const AppUsageCard = ({ usageData }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>App Usage</Title>
        {usageData.map((app, index) => (
          <Paragraph key={index}>
            {app.name}: {app.timeSpent} hours
          </Paragraph>
        ))}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
});

export default AppUsageCard;
