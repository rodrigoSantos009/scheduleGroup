import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateSchedule, StackType } from "../screens/createSchedule/CreateSchedule";
import { Schedules } from "../screens/Schedules";
import { AddMember } from "../screens/createSchedule/AddMember";
import { AddMusic } from "../screens/createSchedule/AddMusic";
import { Button, Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

export function CreateScheduleStack() {
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
        headerTintColor: "#E1E1E1",
      }}
    >
      <Stack.Screen
        name="Create"
        component={CreateSchedule}
        options={{
          title: "Nova Escala",
          headerLeft: () => (
            <Button
              buttonStyle={{ backgroundColor: "transparent" }}
              onPress={backAction}
              icon={<Icon name="arrow-back" color="#E1E1E1" />}
            />
          ),
        }}
      />
      <Stack.Screen name="AddMember" component={AddMember} options={{ title: "Membros" }} />
      <Stack.Screen name="AddMusic" component={AddMusic} options={{ title: "Músicas" }} />
    </Stack.Navigator>
  );
}
