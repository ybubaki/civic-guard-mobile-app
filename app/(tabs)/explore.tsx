import EmptyCard from "@/components/empty-card";
import IssueCard from "@/components/issue-card";
import useGetIssues from "@/hooks/useGetIssues";
import { FlashList } from "@shopify/flash-list";
import { Text, View } from "react-native";

export default function ExploreScreen() {
  const { data, isPending, error } = useGetIssues();

  if (isPending) return <Text>Loading issues...</Text>;
  if (error) return <Text>Error loading issues</Text>;

  return (
    <View className="flex-1 p-4 bg-white">
      <FlashList
        data={data.data}
        renderItem={({ item }) => <IssueCard issue={item} />}
        ListEmptyComponent={<EmptyCard title="No report found" />}
        estimatedItemSize={100}
      />
    </View>
  );
}
