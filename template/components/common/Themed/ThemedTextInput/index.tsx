import { useState } from "react";
import { useThemeColor } from "@/lib/hooks/useThemeColor";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

export type ThemedTextInputProps = {} & TextInputProps;

export const ThemedTextInput = ({
  style,
  ...otherProps
}: ThemedTextInputProps) => {
  const caretColor = useThemeColor({}, "textInputCaret");
  const borderColor = useThemeColor({}, "textInputBorder");
  const contentColor = useThemeColor({}, "textInputContent");
  const borderFocusColor = useThemeColor({}, "textInputBorderFocus");

  const [textInputBorderColor, setTextInputBorderColor] = useState(borderColor);

  const handleBlur = () => {
    setTextInputBorderColor(borderColor);
  };

  const handleFocus = () => {
    setTextInputBorderColor(borderFocusColor);
  };

  return (
    <TextInput
      selectionColor={caretColor}
      style={[
        styles.input,
        { color: contentColor, borderColor: textInputBorderColor },
        style,
      ]}
      onFocus={handleFocus}
      onEndEditing={handleBlur}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 30,
    borderWidth: 2,
    // alignSelf: "center",
    borderRadius: 8,
    textAlign: "center",
  },
});
