import { StyleSheet } from 'react-native';
import React, { Children } from 'react';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const DrawerView = ({ children, style = null }) => {
  const drawerProgress = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 32]);
    const rotateValue = interpolate(drawerProgress.value, [0, 1], [0, -10]);
    const translateX = interpolate(drawerProgress.value, [0, 1], [0, 60]);

    return {
      transform: [{ translateX }, { rotate: rotateValue + 'deg' }],
      borderRadius,
    };
  });

  return (
    <Animated.View style={[styles.container, style, viewStyles]}>
      {children}
    </Animated.View>
  );
};

export default DrawerView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
