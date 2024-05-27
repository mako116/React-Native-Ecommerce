import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { Dropdown } from 'react-native-dropdown-picker';
import styles from './home.style';
import { Welcome } from '../component';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Single Men', value: 'singleMen' },
    { label: 'Single Women', value: 'singleWomen' },
  ]);

  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Text style={styles.location}>Potential Matches</Text>
           <Text>Singles</Text>
             <TouchableOpacity>
              <Text>Subscribed</Text>
            </TouchableOpacity>
         </View>
      </View>
      <ScrollView>
        <Welcome />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
