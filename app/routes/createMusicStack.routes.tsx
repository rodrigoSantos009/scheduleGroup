import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateSong } from "../screens/CreateSong/CreateSong";
import { AddSongToList } from "../screens/CreateSong/AddSongToList";
import { SongDetails } from "../components/SongDetails";

export type StackNavigator = {
  CreateSong: {
    title: string;
  };
  AddSong: {
    title: string
  };
  SongDetails: {
    title: string,
    artist: string
  }
};

export type SongStackType = NativeStackNavigationProp<StackNavigator>;

const Stack = createNativeStackNavigator<StackNavigator>();

export function CreateMusicStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#121212" },
        headerTintColor: "#E1E1E1",
      }}
    >
      <Stack.Screen
        name="CreateSong"
        component={CreateSong}
        options={{ title: "Adicionar Música" }}
      />
      <Stack.Screen
        name="AddSong"
        component={AddSongToList}
        options={{ title: "Buscar" }}
      />
      <Stack.Screen 
        name="SongDetails" 
        component={SongDetails} 
        options={{ title: "Nova Música" }}
      />
    </Stack.Navigator>
  );
}