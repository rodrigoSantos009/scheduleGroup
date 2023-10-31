import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Next } from "../components/Next";
import { Prev } from "../components/Prev";

const Tab = createMaterialTopTabNavigator();

export function Schedules() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#121212" },
        tabBarLabelStyle: {
          color: "#E2E2E2",
          fontWeight: "700",
        },
      }}
    >
      <Tab.Screen
        name="Próximos"
        component={Next}
        options={{
          tabBarActiveTintColor: "red",
        }}
      />
      <Tab.Screen
        name="Anteriores"
        component={Prev}
        options={{
          tabBarActiveTintColor: "red",
        }}
      />
    </Tab.Navigator>
  );
}
