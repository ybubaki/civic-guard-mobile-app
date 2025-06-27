import { register } from "@/service/auth.service";
import { useMutation } from "@tanstack/react-query";
import { Stack, router } from "expo-router";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../components/Input";
import { useGeneralStore } from "../state/general.state";

export default function SignUpScreen() {
  const { setMessage } = useGeneralStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");

  const { mutate, isPending, error } = useMutation({
    mutationFn: register,
    onSuccess: ({ data }) => {
      // Invalidate and refetch
      setMessage("You have been registered successfully.");
      router.replace("/message-info");
    },
  });

  const handleRegister = () => {
    if (email === "" || password === "" || fullName === "" || username === "")
      return;

    mutate({
      email: email.toLowerCase().trim(),
      password,
      name: fullName.trim(),
      username: username.toLowerCase().trim(),
    });
  };

  return (
    <>
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView className="flex-1 bg-white">
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            className="flex-1"
          >
            <SafeAreaView className="bg-white flex-1 mt-4 p-8 gap-10">
              <View className="gap-2">
                <Text className="text-4xl font-bold">Register</Text>
                <Text className="text-lg font-medium text-gray-500">
                  Welcome to CivicGuard! To get started, please enter a valid
                  address and a strong password.
                </Text>
              </View>
              <View className="gap-4">
                {error && (
                  <Text className="text-red-500">
                    Fill all the fields. Password must be at least 8 characters
                    long.
                  </Text>
                )}
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
                  <Text className="text-base text-gray-400">
                    E-mail Address
                  </Text>
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
                </View>
                <View className="mt-6">
                  <TouchableOpacity
                    onPress={handleRegister}
                    disabled={
                      isPending ||
                      email === "" ||
                      password === "" ||
                      fullName === "" ||
                      username === ""
                    }
                    className="bg-[#08A045] items-center disabled:bg-gray-400 px-6 py-4 rounded-full w-full"
                  >
                    <Text className="text-white font-semibold">
                      {isPending ? "Loading..." : "Register"}
                    </Text>
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
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
