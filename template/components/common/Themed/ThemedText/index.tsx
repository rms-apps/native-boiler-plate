import { Colors } from '@/lib/constants/colors';
import { useThemeColor } from '@/lib/hooks/useThemeColor';
import { Text, StyleSheet, TextProps } from 'react-native';

export interface ThemedTextProps extends TextProps {
  weight?:
    | 'extrabold'
    | 'bold'
    | 'semibold'
    | 'regular'
    | 'medium'
    | 'light'
    | 'thin'
    | 'condensedSemiBold'
    | 'condensedRegular';
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'h1' | 'h2' | 'h3' | 'b1' | 'b2' | 'b3' | 'sm';
  lightColor?: string;
  darkColor?: string;
  align?:
    | 'stretch'
    | 'auto'
    | 'baseline'
    | 'center'
    | 'flex-start'
    | 'flex-end';
}

export const ThemedText = ({
  size = 'b2',
  align = 'center',
  weight = 'regular',
  variant = 'primary',
  darkColor,
  lightColor,
  style,
  ...rest
}: ThemedTextProps) => {
  const fontColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    `text_${variant}` as keyof typeof Colors.light,
  );

  return (
    <Text
      style={[
        styles[size],
        styles[weight],
        { color: fontColor, alignSelf: align },
        style,
      ]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  h1: { fontSize: 36, lineHeight: 40 },
  h2: { fontSize: 22, lineHeight: 28 },
  h3: { fontSize: 18, lineHeight: 24 },
  b1: { fontSize: 16, lineHeight: 22 },
  b2: { fontSize: 14, lineHeight: 20 },
  b3: { fontSize: 12, lineHeight: 16 },
  sm: { fontSize: 10, lineHeight: 14 },
  extrabold: { fontFamily: 'NotoSansExtraBold' },
  bold: { fontFamily: 'NotoSansBold' },
  semibold: { fontFamily: 'NotoSansSemiBold' },
  medium: { fontFamily: 'NotoSansMedium' },
  regular: { fontFamily: 'NotoSansRegular' },
  thin: { fontFamily: 'NotoSansThin' },
  light: { fontFamily: 'NotoSansLight' },
  condensedSemiBold: { fontFamily: 'NotoSansCondensedSemiBold' },
  condensedRegular: { fontFamily: 'NotoSansCondensedRegular' },
});
