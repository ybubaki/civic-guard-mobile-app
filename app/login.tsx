import { router, Stack } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../components/Input";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <SafeAreaView className="bg-white flex-1 justify-center p-8 gap-10">
        <View className="gap-2">
          <Text className="text-4xl font-bold">Login</Text>
          <Text className="text-lg font-medium text-gray-500">
            Hello, you must enter your E-mail and Password to Login and use
            CivicGuard
          </Text>
        </View>
        <View className="gap-4">
          <View className="gap-1">
            <Text className="text-base text-gray-400">E-mail Address</Text>
            <InputField
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              icon="mail"
            />
          </View>
          <View className="gap-1">
            <Text className="text-base text-gray-400">Password</Text>
            <InputField
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              icon="lock"
            />
            <View className="mt-2 flex-row justify-end">
              <TouchableOpacity>
                <Text className="text-base text-[#000]">Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="mt-6">
            <TouchableOpacity
              onPress={() => {
                console.log(email, password);
              }}
              className="bg-[#08A045] items-center px-6 py-4 rounded-full w-full"
            >
              <Text className="text-white font-semibold">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row items-center justify-center gap-1">
          <Text className="text-center text-gray-400">
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => {
              router.push("/signup");
            }}
          >
            <Text className="text-[#08A045] font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
