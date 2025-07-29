import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";

interface MyPieChartProps {
  data: any[];
  pieData: any[];
  calcFn: (data: any[]) => void;
}

const MyPieChart = ({ data, pieData, calcFn }: MyPieChartProps) => {
  const total = data.length;

  calcFn(data);

  pieData.forEach((item) => {
    item.text = `${Math.round((item.value / total) * 100)}%`;
  });

  return (
    <View className="flex-row items-center gap-4">
      <PieChart
        radius={90}
        data={pieData}
        showText
        textSize={10}
        textColor="white"
      />
      <View className="flex-col gap-4">
        {pieData.map((item) => (
          <View key={item.category} className="flex-row items-center">
            <View
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <Text className="ml-2 text-xs">{item.categoryLabel}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MyPieChart;
