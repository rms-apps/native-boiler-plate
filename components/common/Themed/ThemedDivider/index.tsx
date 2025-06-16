import { useThemeColor } from '@/lib/hooks/useThemeColor';
import { View, StyleSheet, ViewProps, DimensionValue } from 'react-native';

export type Variant = 'block' | 'dashed' | 'default';
export type Alignment = 'horizontal' | 'vertical';
export type DividerProps = {
  size?: string;
  color?: string;
  variant?: Variant;
  alignment?: Alignment;
  lightColor?: string;
  darkColor?: string;
} & ViewProps;

const BORDER_MAIN_WIDTH_MOBILE = 1;
const BORDER_BLOCK_WIDTH_MOBILE = 6;
const BORDER_MAIN_WIDTH = BORDER_MAIN_WIDTH_MOBILE;
const BORDER_BLOCK_WIDTH = BORDER_BLOCK_WIDTH_MOBILE;

export const ThemedDivider = ({
  lightColor,
  darkColor,
  size = '100%',
  variant = 'default',
  alignment = 'horizontal',
  style,
  ...restProps
}: DividerProps) => {
  const dividerColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    `divider`,
  );

  const getStyle = () => {
    if (alignment === 'horizontal') {
      if (variant === 'default') {
        return styles.horizontalDefault;
      } else if (variant === 'block') {
        return styles.horizontalBlock;
      } else if (variant === 'dashed') {
        return styles.horizontalDashed;
      }
    } else if (alignment === 'vertical') {
      if (variant === 'default') {
        return styles.verticalDefault;
      } else if (variant === 'block') {
        return styles.verticalBlock;
      } else if (variant === 'dashed') {
        return styles.verticalDashed;
      }
    }
  };

  return (
    <View style={styles.container} {...restProps}>
      <View
        style={[
          getStyle(),
          { borderColor: dividerColor },
          styles.divider,
          style,
          ,
          { width: size as DimensionValue },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  divider: {
    alignSelf: 'center',
  },
  horizontalDefault: {
    borderTopWidth: BORDER_MAIN_WIDTH,
    borderStyle: 'solid',
  },
  horizontalBlock: {
    borderTopWidth: BORDER_BLOCK_WIDTH,
    borderStyle: 'solid',
  },
  horizontalDashed: {
    borderTopWidth: BORDER_MAIN_WIDTH,
    borderStyle: 'dashed',
  },
  verticalDefault: {
    borderLeftWidth: BORDER_MAIN_WIDTH,
    borderStyle: 'solid',
  },
  verticalBlock: {
    borderLeftWidth: BORDER_BLOCK_WIDTH,
    borderStyle: 'solid',
  },
  verticalDashed: {
    borderLeftWidth: BORDER_MAIN_WIDTH,
    borderStyle: 'dashed',
  },
});
