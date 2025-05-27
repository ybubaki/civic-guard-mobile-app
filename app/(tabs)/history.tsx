import EmptyCard from "@/components/empty-card";
import IssueCard from "@/components/issue-card";
import useGetIssuesByUser from "@/hooks/useGetIssuesByUser";
import { FlashList } from "@shopify/flash-list";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HistoryScreen() {
  const router = useRouter();
  const { data, isPending, error } = useGetIssuesByUser();

  if (isPending) return <Text>Loading issues...</Text>;
  if (error) return <Text>Error loading issues</Text>;

  return (
    <>
      <View className="bg-white p-4">
        <TouchableOpacity
          onPress={() => {
            router.push("/create-report");
          }}
          className="bg-[#08A045] items-center px-6 py-4 rounded-full w-full"
        >
          <Text className="text-white font-semibold ">Report Issue</Text>
        </TouchableOpacity>
      </View>
      <FlashList
        className="flex-1 p-4 bg-white"
        data={data.data}
        renderItem={({ item }) => <IssueCard issue={item} />}
        ListEmptyComponent={<EmptyCard title="You don't have any report" />}
        estimatedItemSize={100}
      />
    </>
  );
}
