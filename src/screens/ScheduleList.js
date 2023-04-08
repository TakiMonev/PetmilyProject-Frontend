import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ScheduleList() {
  return (
    <View style={styles.container}>
      <View style={styles.scheduleItem}>
        <Text style={styles.time}>오전 10시</Text>
        <Text style={styles.details}>산책시키기</Text>
        <Text style={styles.assignee}>수행자: 아버지</Text>
      </View>
      <View style={styles.scheduleItem}>
        <Text style={styles.time}>오후 2시</Text>
        <Text style={styles.details}>점심주기</Text>
        <Text style={styles.assignee}>수행자: 어머니</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 18,
  },
  assignee: {
    fontSize: 16,
    color: '#777',
  },
});

export default ScheduleList;
