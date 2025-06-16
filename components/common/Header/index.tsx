import { ThemedView } from '../Themed/ThemedView';
import { ThemedText } from '../Themed/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import SingleSidedShadowBox from '../SingleShadowBox';
import { THEME } from '@/lib/constants/common';
import { useAppColors } from '@/lib/hooks/useAppColors';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSettingsStore } from '@/context/Settings/store';
import { useThemeColor } from '@/lib/hooks/useThemeColor';

export type HeaderProps = {
  title: string;
  height?: number;
  withPaddingTop?: boolean;
  handleClick?: () => void;
};

const child = ({ title, withPaddingTop = false, handleClick }: HeaderProps) => {
  const { ICON_DEFAULT } = useAppColors();

  return (
    <ThemedView
      variant="secondary"
      style={[styles.header_container, withPaddingTop && { paddingTop: 15 }]}
    >
      <View style={styles.left_pane}>
        <Ionicons name="timer-outline" size={22} color={ICON_DEFAULT} />
        <ThemedText lightColor="#7A7D85" size="h3" weight="extrabold">
          {title}
        </ThemedText>
      </View>

      {title !== 'Home' && title !== 'Settings' && !!handleClick && (
        <View style={styles.right_pane}>
          <Pressable onPress={handleClick}></Pressable>
        </View>
      )}
    </ThemedView>
  );
};

export const Header = (props: HeaderProps) => {
  const { theme } = useSettingsStore();
  const { BACKGROUND_SECONDARY } = useAppColors();

  return (
    <>
      <SafeAreaView style={{ backgroundColor: BACKGROUND_SECONDARY }} />

      {theme == THEME.LIGHT ? (
        <SingleSidedShadowBox style={{ height: props?.height || 40 }}>
          {child({ ...props })}
        </SingleSidedShadowBox>
      ) : (
        child({ ...props })
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header_container: {
    gap: 2,
    zIndex: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
    paddingHorizontal: 20,

    elevation: 10,
    shadowRadius: 8,
    shadowOpacity: 0.16,
    shadowColor: 'rgba(48, 49, 53, 1)',
    shadowOffset: { width: 8, height: 2 },
  },
  left_pane: {
    gap: 24,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  right_pane: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
