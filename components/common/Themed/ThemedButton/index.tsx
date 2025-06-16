import { cn } from '@/lib/utils/cn';
import { useThemeColor } from '@/lib/hooks/useThemeColor';
import { Pressable, PressableProps, View } from 'react-native';
import {
  ThemedText,
  ThemedTextProps,
} from '@/components/common/Themed/ThemedText';

export type ThemedButtonProps = PressableProps & {
  btnColor?: string;
  txtColor?: string;
  title: string;
  type?: 'hollow' | 'filled';
  themedTextProps?: ThemedTextProps;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export const ThemedButton = ({
  btnColor,
  txtColor,
  title,
  type = 'filled',
  size = 'medium',
  variant = 'primary',
  themedTextProps,
  style,
  disabled,
  ...otherProps
}: ThemedButtonProps) => {
  const buttonColor = useThemeColor(
    { light: btnColor, dark: btnColor },
    `button_bg_${variant}`,
  );
  const textColor = useThemeColor(
    {
      light: type === 'hollow' ? txtColor : '',
      dark: type === 'hollow' ? txtColor : '',
    },
    `button_text_${variant}_${type}`,
  );

  const sizeClasses =
    size === 'small'
      ? 'px-3 py-1'
      : size === 'large'
        ? 'px-8 py-4'
        : 'px-4 py-2';

  return (
    <Pressable disabled={disabled} {...otherProps}>
      <View
        className={cn(
          'rounded-full',
          sizeClasses,
          type === 'hollow' && 'border',
          disabled && 'opacity-50',
        )}
        style={[
          type === 'filled'
            ? { backgroundColor: buttonColor }
            : { borderColor: buttonColor, backgroundColor: 'transparent' },
          // style,
        ]}
      >
        <ThemedText
          {...themedTextProps}
          style={[{ color: textColor }, themedTextProps?.style]}
        >
          {title}
        </ThemedText>
      </View>
    </Pressable>
  );
};
