import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import { LinearGradientColors } from '@/lib/type/common';

type Size = 'small' | 'medium' | 'large';

type ThemedSwitchProps = {
  size?: Size;
  value: boolean;
  onValueChange: (newValue: boolean) => void;
};

const defaultStyles = {
  bgGradientColors: ['#7A7D85', '#7A7D85'] as LinearGradientColors,
  headGradientColors: ['#ffffff', '#E1E4E8'] as LinearGradientColors,
};

const activeStyles = {
  bgGradientColors: ['#00c4ff', '#fff600'] as LinearGradientColors,
  headGradientColors: ['#444D56', '#0E1723'] as LinearGradientColors,
};

export const ThemedSwitch = ({
  value,
  size = 'small',
  onValueChange,
}: ThemedSwitchProps) => {
  const OFFSET = 4;
  const pressableContainerWidth =
    size === 'large' ? 100 : size === 'medium' ? 60 : 45;
  const pressableHeadWidth =
    size === 'large' ? 40 : size === 'medium' ? 24 : 18;

  const enabled = useSharedValue(value ? 1 : 0);

  const animatedToggleStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      enabled.value,
      [0, 1],
      [OFFSET, pressableContainerWidth - pressableHeadWidth - OFFSET],
    );
    return { transform: [{ translateX }] };
  });

  const handleToggle = () => {
    const newValue = !value;
    onValueChange(newValue);
  };

  useEffect(() => {
    enabled.value = withSpring(value ? 1 : 0, { duration: 350 });
  }, [value]);

  const currentStyles = value ? activeStyles : defaultStyles;

  const styles = StyleSheet.create({
    pressable: {
      borderRadius: 100,
      width: pressableContainerWidth,
      height: size === 'large' ? 48 : size === 'medium' ? 30 : 24,
    },
    headGradient: {
      borderRadius: 100,
      width: pressableHeadWidth,
      height: size === 'large' ? 40 : size === 'medium' ? 24 : 18,
    },
    backgroundGradient: {
      flex: 1,
      borderRadius: 100,
    },
    innerContainer: {
      flex: 1,
      position: 'relative',
      alignItems: 'center',
      flexDirection: 'row',
    },
  });

  return (
    <Pressable style={styles.pressable} onPress={handleToggle}>
      <LinearGradient
        style={styles.backgroundGradient}
        colors={currentStyles.bgGradientColors}
        start={{
          x: 0,
          y: 0.5,
        }}
      >
        <View style={styles.innerContainer}>
          <Animated.View style={[animatedToggleStyle]}>
            <LinearGradient
              style={styles.headGradient}
              colors={currentStyles.headGradientColors}
            />
          </Animated.View>
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default ThemedSwitch;
