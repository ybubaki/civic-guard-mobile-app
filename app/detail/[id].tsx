import useGetIssueById from "@/hooks/useGetIssueById";
import { BASE_URL } from "@/service";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function IssueDetailsScreen() {
  const { id } = useLocalSearchParams();
  const { data, isPending, error } = useGetIssueById(id as string);

  console.log(id);

  return (
    <ScrollView className="flex-1 p-4">
      <View className="flex-row items-center justify-between py-4 px-2 border-b border-gray-300">
        <Text className="text-2xl font-semibold">Report Details</Text>
        <TouchableOpacity
          onPress={() => {
            router.dismiss();
          }}
        >
          <Feather name="x-circle" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      {isPending && (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
      {error && (
        <View>
          <Text>Error: {error.message}</Text>
        </View>
      )}
      {data && (
        <View className="mt-6">
          <Image
            source={{ uri: `${BASE_URL}${data?.data?.imageUrl}` }}
            className="w-full h-72 rounded-lg"
          />
          <View className="mt-6">
            <Text className="font-semibold text-xl">{data?.data?.title}</Text>
            <Text className="text-gray-500 text-xs">
              {new Intl.DateTimeFormat("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }).format(new Date(data?.data?.createdAt))}
            </Text>
          </View>
          <View className="gap-2 mt-2 mb-6">
            <View className="flex-row items-center gap-2">
              <Text className="text-base font-medium">Priority:</Text>
              <Text className="text-gray-500 text-base">
                {data?.data?.priority}
              </Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Text className="text-base font-medium">Category:</Text>
              <Text className="text-gray-500 text-base">
                {data?.data?.classification}
              </Text>
            </View>
          </View>
          <View className="mt-2">
            <Text className="font-semibold text-lg">Description</Text>
            <Text className="mt-2 text-gray-500 text-lg">
              {data?.data?.description}
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
