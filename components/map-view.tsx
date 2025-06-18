import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MyMapView = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const marker = {
    latitude,
    longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <View style={styles.container} className="my-6 rounded-xl">
      <MapView style={styles.map} initialRegion={marker}>
        <Marker coordinate={marker} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: 200,
  },
});

export default MyMapView;
