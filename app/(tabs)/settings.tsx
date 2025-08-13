import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useAuthStore } from "../../state/auth.state";
import { useFocusEffect } from "expo-router";
import { getMe } from "../../service/auth.service";
import { useState } from "react";

export default function SettingScreen() {
  const { user, logout, token } = useAuthStore();

  const [profile, setProfile] = useState(user);

  if (!user) {
    router.replace("/login");
    return null;
  }

  useFocusEffect(() => {
    getMe(token as string).then((res) => {
      if (res.data) {
        setProfile(res.data);
      }
    });
  });

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="rounded-full items-center justify-center">
        <View className=" border h-28 w-28 items-center justify-center border-gray-300 rounded-full">
          {profile && (
            <Text className="text-3xl font-semibold">
              {`${profile.name.split(" ")[0][0]}${
                profile.name.split(" ").slice(-1)[0][0]
              }`}
            </Text>
          )}
        </View>
        <View className="mt-4 items-center gap-1">
          <View className="flex flex-row items-center mb-4">
            <Ionicons
              name={profile.rating > 0 ? "star" : "star-outline"}
              size={20}
              color={profile.rating > 0 ? "gold" : "gray"}
            />
            <Ionicons
              name={profile.rating > 1 ? "star" : "star-outline"}
              size={20}
              color={profile.rating > 1 ? "gold" : "gray"}
            />
            <Ionicons
              name={profile.rating > 2 ? "star" : "star-outline"}
              size={20}
              color={profile.rating > 2 ? "gold" : "gray"}
            />
            <Ionicons
              name={profile.rating > 3 ? "star" : "star-outline"}
              size={20}
              color={profile.rating > 3 ? "gold" : "gray"}
            />
            <Ionicons
              name={profile.rating > 4 ? "star" : "star-outline"}
              size={20}
              color={profile.rating > 4 ? "gold" : "gray"}
            />
          </View>

          <Text className="font-semibold text-2xl">{profile.name}</Text>
          <Text className="text-gray-500 text-lg">{profile.email}</Text>
        </View>
      </View>
      <View className="mt-6">
        <Text className="font-semibold text-2xl">Settings</Text>
        <View className="mt-4">
          <Text className="font-semibold text-lg">Account</Text>
          <TouchableOpacity
            onPress={() => {
              router.push("/manage_account");
            }}
            className="mt-2 border-b border-gray-300 py-4"
          >
            <Text className="text-gray-500 text-lg">Manage your account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push("/change_password");
            }}
            className="mt-2 border-b border-gray-300 py-4"
          >
            <Text className="text-gray-500 text-lg">Change password</Text>
          </TouchableOpacity>
        </View>
        <View className="mt-6">
          <Text className="font-semibold text-lg">Help</Text>
          <TouchableOpacity
            onPress={() => {
              router.push("/help");
            }}
            className="mt-2 border-b border-gray-300 py-4"
          >
            <Text className="text-gray-500 text-lg">Get help</Text>
          </TouchableOpacity>
        </View>
        <View className="mt-6">
          <TouchableOpacity
            onPress={() => {
              logout();
              router.replace("/login");
            }}
            className="mt-2 border-b border-gray-300 py-4 flex-row items-center gap-2"
          >
            <Feather name="log-out" size={24} color="gray" />
            <Text className="text-gray-500 text-lg">
              Logout from your account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
