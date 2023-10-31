import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";

import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";

// selectUser => filtrar os usúarios que estão no agendamento === todos os usúarios

const Data = [
  {
    id: '1',
    name: "Bondade de Deus",
    artist: "Isaías Saad",
    tone: "D",
  },
  {
    id: '2',
    name: "Louvemos ao Senhor",
    artist: "MORADA",
    tone: "F#",
  },
  {
    id: '3',
    name: "Santo Espírito",
    artist: "Laura Souguellis",
    tone: "E",
  },
];

import { StackType } from "./CreateSchedule";
import { supabase } from "../../lib/supabase";

type MusicProps = {
  id: string;
  name: string;
  artist: string;
  tone: string
}[];

type ParamsProps = {
  scheduleDate: Date;
  scheduleHour: Date;
};

export function AddMusic() {
  const [isEnabled, setIsEnabled] = useState(false);
  const { navigate } = useNavigation<StackType>();

  const [musics, setMusics] = useState<MusicProps>(Data);
  const [membersGroup, setMembersGroup] = useState([]);
  const [selectedMusic, setSelectedMusic] = useState<string[]>([]);

  const toggleSwitch = async (id: string) => {
    let updatedMusicList: string[];
    if (selectedMusic.includes(id)) {
      updatedMusicList = selectedMusic.filter((musicId) => musicId !== id);
    } else {
      updatedMusicList = [...selectedMusic, id];
    }

    setSelectedMusic(updatedMusicList);
  };

  const saveMusics = async () => {
    try {
      const json = JSON.stringify(selectedMusic);
      await AsyncStorage.setItem("selectedMusics", json);
      navigate("Musicas");
    } catch (error) {
      console.log("Error => ", error);
    }
  };

  const fetchMusics = async () => {
    try {
      const { data, error } = await supabase.from("Musics").select("*");
      if (error) {
        throw error;
      }
      setMusics(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchSelectedMusic = async () => {
    try {
      const storedSelectedMusic = await AsyncStorage.getItem("selectedMusics");
      if (storedSelectedMusic !== null) {
        setSelectedMusic(JSON.parse(storedSelectedMusic));
      } 
    } catch (error) {
      console.error("Erro ao recuperar os usuários selecionados:", error);
    }
  };

  useEffect(() => {
    fetchSelectedMusic();
    //fetchMusics();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: "#121212",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          placeholder="Buscar por nome"
          placeholderTextColor="#E1E1E1"
          style={{
            color: "#E1E1E1",
            marginVertical: 10,
            backgroundColor: "#121212",
            paddingLeft: 40,
            paddingVertical: 8,
            borderWidth: 1,
            borderColor: "#E1E1E1",
            fontSize: 16,
            borderRadius: 10,
            width: 335
          }}
        />
        <MaterialIcons color="#E1E1E1" size={30} style={{ position: "absolute", marginLeft: 5 }} name="search" />
      </View>
      {musics.length > 0 ? (
        <View>
          {musics?.map((music, index) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
              key={index}
            >
              <View>
                <View
                  style={{
                    width: 300,
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
                      {music.name}
                    </Text>
                    <Text style={{ color: "#9e9fa4" }}>{music.artist}</Text>
                    <Text style={{ color: "#6c6f74" }}>Tom: {music.tone}</Text>
                  </View>
                  <View>
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
              <BouncyCheckbox
                size={30}
                fillColor="#1eb2a6"
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                isChecked={selectedMusic.includes(music.id)}
                onPress={() => toggleSwitch(music.id)}
              />
            </View>
          ))}
        </View>
      ) : (
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Feather size={30} name="music" />
          <Text>Para adicionar uma msica, clique no botão</Text>
          <Text>( + Incluir Música )</Text>
        </View>
      )}
      <TouchableOpacity
        onPress={saveMusics}
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
