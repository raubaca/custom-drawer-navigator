import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const CustomDrawerItem = ({ label, onPress, isFocused }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.drawerItem,
        { backgroundColor: isFocused ? 'red' : 'transparent' },
      ]}
    >
      <Text style={styles.drawerItemText}>{label}</Text>
    </TouchableOpacity>
  );
};

const CustomDrawer = (props) => {
  const { state, navigation } = props;

  const drawerProgress = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    const translateY = interpolate(drawerProgress.value, [0, 1], [0, 40]);

    return {
      transform: [{ translateY }],
    };
  });

  return (
    <Animated.View style={[styles.container, viewStyles]}>
      <Text style={styles.title}>Beka</Text>
      <DrawerContentScrollView {...props}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const e = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
            if (!isFocused && !e.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <CustomDrawerItem
              key={index}
              label={route.name}
              onPress={onPress}
              isFocused={isFocused}
            />
          );
        })}
        <View style={styles.separator} />
        <DrawerItem
          label="Sign Out"
          onPress={() => {}}
          labelStyle={styles.drawerItemText}
        />
      </DrawerContentScrollView>
    </Animated.View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  drawerItem: {
    padding: 16,
    borderRadius: 16,
  },
  drawerItemText: {
    fontSize: 18,
    color: 'rgba(255,255,255,.75)',
  },
  separator: {
    marginVertical: 20,
    width: '100%',
    borderTopColor: 'rgba(255,255,255,.75)',
    borderTopWidth: 1,
  },
});
