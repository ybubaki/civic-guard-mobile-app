import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

interface InputFieldProps {
  placeholder?: string;
  value?: string;
  icon?: any;
  keyboardType?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  icon,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View className="flex items-center flex-row gap-2 border border-gray-300 rounded-full px-4 py-2">
      <Feather name={icon} size={24} color="#9ca3af" />
      <TextInput
        placeholder={placeholder}
        value={value}
        cursorColor="black"
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        className="p-2 flex-1"
      />
    </View>
  );
};

export default InputField;
