import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

// Import the previously created form component
import AddItemScreen from "./AddItemScreen";

// Import the local image
import foodImageLocal from "../assets/mango.jpg";

const HomeScreen = () => {
  const routeData = useRoute();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // Fetch or load existing food posts from a database or API
    // For now, using dummy data for demonstration
    setFoods([
      {
        id: 1,
        foodImage: foodImageLocal, // Use the imported local image
        foodName: "Mango Food",
        location: "Kalutara",
        description: "fresh and good(5kg)",
        contact: "075 3257889",
        isFree: true,
        amount: "100",
      },
    ]);
  }, []);

  const handlePostFood = () => {
    // Check if there's new food data from AddItemScreen
    const newFood = routeData.params?.newFood;
    if (newFood) {
      // Implement logic to post a new food
      // For now, adding the new food to the existing list
      setFoods((prevFoods) => [...prevFoods, { id: Date.now(), ...newFood }]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Posts</Text>

      <FlatList
        data={foods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.foodCard}>
            <Image
              source={item.foodImage} // Use the local image directly
              style={styles.foodImage}
            />
            <Text style={styles.foodName}>{item.foodName}</Text>
            <Text>{item.location}</Text>
            <Text>{item.description}</Text>
            <Text>{item.contact}</Text>
            <Text>
              {item.isFree ? "Available for Free" : `Amount: ${item.amount}`}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.postButton}
        onPress={() => handlePostFood()}
      >
        <Text style={styles.postButtonText}>Post New Food</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F0F0F0",
  },
  foodImage: {
    width: "50%",
    height: 200, // Adjust height as per your design
    resizeMode: "cover", // or 'contain' or 'stretch' as per your design
    marginBottom: 8,
    borderRadius: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  foodCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  foodName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  postButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  postButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default HomeScreen;
