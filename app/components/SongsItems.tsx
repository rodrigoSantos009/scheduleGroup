import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackType } from "../screens/createSchedule/CreateSchedule";

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
  title: string,
  artist: string,
  tone: string
}[]

export function SongsItems() {
  const navigation = useNavigation<StackType>();
  const [songs, setSongs] = useState<SongsProps>(Data);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 10,
        backgroundColor: "#121212",
      }}
    >
      {songs.length > 0 ? (
        <View style={{ gap: 15 }}>
          {songs.map((item, index) => (
            <TouchableOpacity key={index} >
              <View>
                <View
                  style={{
                    width: 350,
                    borderRadius: 10,
                    padding: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1,
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 20, color: "#1eb2a6" }}>
                      {item.title}
                    </Text>
                    <Text style={{ color: "#9e9fa4" }}>{item.artist}</Text>
                    <Text style={{ color: "#6c6f74" }}>Tom: {item.tone}</Text>
                  </View>
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
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <>
          <Text>Lista vazia...</Text>
          <Text>Para cadastrar uma escala, clique no botão</Text>
          <Text>( + )</Text>
        </>
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate("CreateMusic")}
        style={{
          width: 45,
          height: 45,
          backgroundColor: "#1eb2a6",
          position: "absolute",
          bottom: 60,
          right: 20,
          borderRadius: 15,
        }}
      >
        <Feather
          size={25}
          color={"white"}
          style={{ textAlign: "center", lineHeight: 43 }}
          name="plus"
        />
      </TouchableOpacity>
    </View>
  );
}
