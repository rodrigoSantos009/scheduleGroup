import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Data = [
  {
    artist: "Isaías Saad",
    totalSongs: 1,
  },
  {
    artist: "MORADA",
    totalSongs: 1,
  },
  {
    artist: "Laura Souguellis",
    totalSongs: 1,
  },
];

type ArtistProps = {
  artist: string;
  totalSongs: number;
}[];

export function Artist() {
  const [artists, setArtists] = useState<ArtistProps>(Data);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 10,
        backgroundColor: "#121212",
      }}
    >
      {artists.length > 0 ? (
        <View style={{ gap: 15 }}>
          {artists.map((item, index) => (
            <TouchableOpacity key={index}>
              <View key={index}>
                <View
                  key={index}
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
                    <Text style={{ fontSize: 20, color: "#8ab2ff" }}>
                      {item.artist}
                    </Text>
                    <Text style={{ color: "#6c6f74" }}>
                      {item.totalSongs} Música
                    </Text>
                  </View>
                  <View style={{}}>
                    <Feather color="#6c6f74" size={25} name="arrow-right" />
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
        style={{
          width: 45,
          height: 45,
          backgroundColor: "#1eb2a6",
          position: "absolute",
          bottom: 20,
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
