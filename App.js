import { Text, SafeAreaView, StyleSheet, View, ScrollView,} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Mercurio from './components/mercurio';
import Venus from './components/venus';
import Terra from './components/terra';
import Marte from './components/marte';
import Botaoo from './components/botaoo';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export default function App() {
  return (
    <View style={styles.container}>
    <ScrollView>
    
      <Card style={styles.card}>
      <Text style={styles.nome}> Emily Marques - 3C</Text>
        <Text style={styles.paragraph}> Planetas do  </Text>
        <Text style={styles.paragraph}> Sistema Solar  </Text>
        <View style={styles.bloco}>
          <Mercurio />
          <Venus />
          <Terra />
          <Marte />
          <Botaoo />
        </View>
      </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    margin: -10,
  },
  paragraph: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#BBB0ff',
  },


  card: {
    backgroundColor: '#21164e',
    textAlign: 'center',
    height: 1500,
  },

  bloco: {
    backgroundColor: '#21164e',
    height: '80%',
    paddingTop: 20,
    borderRadius: 25,
  },

  nome: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#21164e',
    backgroundColor: '#BBB0ff',
    marginLeft: -20,
    marginRight: -20,
    padding: 12,
    borderRadius: 10,
  },
});
