import { ScrollView, Text, View } from "react-native";
import MyBarChart from "../../components/charts/my-bar-chart";
import MyPieChart from "../../components/charts/my-pie-chart";
import useGetIssues from "../../hooks/useGetIssues";
import { useFocusEffect } from "expo-router";
import { useQueryClient } from "@tanstack/react-query";

export default function ChartScreen() {
  const queryClient = useQueryClient();
  const { data, isPending, error } = useGetIssues();

  if (isPending) return <Text>Loading issues...</Text>;
  if (error) return <Text>Error loading issues</Text>;

  const pieCategoryData = [
    {
      value: 0,
      color: "#177AD5",
      text: "54%",
      category: "Flood",
      categoryLabel: "Flood",
    },
    {
      value: 0,
      color: "#79D2DE",
      text: "30%",
      category: "Damaged Road",
      categoryLabel: "Damaged Road",
    },
    {
      value: 0,
      color: "#ED6665",
      text: "26%",
      category: "Homeless People",
      categoryLabel: "Homeless People",
    },
    {
      value: 0,
      color: "#f97316",
      text: "26%",
      category: "Broken Streetlights",
      categoryLabel: "Broken Streetlights",
    },
    {
      value: 0,
      color: "#eab308",
      text: "26%",
      category: "Overflowing Community Dump",
      categoryLabel: "Overflowing Commu...",
    },
  ];

  const pieStatusData = [
    {
      value: 0,
      color: "#ED6665",
      text: "54%",
      category: "open",
      categoryLabel: "Unsolved",
    },
    {
      value: 0,
      color: "#f59e0b",
      text: "30%",
      category: "in_progress",
      categoryLabel: "In Progress",
    },
    {
      value: 0,
      color: "#22c55e",
      text: "26%",
      category: "closed",
      categoryLabel: "Solved",
    },
  ];

  const processCategoryData = (data: any[]) => {
    data.forEach((item: any) => {
      const category = pieCategoryData.find(
        (c) => c.category.toLowerCase() === item.category.toLowerCase()
      );
      if (category) {
        category.value += 1;
      }
    });
  };

  const processStatusData = (data: any[]) => {
    data.forEach((item) => {
      if (item.status == "open") {
        pieStatusData[0].value += 1;
      } else if (item.status == "in_progress") {
        pieStatusData[1].value += 1;
      } else if (item.status == "closed") {
        pieStatusData[2].value += 1;
      }
    });
  };

  useFocusEffect(() => {
    queryClient.invalidateQueries();
  });

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="gap-4">
        <Text className="text-xl text-center font-semibold">
          Number of complaints
        </Text>
        {data?.data?.length > 0 && <MyBarChart data={data?.data || []} />}
      </View>
      {data?.data?.length > 0 && (
        <>
          <View className="gap-4 mt-12">
            <Text className="text-xl text-center font-semibold">
              Issues by Category
            </Text>
            <MyPieChart
              data={data?.data || []}
              pieData={pieCategoryData}
              calcFn={processCategoryData}
            />
          </View>

          <View className="gap-4 mt-12 mb-6">
            <Text className="text-xl text-center font-semibold">
              Status of complaints
            </Text>
            <MyPieChart
              data={data?.data || []}
              pieData={pieStatusData}
              calcFn={processStatusData}
            />
          </View>
        </>
      )}
      {data?.data?.length === 0 && (
        <Text className="text-center mt-12">No data available</Text>
      )}
    </ScrollView>
  );
}
