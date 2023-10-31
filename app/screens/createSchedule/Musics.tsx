import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackType } from "./CreateSchedule";

const Data = [
  {
    title: "Bondade de Deus",
    artist: "Isaías Saad",
    tone: "D",
  },
  {
    title: "Louvemos ao Senhor",
    artist: "MORADA",
    tone: "F#",
  },
  {
    title: "Santo Espírito",
    artist: "Laura Souguellis",
    tone: "E",
  },
];

type SongsProps = {
  title: string;
  artist: string;
  tone: string;
}[];



export function Musics() {
  const { navigate } = useNavigation<StackType>();
  const [songs, setSongs] = useState<SongsProps>(Data);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: "#121212",
      }}
    >
      <View>
        <TouchableOpacity
          onPress={() => navigate("AddMusic")}
          style={{
            width: 200,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#018786",
            padding: 10,
            borderRadius: 20,
            marginBottom: 25,
          }}
        >
          <MaterialIcons size={20} color="white" name="add" />
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Incluir Músicas
          </Text>
        </TouchableOpacity>
      </View>
      {songs.length > 0 ? (
        <View style={{ justifyContent: "center" }}>
          {songs.map((item, index) => (
            <View
              key={index}
              style={{
                paddingHorizontal: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: 80,
                backgroundColor: "#1E1E1E",
                marginBottom: 10,
                borderRadius: 10
              }}
            >
              <MaterialIcons size={30} name="menu" color="#018786" />
              <View style={{ width: 200 }}>
                <Text style={{ color: "#E1E1E1", fontSize: 18 }}>{item.title}</Text>
                <Text style={{ color: "#E1E1E1", fontSize: 14 }}>{item.artist}</Text>
              </View>
              <MaterialIcons size={30} name="delete" color="#B00020" />
            </View>
          ))}
        </View>
      ) : (
        <>
          <Text>
            <Feather name="music" />
          </Text>
          <Text>Lista vazia...</Text>
          <Text>Para cadastrar uma escala, clique no botão</Text>
          <Text>( + )</Text>
        </>
      )}
    </View>
  );
}
