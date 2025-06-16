import { Colors } from '@/lib/constants/colors';
import { useSettingsStore } from '@/context/Settings/store';

export type ColorName = keyof typeof Colors.light & keyof typeof Colors.dark;

export const useThemeColor = (
  props: { light?: string; dark?: string },
  colorName: ColorName,
) => {
  const { theme } = useSettingsStore();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
};
