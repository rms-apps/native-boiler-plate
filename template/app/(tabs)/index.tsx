import { ThemedView } from '@/components/common/Themed/ThemedView';
import { ThemedText } from '@/components/common/Themed/ThemedText';

const HomeScreen = () => {
  return (
    <ThemedView className="flex-1 px-6 py-12 items-center justify-center">
      <ThemedText>Home Page</ThemedText>
    </ThemedView>
  );
};

export default HomeScreen;
