import { Colors } from '@/lib/constants/colors';
import { View, type ViewProps } from 'react-native';
import { useThemeColor } from '@/lib/hooks/useThemeColor';

export type ViewVariant = 'primary' | 'secondary' | 'tertiary';

export type ThemedViewProps = ViewProps & {
  variant?: ViewVariant;
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  darkColor,
  lightColor,
  variant = 'primary',
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    `background_${variant}` as keyof typeof Colors.light,
  );

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
