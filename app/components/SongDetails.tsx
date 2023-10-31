import { RouteProp, useRoute } from "@react-navigation/native";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { StackNavigator } from "../routes/createMusicStack.routes";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";

export function SongDetails() {
  const route = useRoute<RouteProp<StackNavigator, "SongDetails">>();
  const [title, setTitle] = useState<string>(route.params?.title);
  const [artist, setArtist] = useState<string>(route.params?.artist);

  return (
    <View style={styles.container}>
      <Text style={{ color: "#E1E1E1" }}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Colossenses e suas linhas de amor"
        textColor="white"
        value={title}
      />
      <Text style={{ color: "#E1E1E1" }}>Artista</Text>
      <TextInput
        style={styles.input}
        placeholder="fhop music"
        textColor="white"
        value={artist}
      />
      <Text style={{ color: "#E1E1E1" }}>Título</Text>
      <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={4}
        placeholder="Informações Gerais"
        textColor="white"
      />
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "#1E1E1E",
            padding: 15,
            borderRadius: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            borderColor: "#A1A1A1",
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            Inserir links
          </Text>
          <View style={{}}>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Feather size={18} color="#d4943a" name="user" />
              <Feather size={18} color="#4bac4d" name="list" />
            </View>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Feather size={18} color="#2298f4" name="music" />
              <Feather size={18} color="#f34136" name="video" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20
  },
  input: {
    backgroundColor: "#121212",
    borderColor: "#E1E1E1",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    color: "red"
  }
});