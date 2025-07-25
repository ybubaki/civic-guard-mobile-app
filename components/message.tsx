import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

interface MessageItemProps {
  message: string;
  type: string;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, type }) => {
  return (
    <View className={type === "ai" ? "flex-row items-start gap-2" : ""}>
      {type === "ai" && (
        <MaterialCommunityIcons
          name="robot-outline"
          size={24}
          color="black"
          className="mt-2"
        />
      )}
      <View
        className="max-w-[80%] rounded-xl p-2 mb-4 bg-green-50"
        style={{
          alignSelf: type === "ai" ? "flex-start" : "flex-end",
          backgroundColor: type === "ai" ? "#f0fdf4" : "#f3f4f6",
        }}
      >
        <Text className="text-base">{message}</Text>
      </View>
    </View>
  );
};

export default MessageItem;
