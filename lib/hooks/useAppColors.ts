import { useThemeColor } from '@/lib/hooks/useThemeColor';

export const useAppColors = () => {
  return {
    TEXT_PRIMARY: useThemeColor({}, 'text_primary'),
    TEXT_SECONDARY: useThemeColor({}, 'text_secondary'),
    TEXT_TERTIARY: useThemeColor({}, 'text_tertiary'),

    BACKGROUND_PRIMARY: useThemeColor({}, 'background_primary'),
    BACKGROUND_SECONDARY: useThemeColor({}, 'background_secondary'),
    BACKGROUND_TERTIARY: useThemeColor({}, 'background_tertiary'),

    TEXT_INPUT_CARET: useThemeColor({}, 'text_input_caret'),
    TEXT_INPUT_BORDER: useThemeColor({}, 'text_input_border'),
    TEXT_INPUT_CONTENT: useThemeColor({}, 'text_input_content'),
    TEXT_INPUT_BORDER_FOCUS: useThemeColor({}, 'text_input_border_focus'),

    BUTTON_BG_PRIMARY: useThemeColor({}, 'button_bg_primary'),
    BUTTON_TEXT_PRIMARY_HOLLOW: useThemeColor({}, 'button_text_primary_hollow'),
    BUTTON_TEXT_PRIMARY_FILLED: useThemeColor({}, 'button_text_primary_filled'),

    BUTTON_BG_SECONDARY: useThemeColor({}, 'button_bg_secondary'),
    BUTTON_TEXT_SECONDARY_HOLLOW: useThemeColor(
      {},
      'button_text_secondary_hollow',
    ),
    BUTTON_TEXT_SECONDARY_FILLED: useThemeColor(
      {},
      'button_text_secondary_filled',
    ),

    BUTTON_BG_TERTIARY: useThemeColor({}, 'button_bg_tertiary'),
    BUTTON_TEXT_TERTIARY_HOLLOW: useThemeColor(
      {},
      'button_text_tertiary_hollow',
    ),
    BUTTON_TEXT_TERTIARY_FILLED: useThemeColor(
      {},
      'button_text_tertiary_filled',
    ),

    ICON_ACTIVE: useThemeColor({}, 'icon_active'),
    ICON_DEFAULT: useThemeColor({}, 'icon_default'),

    DIVIDER: useThemeColor({}, 'divider'),

    CARD_BACKGROUND: useThemeColor({}, 'card_background'),

    ACTIVE_CAROUSE_ENTITY_COLOR: useThemeColor(
      {},
      'active_carouse_entity_color',
    ),
  };
};
