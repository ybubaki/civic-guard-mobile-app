import { Text, View } from "react-native";

const IssueCard = ({ issue }: { issue: any }) => {
  return (
    <View>
      <Text className="text-lg font-semibold">{issue.title}</Text>
    </View>
  );
};

export default IssueCard;
