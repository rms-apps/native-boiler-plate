import { Header } from '@/components/common/Header';
import { ThemedText } from '@/components/common/Themed/ThemedText';
import { ThemedView } from '@/components/common/Themed/ThemedView';
import { Modal, StyleSheet, View, ScrollView } from 'react-native';
import { ThemedButton } from '@/components/common/Themed/ThemedButton';
import { ThemedDivider } from '@/components/common/Themed/ThemedDivider';
import { useAppColors } from '@/lib/hooks/useAppColors';

type HelpAndSupportModalProps = {
  visible: boolean;
  onClose: () => void;
};

export const HelpAndSupportModal = ({
  visible,
  onClose,
}: HelpAndSupportModalProps) => {
  const { BACKGROUND_SECONDARY } = useAppColors();
  const sections = [
    {
      title: 'How Can We Assist You?',
      content:
        "We're here to help! Whether you have questions about your account, need technical support, or want to learn more about our services, we're just a message away.",
    },
    {
      title: 'Frequently Asked Questions (FAQ)',
      content:
        'What are your business hours?\nOur support team is available Monday to Friday, 9:00 AM to 5:00 PM (IST).\n\nHow do I report a technical issue?\nYou can report a technical issue by emailing us at rishi.mishra.freelance@gmail.com.',
    },
    {
      title: 'Contact Information',
      content:
        'If you need immediate assistance, feel free to reach out:\n\n📧 Email: rishi.mishra.freelance@gmail.com\n🌐 Website: https://rishi-mishra.vercel.app/',
    },
    {
      title: 'Live Chat Support (Beta)',
      content:
        'Need real-time help? Our live chat is available Monday to Friday, 9:00 AM to 5:00 PM (IST). Response times may vary during the beta phase.',
    },
    {
      title: 'Feedback',
      content:
        'We’d love to hear from you! If you have suggestions, feature requests, or general feedback, please contact us at rishi.mishra.freelance@gmail.com.',
    },
  ];

  return (
    <ThemedView style={styles.modalContainer}>
      <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
        <Header title="Help & Support" disableSafeAreaTopInset />

        <ThemedView style={styles.modalContent}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            {sections.map((section, index) => (
              <View
                key={`section-${section.title}-${index}`}
                style={styles.sectionContainer}
              >
                <ThemedText size="b1" weight="semibold" align="flex-start">
                  {index + 1}. {section.title}
                </ThemedText>
                <ThemedText align="flex-start">{section.content}</ThemedText>
                {index < sections.length - 1 && <ThemedDivider />}
              </View>
            ))}
          </ScrollView>

          <View
            className="p-4"
            style={{ backgroundColor: BACKGROUND_SECONDARY }}
          >
            <ThemedButton title="Close" onPress={onClose} />
          </View>
        </ThemedView>
      </Modal>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: 100,
    position: 'absolute',
  },
  modalContent: {
    flex: 1,
  },
  scrollView: {
    padding: 10,
    margin: 10,
    gap: 12,
  },
  sectionContainer: {
    gap: 12,
  },
});
