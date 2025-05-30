import {
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import InputField from "../components/Input";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { changePassword } from "../service/auth.service";
import { useAuthStore } from "../state/auth.state";

export default function ChangePasswordScreen() {
  const { token } = useAuthStore();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: changePassword,
    onSuccess: () => {
      router.dismiss();
    },
    onError: (error: any) => {
      setError(
        "Fill all the fields. Please contact support if the issue persists."
      );
    },
  });

  const handleUpdate = () => {
    if (currentPassword === "" || newPassword === "" || confirmPassword === "")
      return;

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    mutate({
      passwordData: {
        currentPassword,
        newPassword,
      },
      token,
    });
  };

  return (
    <KeyboardAvoidingView className="flex-1 bg-white p-4">
      <View className="flex-row items-center justify-between py-4 border-b border-gray-300">
        <Text className="text-2xl font-semibold">Change Password</Text>
        <TouchableOpacity
          onPress={() => {
            router.dismiss();
          }}
        >
          <Feather name="x-circle" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View className="gap-4 flex-1 bg-white mt-8">
        {error && <Text className="text-red-500">{error}</Text>}
        <View className="gap-1">
          <Text className="text-base text-gray-400">Current Password</Text>
          <InputField
            placeholder="Enter your current password"
            value={currentPassword}
            onChangeText={setCurrentPassword}
            icon="user"
            secureTextEntry
          />
        </View>
        <View className="gap-1">
          <Text className="text-base text-gray-400">New Password</Text>
          <InputField
            placeholder="Enter your new password"
            value={newPassword}
            onChangeText={setNewPassword}
            icon="user"
            secureTextEntry
          />
        </View>
        <View className="gap-1">
          <Text className="text-base text-gray-400">Confirm Password</Text>
          <InputField
            placeholder="Enter your confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            icon="lock"
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          onPress={handleUpdate}
          disabled={
            currentPassword === "" ||
            newPassword === "" ||
            confirmPassword === ""
          }
          className="bg-[#08A045] disabled:bg-gray-400 items-center px-6 py-4 rounded-full w-full mt-8"
        >
          <Text className="text-white font-semibold">
            {isPending ? "Updating..." : "Save Changes"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
