import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

const Tablayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "home",
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="home" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="calender"
        options={{
          tabBarLabel: "calender",
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
          tabBarIcon: ({ focused }) => (
            <FontAwesome6 name="calendar-alt" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "search",
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
          tabBarIcon: ({ focused }) => (
            <Ionicons name="search-outline" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="location"
        options={{
          tabBarLabel: "location",
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
          tabBarIcon: ({ focused }) => (
            <Ionicons name="location-sharp" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="group"
        options={{
          tabBarLabel: "group",
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="group" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};
export default Tablayout;
