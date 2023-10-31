import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { supabase } from "../lib/supabase";
import { StackType } from "../screens/createSchedule/CreateSchedule";

import dayjs from "dayjs";

type SchedulesProps = {
  title: string;
  schedule_date: string;
  schedule_time: string;
}[];

export function Prev() {
  const [schedules, setSchedules] = useState<SchedulesProps>([]);
  const navigation = useNavigation<StackType>();
  const isFocused = useIsFocused();
  const today = dayjs();

  const getSchedules = async () => {
    try {
      const { data, error } = await supabase
        .from("Schedules")
        .select()
        .lt("schedule_date", today);
      if (error) throw error;
      setSchedules(data);
    } catch (error) {
    
    }
  };

  useEffect(() => {
    isFocused && getSchedules();
  }, [isFocused]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 10,
        backgroundColor: "#121212",
      }}
    >
      {schedules.length > 0 ? (
        <View style={{ gap: 4 }}>
          {schedules.map((item, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ScheduleDetails")}
              key={index}
              style={{
                backgroundColor: "#1E1E1E",
                borderRadius: 15,
                marginBottom: 10,
              }}
            >
              <View
                key={index}
                style={{
                  width: 330,
                  padding: 10,
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text style={{ color: "#017374" }}>1</Text>
                  <Text style={styles.text}>SET</Text>
                  <Text style={{ color: "#6c6f74" }}>SEX</Text>
                </View>
                <View style={{ width: 260 }}>
                  <Text style={{ fontSize: 20, color: "#E2E2E2" }}>
                    {item.title}
                  </Text>
                  <Text style={styles.text}>{item.schedule_date}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.text}>
                      <Feather color="#9e9fa4" name="moon" />
                      {item.schedule_time}
                    </Text>
                    <Text style={{ color: "#017374" }}>
                      <Feather name="user" />5
                    </Text>
                    <Text style={{ color: "#BB86FC" }}>
                      <Feather name="music" />4
                    </Text>
                    <Text style={styles.text}>
                      <Feather name="edit-2" />
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Text style={{ color: "#E1E1E1" }}>Lista vazia...</Text>
          <Text style={{ color: "#E1E1E1" }}>
            Para cadastrar uma escala, clique no botão
          </Text>
          <Text style={{ color: "#E1E1E1" }}>( + )</Text>
        </View>
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate("CreateSchedule")}
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#018786",
          position: "absolute",
          bottom: 60,
          right: 20,
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
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

const styles = StyleSheet.create({
  text: {
    color: "#9e9fa4",
  },
});
