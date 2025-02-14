import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.blueText}>Nama Nama Teman</Text>

        <Image source={require('./assets/aceng.png')} style={styles.image} />
        <Text style={styles.blueText}>Albie Fachri</Text>
        <Image source={require('./assets/arap.png')} style={styles.image} />
        <Text style={styles.blueText}>Muhammad Faraj</Text>
        <Image source={require('./assets/damu.png')} style={styles.image} />
        <Text style={styles.blueText}>Daffa Muflih</Text>
        <Image source={require('./assets/devan.png')} style={styles.image} />
        <Text style={styles.blueText}>Devan Jonathan</Text>
        <Image source={require('./assets/ilham.png')} style={styles.image} />
        <Text style={styles.blueText}>Ilham God</Text>
        <Image source={require('./assets/juan.png')} style={styles.image} />
        <Text style={styles.blueText}>Juan Andreas</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginVertical: 10,
  },
  blueText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
});