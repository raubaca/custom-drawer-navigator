import 'react-native-gesture-handler';

import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Home from './screens/Home';
import Contact from './screens/Contact';
import Title from './components/Title';
import Favourites from './screens/Favourites';
import About from './screens/About';
import CustomDrawer from './components/CustomDrawer';
import DrawerView from './components/DrawerView';
import DrawerToggle from './components/DrawerToggle';

/**
 * Drawer Navigator
 */
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawer {...props} />}
          screenOptions={{
            drawerStyle: styles.drawer,
            drawerType: 'back',
            overlayColor: 'transparent',
            headerShown: false,
            sceneContainerStyle: styles.scene,
          }}
        >
          <Drawer.Screen name="Start" component={Tabs} />
          <Drawer.Screen name="Your Cart" component={Cart} />
          <Drawer.Screen name="Favourites" component={Favourites} />
          <Drawer.Screen name="Your Orders" component={Orders} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

/**
 * Tab Navigator
 */
const Tab = createBottomTabNavigator();

const Tabs = ({ navigation }) => {
  return (
    <DrawerView style={styles.tabs}>
      <View style={styles.row}>
        <DrawerToggle onPress={() => navigation.openDrawer()} />
        <Title>Start</Title>
      </View>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Info" component={Stacks} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </DrawerView>
  );
};

/**
 * Stack Navigator
 */
const Stack = createStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  drawer: {
    width: 200,
    backgroundColor: 'transparent',
  },
  tabs: {
    flex: 1,
  },
  scene: {
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
  },
});
