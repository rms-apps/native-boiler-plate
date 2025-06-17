import Constants from 'expo-constants';
import { Fragment, useState } from 'react';
import { WebView } from 'react-native-webview';
import { useAppColors } from '@/lib/hooks/useAppColors';
import { useSettingsStore } from '@/context/Settings/store';
import { ThemedView } from '@/components/common/Themed/ThemedView';
import { ThemedText } from '@/components/common/Themed/ThemedText';
import { StyleSheet, View, Linking, ScrollView } from 'react-native';
import { ThemedButton } from '@/components/common/Themed/ThemedButton';
import { ThemedSwitch } from '@/components/common/Themed/ThemedSwitch';
import { ThemedDivider } from '@/components/common/Themed/ThemedDivider';
import { HelpAndSupportModal } from '@/components/Modal/HelpAndSupport';
import { TermsAndConditionsModal } from '@/components/Modal/TermsAndConditions';

const SettingsScreen = () => {
  const { theme, isSoundEnabled, toggleSound, toggleTheme } =
    useSettingsStore();
  const { BACKGROUND_PRIMARY } = useAppColors();

  const isDarkThemeEnabled = theme === 'dark';

  const [isHelpModalVisible, setIsHelpModalVisible] = useState(false);
  const [isTermsModalVisible, setIsTermsModalVisible] = useState(false);

  const rmLogoSvg = `
  <?xml version="1.0" encoding="utf-8"?>
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
    y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
    <style type="text/css">
      .st0 {
        fill: none;
        stroke: ${isDarkThemeEnabled ? '#FFFFFF' : `#7A7D85`};
        stroke-width: 28;
        stroke-miterlimit: 20;
        stroke-dasharray: 11.0674, 221.3483, 11.0674, 11.0674, 221.3483, 11.0674;
      }

      .st1 {
        fill: ${isDarkThemeEnabled ? '#FFFFFF' : `#7A7D85`};
      }

      .st2 {
        fill: ${isDarkThemeEnabled ? '#151515' : '#FFFFFF'};
      }

      svg {
        cursor: pointer;
      }
    </style>
    <g>
      <circle class="st0" cx="250" cy="250" r="232.5">
        <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="360 250 250"
          to="0 250 250" dur="10s" repeatCount="indefinite" />
      </circle>
    </g>
    <circle class="st1" cx="250" cy="250" r="193" />
    <rect id="R_1" x="99" y="158" class="st2" width="20" height="191">

    </rect>
    <rect id="" x="140" y="116.5" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 317.5 17.5)" class="st2" width="20"
      height="102">

    </rect>
    <rect x="181" y="158" class="st2" width="20" height="95">

    </rect>
    <rect x="140" y="211.8" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 412.6925 112.7554)" class="st2"
      width="20" height="101.9">

    </rect>
    <rect id="M_1" x="250" y="158" class="st2" width="20" height="191">
      <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0,25;0,-45;0,25"
        dur="5s" repeatCount="indefinite" />
    </rect>
    <rect x="321" y="158" class="st2" width="20" height="191">

    </rect>
    <rect x="314.2" y="85.9" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 491.9425 -156.4946)" class="st2"
      width="20" height="163.6">

    </rect>
    <rect x="386" y="158" class="st2" width="20" height="191">

    </rect>
    <g>
      <g>
        <path class="st2" d="M114.2,277.5c12,16.4,29.3,23.7,47.3,31.7c7.5,3.3,15.1,6.4,17.6,14.8c3.1,10.3,3.6,21.5,4.5,32.2
        c2,22.3,4.1,44.7,13.5,65.3c8.9,19.6,24,32.4,44.1,39.5c22.8,8.1,48.5,10.4,70.4-1.5c12.4-6.8,1.4-25.8-11.1-19
        c-16.1,8.8-35.2,5.5-51.8-0.1c-8.1-2.7-15.7-6.5-21.6-12.8c-5.5-5.7-9.5-13.1-12.2-20.5c-7.1-19.1-8-39.5-10-59.6
        c-1-10.2-1.6-21.2-5-31c-3.5-9.9-9.9-17.4-19.1-22.5c-15.6-8.6-36.3-12.6-47.4-27.7c-3.5-4.8-9.5-7.2-15.1-3.9
        C113.4,265.2,110.7,272.7,114.2,277.5L114.2,277.5z" />
      </g>
    </g>
  </svg>`;

  const toggleHelpModal = () => {
    setIsHelpModalVisible(!isHelpModalVisible);
  };

  const toggleTermsModal = () => {
    setIsTermsModalVisible(!isTermsModalVisible);
  };

  const openAboutUs = () => {
    Linking.openURL('https://rishi-mishra.vercel.app/').catch((err) =>
      console.error('Failed to open About Us URL:', err),
    );
  };

  const settingsRows = [
    {
      id: 'themeMode',
      leftContent: <ThemedText size="b2">Dark Mode</ThemedText>,
      rightContent: (
        <ThemedSwitch value={isDarkThemeEnabled} onValueChange={toggleTheme} />
      ),
    },
    {
      id: 'enableSound',
      leftContent: <ThemedText size="b2">Enable Sound</ThemedText>,
      rightContent: (
        <ThemedSwitch value={isSoundEnabled} onValueChange={toggleSound} />
      ),
    },
    {
      id: 'aboutUs',
      leftContent: <ThemedText size="b2">About Us</ThemedText>,
      rightContent: (
        <ThemedButton
          title="Learn More"
          size="small"
          variant="secondary"
          themedTextProps={{ size: 'b3' }}
          onPress={openAboutUs}
        />
      ),
    },
    {
      id: 'termsAndPolicy',
      leftContent: <ThemedText size="b2">Terms and Policy</ThemedText>,
      rightContent: (
        <ThemedButton
          title="View Details"
          size="small"
          variant="secondary"
          themedTextProps={{ size: 'b3' }}
          onPress={toggleTermsModal}
        />
      ),
    },
    {
      id: 'helpAndSupport',
      leftContent: <ThemedText size="b2">Help & Support</ThemedText>,
      rightContent: (
        <ThemedButton
          title="Contact Us"
          size="small"
          variant="secondary"
          themedTextProps={{ size: 'b3' }}
          onPress={toggleHelpModal}
        />
      ),
    },
    {
      id: 'version',
      leftContent: <ThemedText size="b2">App Version</ThemedText>,
      rightContent: (
        <ThemedText size="b3" variant="secondary">
          {Constants.expoConfig?.version}
        </ThemedText>
      ),
    },
    {
      id: 'createdBy',
      leftContent: <ThemedText size="b2">Created By</ThemedText>,
      rmLogo: (
        <WebView
          originWhitelist={['*']}
          source={{
            html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                html, body {
                  margin: 0;
                  padding: 0;
                  width: 100%;
                  height: 100%;
                  overflow: hidden;
                }
                svg {
                  width: 100%;
                  height: 100%;
                }
              </style>
            </head>
            <body style="overflow: hidden;">
              ${rmLogoSvg}
            </body>
          </html>
        `,
          }}
          style={[styles.rmLogo, { backgroundColor: BACKGROUND_PRIMARY }]}
          scalesPageToFit={true}
        />
      ),
    },
  ];

  return (
    <ThemedView>
      <ThemedView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          bounces={false}
        >
          {settingsRows.map((row, index) => (
            <Fragment key={`${row.id}-${index}`}>
              <View style={styles.row}>
                {row.leftContent}
                {row?.rightContent && row.rightContent}
              </View>

              {row.rmLogo && (
                <View style={styles.logoContainer}>
                  <View style={styles.logo}>{row.rmLogo}</View>
                </View>
              )}

              {index < settingsRows.length - 1 && <ThemedDivider size="97%" />}
            </Fragment>
          ))}
        </ScrollView>
      </ThemedView>

      <View className="flex flex-1 mb-4 h-10 w-10" />

      <HelpAndSupportModal
        visible={isHelpModalVisible}
        onClose={toggleHelpModal}
      />

      <TermsAndConditionsModal
        visible={isTermsModalVisible}
        onClose={toggleTermsModal}
      />
    </ThemedView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  contentContainer: {
    flex: 1,
    marginBottom: 90,
  },
  row: {
    paddingVertical: 18,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerRow: {
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    display: 'flex',
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rmLogo: {
    width: 200,
  },
});
