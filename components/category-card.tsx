import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

interface CategoryCardProps {
  title: string;
  url: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, url }) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={{
          uri: url,
        }}
        className="w-full h-32 overflow-hidden rounded-lg"
        resizeMode="cover"
        // style={{ borderRadius: 16 }}
      >
        <View className="flex-1 items-center justify-center bg-black/30">
          <Text className="text-white font-semibold text-xl">{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;
