import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { SongStackType } from '../../routes/createMusicStack.routes';

export function CreateSong() {
  const navigate = useNavigation<SongStackType>();
  const [songTitle, setSongTitle] = useState<string>('');

  async function searchSongs(title: string) {
    navigate.navigate("AddSong", {title: title});
  } 

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonCreate}>
        <Feather name="plus" size={25} color="#E1E1E1" />
        <Text style={{ color: "#E1E1E1", fontWeight: "bold", fontSize: 15 }}>
          Cadastrar manualmente
        </Text>
        <AntDesign name="right" size={25} color="#E1E1E1" />
      </TouchableOpacity>

      <Text
        style={{
          color: "#E1E1E1",
          textAlign: "left",
          fontSize: 18,
          fontWeight: "700",
        }}
      >
        Buscar
      </Text>

      <View
        style={{
          marginTop: 15,
          backgroundColor: "#1E1E1E",
          width: 320,
          height: 120,
          padding: 8,
          paddingVertical: 10,
          borderRadius: 15,
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "#E1E1E1", fontWeight: "500", marginBottom: 8 }}>
          Pesquise aqui o louvor para adicionar ao repertório.
        </Text>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <TextInput
            value={songTitle}
            onChangeText={(text) => setSongTitle(text)}
            placeholder="Pesquisar"
            placeholderTextColor="#E1E1E1"
            style={{
              width: 260,
              borderColor: "#E1E1E1",
              borderWidth: 1,
              borderRadius: 15,
              paddingHorizontal: 15,
              height: 40,
              color: "#E1E1E1",
            }}
          ></TextInput>
          <TouchableOpacity
            onPress={() => searchSongs(songTitle)}
            style={{
              backgroundColor: "#BB86FC",
              borderRadius: 25,
              width: 35,
              height: 35,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="search1" size={20} color="#E1E1E1" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    flex: 1,
    paddingHorizontal: 34
  },
  buttonCreate: {
    backgroundColor: "#1E1E1E",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 320,
    height: 65,
    marginTop: 10,
    marginBottom: 40,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 15,
    alignSelf: 'center'
  },
});