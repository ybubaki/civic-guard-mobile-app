import { Stack, router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../components/Input";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  return (
    <>
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <ScrollView className="flex-1 bg-white">
        <SafeAreaView className="bg-white flex-1 mt-4 p-8 gap-10">
          <View className="gap-2">
            <Text className="text-4xl font-bold">Register</Text>
            <Text className="text-lg font-medium text-gray-500">
              Welcome to CivicGuard! To get started, please enter a valid email
              address and a strong password.
            </Text>
          </View>
          <View className="gap-4">
            <View className="gap-1">
              <Text className="text-base text-gray-400">Full Name</Text>
              <InputField
                placeholder="Enter your full name"
                value={fullName}
                onChangeText={setFullName}
                icon="user"
              />
            </View>
            <View className="gap-1">
              <Text className="text-base text-gray-400">Username</Text>
              <InputField
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername}
                icon="user"
              />
            </View>
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
                  <Text className="text-base text-[#000]">
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="mt-6">
              <TouchableOpacity
                onPress={() => {
                  console.log(email, password, fullName, username);
                }}
                className="bg-[#08A045] items-center px-6 py-4 rounded-full w-full"
              >
                <Text className="text-white font-semibold">Register</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row items-center justify-center gap-1">
            <Text className="text-center text-gray-400">
              Already have an account?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <Text className="text-[#08A045] font-semibold">Login</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}
