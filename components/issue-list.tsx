import useGetIssues from "@/hooks/useGetIssues";
import { FlashList } from "@shopify/flash-list";
import { Text, View } from "react-native";
import EmptyCard from "./empty-card";
import IssueCard from "./issue-card";

const IssueList = () => {
  const { data, isPending, error } = useGetIssues();

  if (isPending) return <Text>Loading issues...</Text>;
  if (error) return <Text>Error loading issues</Text>;

  return (
    <FlashList
      data={data.data.slice(0, 3)}
      ListEmptyComponent={<EmptyCard title="No report found" />}
      estimatedItemSize={100}
      ItemSeparatorComponent={() => <View className="h-4" />}
      renderItem={({ item }) => <IssueCard issue={item} />}
    />
  );
};

export default IssueList;
