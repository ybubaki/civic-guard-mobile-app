import {
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Text,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import InputField from "../components/Input";
import { useAuthStore } from "../state/auth.state";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "@/service/auth.service";

export default function ManageAccountScreen() {
  const { token, user, setUser } = useAuthStore();

  const { mutate, isPending, error } = useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      setUser(data.data);
      router.dismiss();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [fullName, setFullName] = useState(user?.name || "");
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleUpdate = async () => {
    if (fullName === "" || username === "" || email === "") return;

    mutate({
      userData: {
        name: fullName,
        username,
        email,
      },
      token,
    });
  };

  return (
    <KeyboardAvoidingView className="flex-1 bg-white p-4">
      <View className="flex-row items-center justify-between py-4 border-b border-gray-300">
        <Text className="text-2xl font-semibold">Manage Account</Text>
        <TouchableOpacity
          onPress={() => {
            router.dismiss();
          }}
        >
          <Feather name="x-circle" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View className="gap-4 flex-1 bg-white mt-8">
        {error && (
          <Text className="text-red-500">
            Fill all the fields. Please contact support if the issue persists.
          </Text>
        )}
        <View className="gap-1">
          <Text className="text-base text-gray-400">Full Name</Text>
          <InputField
            placeholder="Enter your full name"
            defaultValue={user?.name || ""}
            value={fullName}
            onChangeText={setFullName}
            icon="user"
          />
        </View>
        <View className="gap-1">
          <Text className="text-base text-gray-400">Username</Text>
          <InputField
            placeholder="Enter your username"
            defaultValue={user?.username || ""}
            value={username}
            onChangeText={setUsername}
            icon="user"
          />
        </View>
        <View className="gap-1">
          <Text className="text-base text-gray-400">E-mail Address</Text>
          <InputField
            placeholder="Enter your email"
            defaultValue={user?.email || ""}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            icon="mail"
          />
        </View>
        <TouchableOpacity
          onPress={handleUpdate}
          disabled={
            isPending || fullName === "" || username === "" || email === ""
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
