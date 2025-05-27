import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryCard from "../../components/category-card";
import IssueList from "../../components/issue-list";
import { useAuthStore } from "../../state/auth.state";

export default function HomeScreen() {
  const { token, user } = useAuthStore();

  if (!token) {
    router.replace("/login");
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 p-4">
        <Text className="text-xl line-clamp-1">Hi, {user.name}</Text>
        <TouchableOpacity
          onPress={() => {
            router.push("/create-report");
          }}
          className="bg-[#08A045] items-center px-6 py-4 rounded-full w-full mt-4"
        >
          <Text className="text-white font-semibold ">Report Issue</Text>
        </TouchableOpacity>
        <View className="mt-6 gap-4">
          <Text className="font-semibold text-lg">Categories</Text>
          <View className="gap-4">
            <CategoryCard
              title="Damaged Road"
              url="https://images.unsplash.com/photo-1617252820859-00a22c77ec0c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CategoryCard
              title="Flood"
              url="https://plus.unsplash.com/premium_photo-1733342648363-81cd437f9e43?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CategoryCard
              title="Homeless People"
              url="https://images.unsplash.com/photo-1595489835937-4987a9b42ad4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CategoryCard
              title="Broken Streetlights"
              url="https://images.unsplash.com/photo-1693329901004-0b6e0b73d6df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CategoryCard
              title="Community Dump"
              url="https://images.unsplash.com/photo-1589627762073-9aca94506fa1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </View>
        </View>
        <View className="my-6 gap-4">
          <Text className="font-semibold text-lg">
            Recently reported issues
          </Text>
          <View className="flex-1">
            <IssueList />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
