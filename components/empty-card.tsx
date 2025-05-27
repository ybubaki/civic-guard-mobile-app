import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface EmptyCardProps {
  title: string;
}

const EmptyCard: React.FC<EmptyCardProps> = ({ title }) => {
  return (
    <View className="border border-dashed gap-4 items-center justify-center border-gray-400 p-4 rounded-lg">
      <Feather name="clipboard" size={44} color="gray" />
      <Text className="font-semibold text-gray-400 text-xl">{title}</Text>
    </View>
  );
};

export default EmptyCard;
