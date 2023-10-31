import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TabRoutes } from "./tab.routes";
import { CreateSchedule, StackType } from "../screens/createSchedule/CreateSchedule";
import { ScheduleDetails } from "../components/ScheduleDetails";
import { CreateMusicStack } from "./createMusicStack.routes";
import { CreateScheduleStack } from "./createScheduleStack.routes";
import { Button, Icon } from "react-native-elements";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export function StackRoutes() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation<StackType>();

  const clearAsyncStorage = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Schedules");
  };
  const backAction = async () => {
    Alert.alert("Atenção", "Deseja cancelar?", [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel",
      },
      { text: "Sim", onPress: clearAsyncStorage },
    ]);
    return true;
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#121212" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="home"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateSchedule"
        component={CreateScheduleStack}
        options={{
          headerShown: false,
          headerLeft: () => (
            <Button
              buttonStyle={{ backgroundColor: "transparent" }}
              onPress={backAction}
              icon={<Icon name="arrow-back" color="#E1E1E1" />}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CreateMusic"
        component={CreateMusicStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ScheduleDetails"
        component={ScheduleDetails}
        options={{ title: "Escala" }}
      />
    </Stack.Navigator>
  );
}