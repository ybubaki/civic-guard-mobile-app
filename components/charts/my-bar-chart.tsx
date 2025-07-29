import { View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

interface MyBarChartProps {
  data: any[];
}

const MyBarChart = ({ data }: MyBarChartProps) => {
  const chartData = [
    { value: 0, label: "Flo", category: "Flood" },
    { value: 0, label: "Dam", category: "Damaged Road" },
    { value: 0, label: "Hom", category: "Homeless People" },
    { value: 0, label: "Bro", category: "Broken Streetlights" },
    { value: 0, label: "Over", category: "Overflowing Community Dump" },
  ];

  data.forEach((item) => {
    const category = chartData.find(
      (c) => c.category.toLowerCase() === item.category.toLowerCase()
    );
    if (category) {
      category.value += 1;
    }
  });

  return (
    <View className="flex-1">
      <BarChart
        noOfSections={4}
        yAxisThickness={0}
        xAxisThickness={0}
        barBorderRadius={10}
        dashGap={10}
        frontColor={"#08A045"}
        data={chartData}
      />
    </View>
  );
};

export default MyBarChart;
