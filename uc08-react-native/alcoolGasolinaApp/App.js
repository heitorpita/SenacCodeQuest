import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native";

export default function App() {
  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularVantagem() {
    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    if (!precoAlcool || !precoGasolina) {
      Alert.alert("Erro", "Digite Valores Validos");
      return;
    }

    const razao = precoAlcool / precoGasolina;

    const combustivelVantajoso = razao <= 0.7 ? "Alcool" : "Gasolina";

    setResultado(`O melhor combustivel é: ${combustivelVantajoso}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Alcool ou Gasolina ?</Text>
      <Text style={styles.tituloCombustivel}>Alcool</Text>
      <TextInput
        style={styles.input}
        placeholder="Preço do alcool"
        value={alcool}
        onChangeText={setAlcool}
        keyboardType="numeric"
      />
      <Text style={styles.tituloCombustivel}>Gasolina</Text>
      <TextInput
        style={styles.input}
        placeholder="Preço da gasolina"
        value={gasolina}
        onChangeText={setGasolina}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.botao} onPress={calcularVantagem}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>{resultado}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDED",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 30,
    fontStyle: "bold",
    marginBottom: 20,
  },
  input: {
    fontSize: 10,
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#cccc",
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  botao: {
    backgroundColor: "#4F4789",
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 5,
  },
  textoBotao: {
    fontSize: 15,
    fontStyle: "bold",
    color: "white",
  },
  resultado: {
    marginTop: 30,
    fontSize: 25,
    fontStyle: "bold",
  },
  tituloCombustivel: {
    fontSize: 30,
    fontStyle: "bold",
    marginBottom: 20,
  },
});
