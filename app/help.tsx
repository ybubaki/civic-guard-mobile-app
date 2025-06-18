import MessageItem from "@/components/message";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { useAuthStore } from "@/state/auth.state";
import { useMutation } from "@tanstack/react-query";
import { chat } from "@/service/chat.service";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function HelpScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [firstMessage, setFirstMessage] = useState<boolean>(false);
  const [type, setType] = useState<string>("");
  const [input, setInput] = useState("");

  const { token } = useAuthStore();
  const { mutate, isPending, error } = useMutation({
    mutationFn: chat,
    onSuccess: (data) => {
      !firstMessage && setFirstMessage(true);
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          type: data.data.type,
          message: data.data.message,
        },
      ]);
    },
  });

  const handleSendMessage = (customMessage?: string, customType?: string) => {
    const messageToSend = customMessage || input;
    const messageType = customType || type;

    if (!messageToSend) return;

    // Add user message immediately
    const newMessage = {
      id: messages.length + 1,
      type: "human" as const,
      message: messageToSend,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setFirstMessage(true);

    // Send to API
    mutate({
      formData: {
        message: messageToSend,
        type: messageType,
      },
      token,
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center p-4 justify-between">
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold">Help & Support</Text>
        <View />
      </View>
      <KeyboardAvoidingView className="flex-1">
        <View className="flex-1 bg-white">
          <ScrollView className="flex-1 pt-8 px-4">
            {messages.map((message) => (
              <MessageItem
                key={message.id}
                message={message.message}
                type={message.type}
              />
            ))}
            {isPending && (
              <MessageItem
                key={messages.length + 1}
                message="Thinking..."
                type="ai"
              />
            )}
          </ScrollView>
          <View className="flex-col gap-2 p-4">
            {!firstMessage && (
              <>
                <TouchableOpacity
                  disabled={isPending}
                  onPress={() =>
                    handleSendMessage("How do I make a report?", "question")
                  }
                  className="bg-gray-200 py-2 rounded-xl px-4 self-start"
                >
                  <Text className="text-base font-medium text-black/70">
                    How do I make a report?
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={isPending}
                  onPress={() => handleSendMessage("Offer first aid?", "ai")}
                  className="bg-gray-200 py-2 rounded-xl px-4 self-start"
                >
                  <Text className="text-base font-medium text-black/70">
                    Offer first aid?
                  </Text>
                </TouchableOpacity>
              </>
            )}
            {firstMessage && (
              <View className="bg-gray-200 rounded-full px-6 text-sm py-4 flex-row items-center gap-2">
                <TextInput
                  placeholder="message..."
                  cursorColor="black"
                  className="flex-1"
                  value={input}
                  onChangeText={setInput}
                />
                <TouchableOpacity
                  disabled={isPending}
                  className="p-1"
                  onPress={() => handleSendMessage()}
                >
                  <Feather name="send" size={16} color="gray" />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
