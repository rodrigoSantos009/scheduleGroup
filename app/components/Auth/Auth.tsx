import React, { useState } from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { supabase } from "../../lib/supabase";
import { Button, Input } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import { Text } from "react-native";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          labelStyle={{ color: "#E2E2E2" }}
          leftIcon={{
            type: "font-awesome",
            name: "envelope",
            color: "#E2E2E2",
          }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          placeholderTextColor="#E1E1E1E1"
          autoCapitalize={"none"}
          inputStyle={{ color: "#E2E2E2" }}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          labelStyle={{ color: "#E2E2E2" }}
          leftIcon={{ type: "font-awesome", name: "lock", color: "#E2E2E2" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#E1E1E1E1"
          autoCapitalize={"none"}
          inputStyle={{ color: "#E2E2E2" }}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TouchableOpacity
          style={{ backgroundColor: "#23036A", padding: 10, borderRadius: 5 }}
          disabled={loading}
          onPress={() => signInWithEmail()}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#E2E2E2",
              fontWeight: "bold",
            }}
          >
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.verticallySpaced}>
        <TouchableOpacity
          style={{ backgroundColor: "#23036A", padding: 10, borderRadius: 5 }}
          disabled={loading}
          onPress={() => signUpWithEmail()}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#E2E2E2",
              fontWeight: "bold",
            }}
          >
            Registrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
    backgroundColor: "#1E1E1E",
    flex: 1
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});