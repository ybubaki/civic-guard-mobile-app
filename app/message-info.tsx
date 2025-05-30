import { Feather } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useGeneralStore } from "../state/general.state";

export default function MessageInfoScreen() {
  const { message } = useGeneralStore();
  return (
    <>
      <SafeAreaView className="flex-1 bg-white">
        <View
          style={{
            padding: 32,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="check-circle" size={64} color="green" />
          <Text className="text-2xl font-semibold mt-4">Congratulation!</Text>
          <Text className="text-lg text-center text-gray-500 mt-2">
            {message}
          </Text>
          <TouchableOpacity
            onPress={() => {
              router.replace("/login");
            }}
            className="bg-[#08A045] items-center px-6 py-4 rounded-full w-full mt-8"
          >
            <Text className="text-white font-semibold">Login to continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
