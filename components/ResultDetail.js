import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
export default function ResultDetail({ result }) {
  return (
    <View>
      <View style={{ height: 20 }}></View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={result.image_url ? { uri: result.image_url } : null}
        />
        <Text style={styles.name}>{result.name}</Text>
        <View style={styles.card}>
          <Text style={{ height: 11 }}></Text>
          <Text>{result.rating} Yıldızlı Restoran</Text>
          <Text>
            {result.review_count} Değerlendirme{" "}
            <AntDesign
              style={styles.asd}
              name="start"
              size={24}
              color="black"
            />
          </Text>
        </View>
      </View>
      <View style={{ height: 20 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  asd: {
    color: "#800000",
    fontSize: 14,
  },
  card: {
    textAlign: "center",
    alignItems: "center",
  },
  container: {
    marginLeft: 15,
    backgroundColor: "#E8E8E8",
    borderRadius: 10,
    padding: 20,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 8,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
