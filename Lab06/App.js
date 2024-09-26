// In App.js in a new project

import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Chats"
        onPress={() => navigation.navigate('Chats')}
      />
    </View>
  );
}
function Chats({Navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
      <Text style={{textAlign:'center',fontSize:'30'}}>Bạn có thắc mắc về sản phẩm vừa xem. Đừng ngại chat với shop</Text>
      
      <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-around' }}  >
        
        <Image source={require('./assets/imgs/ca_nau_lau.png')} style={{width: 100, height: 100}} />

        <View>

        <Text style={{textAlign:'center',fontSize:'20'}}>Chat với shop</Text>
        <Text style={{textAlign:'center',fontSize:'20', fontWeight:'bold',color:'red'}}>Shop Devang </Text>

        </View>

        <Button style={{textAlign:'center',fontSize:'20',backgroundColor:'red',MarginLeft:'10'}}
          title="Chat"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-around' }}  >
        
        <Image source={require('./assets/imgs/ca_nau_lau.png')} style={{width: 100, height: 100}} />

        <View>

        <Text style={{textAlign:'center',fontSize:'20'}}>Chat với shop</Text>
        <Text style={{textAlign:'center',fontSize:'20', fontWeight:'bold',color:'red'}}>Shop Devang </Text>

        </View>

        <Button style={{textAlign:'center',fontSize:'20',backgroundColor:'red',MarginLeft:'10'}}
          title="Chat"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-around' }}  >
        
        <Image source={require('./assets/imgs/ca_nau_lau.png')} style={{width: 100, height: 100}} />

        <View>

        <Text style={{textAlign:'center',fontSize:'20'}}>Chat với shop</Text>
        <Text style={{textAlign:'center',fontSize:'20', fontWeight:'bold',color:'red'}}>Shop Devang </Text>

        </View>

        <Button style={{textAlign:'center',fontSize:'20',backgroundColor:'red',MarginLeft:'10'}}
          title="Chat"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-around' }}  >
        
        <Image source={require('./assets/imgs/ca_nau_lau.png')} style={{width: 100, height: 100}} />

        <View>

        <Text style={{textAlign:'center',fontSize:'20'}}>Chat với shop</Text>
        <Text style={{textAlign:'center',fontSize:'20', fontWeight:'bold',color:'red'}}>Shop Devang </Text>

        </View>

        <Button style={{textAlign:'center',fontSize:'20',backgroundColor:'red',MarginLeft:'10'}}
          title="Chat"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-around' }}  >
        
        <Image source={require('./assets/imgs/ca_nau_lau.png')} style={{width: 100, height: 100}} />

        <View>

        <Text style={{textAlign:'center',fontSize:'20'}}>Chat với shop</Text>
        <Text style={{textAlign:'center',fontSize:'20', fontWeight:'bold',color:'red'}}>Shop Devang </Text>

        </View>

        <Button style={{textAlign:'center',fontSize:'20',backgroundColor:'red',MarginLeft:'10'}}
          title="Chat"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-around' }}  >
        
        <Image source={require('./assets/imgs/ca_nau_lau.png')} style={{width: 100, height: 100}} />

        <View>

        <Text style={{textAlign:'center',fontSize:'20'}}>Chat với shop</Text>
        <Text style={{textAlign:'center',fontSize:'20', fontWeight:'bold',color:'red'}}>Shop Devang </Text>

        </View>

        <Button style={{textAlign:'center',fontSize:'20',backgroundColor:'red',MarginLeft:'10'}}
          title="Chat"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-around' }}  >
        
        <Image source={require('./assets/imgs/ca_nau_lau.png')} style={{width: 100, height: 100}} />

        <View>

        <Text style={{textAlign:'center',fontSize:'20'}}>Chat với shop</Text>
        <Text style={{textAlign:'center',fontSize:'20', fontWeight:'bold',color:'red'}}>Shop Devang </Text>

        </View>

        <Button style={{textAlign:'center',fontSize:'20',backgroundColor:'red',MarginLeft:'10'}}
          title="Chat"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
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



export default App;