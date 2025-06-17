import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../Input";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "@/service/auth.service";
import { router } from "expo-router";
import { useGeneralStore } from "@/state/general.state";

interface PasswordViewProps {
  email: string;
}

const PasswordView = ({ email }: PasswordViewProps) => {
  const { setMessage } = useGeneralStore();
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending, error } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: ({ data }) => {
      setMessage("Password reset successfully");
      router.replace("/message-info");
    },
  });

  const handleResetPassword = () => {
    if (code === "" || password === "") return;
    mutate({ otp: code, newPassword: password, email });
  };

  return (
    <SafeAreaView className="bg-white flex-1 justify-center p-8 gap-10">
      <View className="gap-2">
        <Text className="text-4xl font-bold">Forgot Password</Text>
        <Text className="text-lg font-medium text-gray-500">
          Enter the code sent to your email to reset your password.
        </Text>
      </View>
      <View className="gap-4">
        {error && (
          <Text className="text-red-500">
            {error.message || "Something went wrong"}
          </Text>
        )}
        <View className="gap-1">
          <Text className="text-base text-gray-400">Code</Text>
          <InputField
            placeholder="Enter the code"
            value={code}
            onChangeText={setCode}
            keyboardType="email-address"
            icon="mail"
          />
        </View>
        <View className="gap-1">
          <Text className="text-base text-gray-400">Password</Text>
          <InputField
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            icon="lock"
          />
        </View>
        <View className="mt-6">
          <TouchableOpacity
            onPress={handleResetPassword}
            disabled={isPending || code === ""}
            className="bg-[#08A045] disabled:bg-gray-400 items-center px-6 py-4 rounded-full w-full"
          >
            <Text className="text-white font-semibold">
              {isPending ? "Resetting Password..." : "Reset Password"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PasswordView;
