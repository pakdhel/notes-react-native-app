import { ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View,} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {FAB} from 'react-native-paper';

type Notes = {
  notes: string;
};

const NoteItem = (props: Notes) => {
  return (
    <View style={styles.noteCard}>
      <View style={styles.noteCardContent}>
        <Text style={styles.fontStyle} >{props.notes}</Text>
      </View>
    </View>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle= {isDarkMode ? 'light-content':'dark-content'} />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <NoteItem notes='Baca buku'/>
            <NoteItem notes='Olahraga pagi'/>
        </ScrollView>
      <FAB
        icon="plus"
        style={styles.fab}
      />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },

  noteCard: {
    borderRadius: 16,
    elevation: 2,
    backgroundColor: '#fff',
    marginVertical: 4
  },

  noteCardContent: {
    paddingHorizontal: 24,
    paddingVertical: 16
  },

  fontStyle: {
    fontSize: 16,
    fontWeight: '500'
  },

  fab: {
    position: 'absolute',
    bottom: 16,
    right: 0, 
    margin: 16,
    backgroundColor: '#fff'
  }

});
export default App;
