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

  const handleSendMessage = () => {
    if (input === "") return;
    mutate({
      formData: {
        message: input,
        type,
      },
      token,
    });
    addMessage();
  };

  const addMessage = () => {
    setMessages([
      ...messages,
      { id: messages.length + 1, type: "human", message: input },
    ]);

    setInput("");
  };
  return (
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
                onPress={() => {
                  setInput("How do I make a report?");
                  setType("question");
                  handleSendMessage();
                }}
                className="bg-gray-200 py-2 rounded-xl px-4 self-start"
              >
                <Text className="text-base font-medium text-black/70">
                  How do I make a report?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={isPending}
                onPress={() => {
                  setInput("Offer first aid?");
                  setType("ai");
                  handleSendMessage();
                }}
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
                onPress={handleSendMessage}
              >
                <Feather name="send" size={16} color="gray" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
