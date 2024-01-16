import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { ScreenType } from './constants/constants';
import AddNotes from './screens/AddNotes';
import AllNotesScreen from './screens/AllNotesScreen';


export default function App() {

  const [screen, setScreen] = useState(ScreenType.home);
  const [notes, setNotes] = useState([]);
  const updateScreen = (data) => {
    setScreen(data);
  };

  let content;

  if(screen === ScreenType.addNote){
    content = <AddNotes 
                onSave={(data) => setNotes([...notes, {id: Date.now(), note: data}])}
                onExit={updateScreen}
              />;
  } else if(screen === ScreenType.allNotes){
    content = <AllNotesScreen notes={notes}/>;
  } else if(screen === ScreenType.home){
    content = <HomeScreen onExit={updateScreen} />;
  }

  return (
    <View style={styles.container}>
      <Header onButtonClick={(data) => setScreen(ScreenType.home)} sType = {screen}/>
      <StatusBar style="auto" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
