import { Ionicons } from '@expo/vector-icons';
import { THEME } from '@/lib/constants/common';
import { useAppColors } from '@/lib/hooks/useAppColors';
import { Pressable, StyleSheet, View } from 'react-native';
import { useSettingsStore } from '@/context/Settings/store';
import { ThemedView } from '@/components/common/Themed/ThemedView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/common/Themed/ThemedText';
import { SingleSidedShadowBox } from '@/components/common/SingleShadowBox';

export type HeaderProps = {
  title: string;
  height?: number;
  disableSafeAreaTopInset?: boolean;
  handleClick?: () => void;
};

const child = ({ title, handleClick }: HeaderProps) => {
  const { ICON_DEFAULT } = useAppColors();

  return (
    <ThemedView variant="secondary" style={[styles.header_container]}>
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

export const Header = ({
  height,
  disableSafeAreaTopInset = false,
  ...props
}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const { theme } = useSettingsStore();
  const { BACKGROUND_SECONDARY } = useAppColors();

  return (
    <View
      style={{
        paddingTop: disableSafeAreaTopInset ? 0 : insets.top,
        backgroundColor: BACKGROUND_SECONDARY,
      }}
    >
      {theme === THEME.LIGHT ? (
        <SingleSidedShadowBox style={{ height: height || 40 }}>
          {child(props)}
        </SingleSidedShadowBox>
      ) : (
        child(props)
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header_container: {
    gap: 2,
    zIndex: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
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
