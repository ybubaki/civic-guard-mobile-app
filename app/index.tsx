import { Stack, useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Image
          source={require("../assets/images/civic-guard-onboarding.png")}
          // className="w-[340px] h-[340px] object-contain"
          style={{ width: 400, height: 400 }}
          resizeMode="contain"
        />
        <View className="items-center px-8 py-4 w-full gap-10">
          <View className="items-center gap-6 w-full">
            <View className="items-center gap-2">
              <Text className="text-2xl font-bold">Welcome to CivicGuard</Text>
              <Text className="text-lg text-center">
                AI-Powered Civic Issue Reporting & Emergency Assistance
              </Text>
            </View>
            <Text className="text-center text-gray-400">
              Whether you're a citizen reporting a local problem or an official
              managing city-wide issues, CivicGuard makes it fast, smart, and
              seamless.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              router.replace("/login");
            }}
            className="bg-[#08A045] items-center px-6 py-4 rounded-full w-full"
          >
            <Text className="text-white font-semibold ">Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
