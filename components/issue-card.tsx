import { BASE_URL } from "@/service";
import { Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface IssueCardProps {
  issue: Issue | any;
}

const IssueCard: React.FC<IssueCardProps> = ({ issue }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/detail/${issue.id}`);
      }}
      className="flex-1 flex-row items-center gap-4 my-2"
    >
      <Image
        source={{ uri: `${BASE_URL}${issue.imageUrl}` }}
        className="w-44 h-36 rounded-lg"
      />
      <View className="flex-1 gap-1">
        <Text className="text-gray-500 text-xs">
          {new Intl.DateTimeFormat("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(new Date(issue.createdAt))}
        </Text>
        <View className="">
          <Text className="text-lg font-semibold">This is the title.</Text>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            className="text-base text-gray-500"
          >
            {issue.description}
          </Text>
        </View>
        <View className="flex-row items-center gap-2">
          <View className="flex-row items-center gap-2">
            <Octicons
              name="dot-fill"
              size={20}
              color={
                issue.priority === "high"
                  ? "red"
                  : issue.priority === "medium"
                  ? "orange"
                  : "green"
              }
            />
            <Text className="text-gray-500 font-semibold text-sm">
              {issue.priority.toUpperCase()}
            </Text>
          </View>
          <Text className="text-gray-500 text-xs bg-gray-200 px-2 py-1 rounded-full self-start">
            {issue.classification}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default IssueCard;
