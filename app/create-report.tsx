import { createIssue } from "@/service/issue.service";
import { useAuthStore } from "@/state/auth.state";
import { Feather } from "@expo/vector-icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Button,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as Location from "expo-location";

export default function CreateReport() {
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState<any | null>(null);
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  const { token } = useAuthStore();

  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: createIssue,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries();
      router.dismiss();
    },
  });

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ["images"],
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   if (!result.canceled) {
  //     setImage(result.assets[0]);
  //   }
  // };

  const takePhoto = async () => {
    // Request camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Camera permission is required to take a photo.");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const handleReport = async () => {
    if (
      description === "" ||
      city === "" ||
      !image ||
      !location?.coords.latitude ||
      !location?.coords.longitude
    ) {
      return;
    }

    const formData = new FormData();
    formData.append("description", description);
    formData.append("city", city);
    formData.append("latitude", location?.coords.latitude.toString());
    formData.append("longitude", location?.coords.longitude.toString());
    formData.append("photo", {
      uri: image.uri,
      type: image.mimeType,
      name: "photo." + image?.mimeType?.split("/")[1],
    } as unknown as File);

    mutate({ formData, token });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} className="flex-1">
        <ScrollView className="flex-1 p-4 bg-white">
          <View className="flex-row items-center justify-between py-4 border-b border-gray-300">
            <Text className="text-2xl font-semibold">Report a new issue</Text>
            <TouchableOpacity
              onPress={() => {
                router.dismiss();
              }}
            >
              <Feather name="x-circle" size={24} color="gray" />
            </TouchableOpacity>
          </View>
          <View className="flex-1">
            <View className="items-center mt-4 gap-4">
              {error && (
                <Text className="text-base text-red-500">
                  An error occurred while create a report.
                </Text>
              )}
              {image && (
                <Image
                  source={{ uri: image.uri }}
                  className="mt-4 w-full h-48 object-cover"
                />
              )}
              <Button
                title="Pick an image from camera roll"
                onPress={takePhoto}
              />
            </View>
            <View className="gap-1 mt-4">
              <Text className="text-base text-gray-400">Description</Text>
              <TextInput
                placeholder="Enter description"
                value={description}
                cursorColor="black"
                multiline
                numberOfLines={5}
                onChangeText={setDescription}
                style={{ textAlignVertical: "top", height: 100 }}
                className="border border-gray-300 rounded-lg px-4 py-2"
              />
            </View>
            <View className="gap-1 mt-4">
              <Text className="text-base text-gray-400">City</Text>
              <TextInput
                placeholder="Enter city"
                value={city}
                cursorColor="black"
                onChangeText={setCity}
                className="border border-gray-300 rounded-full px-4 py-2"
              />
            </View>
          </View>
          <View className="mt-6">
            <TouchableOpacity
              onPress={handleReport}
              disabled={isPending || !image || description == "" || city == ""}
              className="bg-[#08A045] items-center disabled:bg-gray-400 px-6 py-4 rounded-full w-full mt-6"
            >
              <Text className="text-white font-semibold ">
                {isPending ? "Loading..." : "Report"}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
