import { View, StyleSheet, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { WHITE, YELLOW } from '../../colors';
import { color } from 'react-native-reanimated';

const ViewCalender = () => {
  return (
    <View style={styles.container}>
      <Calendar style={styles.calendar} />
      <View>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 20,
            fontSize: 18,
            color: YELLOW.DEFAULT,
            fontWeight: '700',
          }}
        >
          예정된 일정
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: WHITE,
  },
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: WHITE,
  },
});

export default ViewCalender;
