import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-web";

const frasesMotivacionais = [
  "🦁Seja um leão🦁🦁",
  "🔥Nunca desista dos seus sonhos🔥💪",
  "🚀Continue evoluindo todos os dias🚀📈",
  "🧠Conhecimento é poder🧠⚡",
  "🌍Explore o mundo e aprenda sempre🌍✨",
];

export default function App() {
  const [frases, setFrases] = useState();

  useEffect(() => {
      novaFrase();
      
  }, [])

  function novaFrase() {
    const indice = Math.floor(Math.random() * frasesMotivacionais.length);
    setFrases(frasesMotivacionais[indice]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.frases}>{frases}</Text>
      <TouchableOpacity style={styles.botaoFrase} onPress={novaFrase}>
        <Text style={styles.botaoText}>Nova frase</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 35,
    backgroundColor: "purple",
  },
  botaoFrase: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 10,
    width: 200,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  frases: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 50,
    fontWeight: "bold",
  },
  botaoText: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
  },
});
