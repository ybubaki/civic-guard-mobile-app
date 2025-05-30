import EmptyCard from "@/components/empty-card";
import IssueCard from "@/components/issue-card";
import { FlashList } from "@shopify/flash-list";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, TextInput, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import useGetSearchedIssues from "@/hooks/useGetSearchedIssues";
import { useGeneralStore } from "@/state/general.state";

export default function ExploreScreen() {
  const [input, setInput] = useState("");
  const { search, setSearch } = useGeneralStore();

  // console.log(search);

  const { data, isPending, error } = useGetSearchedIssues(search);

  if (isPending) return <Text>Loading issues...</Text>;
  if (error) return <Text>Error loading issues</Text>;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <SearchBar
        input={input}
        setInput={setInput}
        onSearch={() => setSearch(input.trim())}
      />
      <FlashList
        className="flex-1"
        contentContainerStyle={{ padding: 16 }}
        data={data?.data || []}
        renderItem={({ item }) => <IssueCard issue={item} />}
        ListEmptyComponent={<EmptyCard title="No report found" />}
        estimatedItemSize={100}
      />
    </SafeAreaView>
  );
}

function SearchBar({
  input,
  setInput,
  onSearch,
}: {
  input: string;
  setInput: (val: string) => void;
  onSearch: () => void;
}) {
  return (
    <View className="p-4">
      <View className="bg-gray-100 rounded-full px-4 py-1 flex-row items-center gap-2">
        <TextInput
          keyboardType="web-search"
          placeholder="Search"
          className="flex-1"
          cursorColor="#000"
          value={input}
          onSubmitEditing={onSearch}
          onChangeText={setInput}
          returnKeyType="search"
        />
        <TouchableOpacity onPress={onSearch}>
          <Feather name="search" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
