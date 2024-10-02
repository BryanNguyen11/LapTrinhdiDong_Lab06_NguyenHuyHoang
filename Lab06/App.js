// In App.js in a new project

import * as React from 'react';
import { Button, View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const products = [
  { id: '1', name: 'Ca nấu lẩu', image: require('./assets/imgs/ca_nau_lau.png') },
  // Thêm các sản phẩm khác vào đây
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Go to Chats"
        onPress={() => navigation.navigate('Chats')}
      />
    </View>
  );
}

function Chats({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <View>
        <Text style={styles.productName}>Chat với shop</Text>
        <Text style={styles.shopName}>Shop Devang</Text>
      </View>
      <Button
        title="Chat"
        color='red'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.chatText}>Bạn có thắc mắc về sản phẩm vừa xem. Đừng ngại chat với shop</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chats" component={Chats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 16,
  },
  chatText: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 16,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productName: {
    textAlign: 'center',
    fontSize: 20,
  },
  shopName: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default App;
