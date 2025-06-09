import { View, Text } from "react-native";

interface MessageItemProps {
  message: string;
  type: string;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, type }) => {
  return (
    <View
      className="max-w-[80%] rounded-xl p-2 mb-4"
      style={{
        alignSelf: type === "ai" ? "flex-start" : "flex-end",
        backgroundColor: type === "ai" ? "#dcfce7" : "#f3f4f6",
      }}
    >
      <Text className="text-base">{message}</Text>
    </View>
  );
};

export default MessageItem;
