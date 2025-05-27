import EmptyCard from "@/components/empty-card";
import IssueCard from "@/components/issue-card";
import useGetIssues from "@/hooks/useGetIssues";
import { FlashList } from "@shopify/flash-list";
import { Text, TouchableOpacity, View } from "react-native";

export default function HistoryScreen() {
  const { data, isPending, error } = useGetIssues();

  if (isPending) return <Text>Loading issues...</Text>;
  if (error) return <Text>Error loading issues</Text>;

  return (
    <View className="flex-1 p-4 bg-white">
      <TouchableOpacity
        onPress={() => {}}
        className="bg-[#08A045] items-center px-6 py-4 rounded-full w-full mb-4"
      >
        <Text className="text-white font-semibold ">Report Issue</Text>
      </TouchableOpacity>
      <FlashList
        data={data.data}
        renderItem={({ item }) => <IssueCard issue={item} />}
        ListEmptyComponent={<EmptyCard title="You don't have any report" />}
        estimatedItemSize={100}
      />
    </View>
  );
}
