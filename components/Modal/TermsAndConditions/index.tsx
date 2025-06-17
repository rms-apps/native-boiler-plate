import { Header } from '@/components/common/Header';
import { useAppColors } from '@/lib/hooks/useAppColors';
import { ThemedText } from '@/components/common/Themed/ThemedText';
import { ThemedView } from '@/components/common/Themed/ThemedView';
import { Modal, StyleSheet, View, ScrollView } from 'react-native';
import { MODEL_CONTENT_PADDING_BOTTOM } from '@/lib/constants/common';
import { ThemedButton } from '@/components/common/Themed/ThemedButton';
import { ThemedDivider } from '@/components/common/Themed/ThemedDivider';

type Section = {
  title: string;
  content: string;
};

type TermsAndConditionsModalProps = {
  visible: boolean;
  onClose: () => void;
  additionalSections?: Section[];
};

export const TermsAndConditionsModal = ({
  visible,
  onClose,
  additionalSections = [],
}: TermsAndConditionsModalProps) => {
  const { BACKGROUND_SECONDARY } = useAppColors();

  const defaultSections: Section[] = [
    {
      title: 'Acceptance of Terms',
      content:
        'By using this application, you agree to the Terms and Conditions. If you disagree with any part, please do not use the app.',
    },
    {
      title: 'Use of the Application',
      content:
        'Use the app lawfully and respectfully. Do not engage in misuse, unauthorized access, or disruption of service.',
    },
    {
      title: 'User Responsibilities',
      content:
        'You are responsible for maintaining the confidentiality of your account and all activity under it. Notify us immediately if you suspect unauthorized access.',
    },
    {
      title: 'Accuracy of Information',
      content:
        'While we aim to provide accurate information, we do not guarantee completeness or accuracy. Use the app at your own risk.',
    },
    {
      title: 'Intellectual Property',
      content:
        'All content and design elements are owned by the respective app owner. Unauthorized use is prohibited.',
    },
    {
      title: 'Data Privacy and Security',
      content:
        'Your data is protected in accordance with our Privacy Policy. While we use security measures, we cannot ensure absolute protection.',
    },
    {
      title: 'Third-Party Services',
      content:
        'The app may link to external services. We are not responsible for third-party content or privacy practices.',
    },
    {
      title: 'Limitation of Liability',
      content:
        'The app owner is not liable for any indirect or consequential losses resulting from your use of the app.',
    },
    {
      title: 'Indemnification',
      content:
        'You agree to indemnify and hold harmless the app owner and its affiliates from any claims, damages, or losses arising from your use of the app or violation of these terms.',
    },
    {
      title: 'Governing Law',
      content:
        'These Terms and Conditions are governed by the laws of India. All disputes shall be subject to the exclusive jurisdiction of the courts in India.',
    },
    {
      title: 'Changes to Terms',
      content:
        'These terms may be updated from time to time. Continued use of the app means acceptance of the changes.',
    },
    {
      title: 'Termination',
      content:
        'We reserve the right to terminate or restrict access without notice if you violate these terms.',
    },
  ];

  const sections = [...defaultSections, ...additionalSections];

  return (
    <ThemedView style={styles.modalContainer}>
      <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
        <Header title="Terms And Conditions" disableSafeAreaTopInset />

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
    gap: 12,
    margin: 10,
    padding: 10,
    paddingBottom: MODEL_CONTENT_PADDING_BOTTOM,
  },
  sectionContainer: {
    gap: 12,
  },
});
