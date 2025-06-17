import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../Input";
import { useMutation } from "@tanstack/react-query";
import { verifyEmail } from "@/service/auth.service";

interface EmailViewProps {
  handleStep: () => void;
  email: string;
  setEmail: any;
}

const EmailView = ({ handleStep, email, setEmail }: EmailViewProps) => {
  const { mutate, isPending, error } = useMutation({
    mutationFn: verifyEmail,
    onSuccess: ({ data }) => {
      handleStep();
    },
  });

  const handleEmailVerify = () => {
    if (email === "") return;
    mutate({ email });
  };

  return (
    <SafeAreaView className="bg-white flex-1 justify-center p-8 gap-10">
      <View className="gap-2">
        <Text className="text-4xl font-bold">Forgot Password</Text>
        <Text className="text-lg font-medium text-gray-500">
          Enter your email address and we will send you a code to reset your
          password.
        </Text>
      </View>
      <View className="gap-4">
        {error && (
          <Text className="text-red-500">
            {error.message || "Something went wrong"}
          </Text>
        )}
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
        <View className="mt-6">
          <TouchableOpacity
            onPress={handleEmailVerify}
            disabled={isPending || email === ""}
            className="bg-[#08A045] disabled:bg-gray-400 items-center px-6 py-4 rounded-full w-full"
          >
            <Text className="text-white font-semibold">
              {isPending ? "Sending code..." : "Send code"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmailView;
