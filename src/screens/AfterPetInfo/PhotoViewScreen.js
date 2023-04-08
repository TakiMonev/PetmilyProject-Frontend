import { Image, Text, View, StyleSheet } from 'react-native';

const PhotoViewScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.date}>날짜</Text>
        <Image style={styles.photo}></Image>
        <Text style={styles.memo}>메모내용</Text>
      </View>
      <View style={styles.container3}>
        <Text style={styles.user}>사용자</Text>
        <Image></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
  },
  container2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  container3: {
    flex: 1,
    alignItems: 'flex-start',
  },
  date: {
    margin: 10,
  },
  photo: {
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '90%',
    height: '80%',
  },
  memo: {
    borderRadius: 20,
    backgroundColor: '#d1d5db',
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    width: '90%',
  },
  user: {
    padding: 22,
  },
});
export default PhotoViewScreen;
