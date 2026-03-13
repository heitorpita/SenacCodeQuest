import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularImc() {
    const pesoUsuario = parseFloat(peso);
    const alturaUsuario = parseFloat(altura);

    if (!pesoUsuario || !alturaUsuario) {
      Alert.alert("Erro", "Digite Valores Validos");
      return;
    }

    const imc = pesoUsuario / (alturaUsuario * alturaUsuario);

    if (imc < 18.5) {
      setResultado(`Você está abaixo do peso`);
    } else if (imc >= 18.5 && imc <= 25) {
      setResultado(`Você está no peso ideal!`);
    } else if (imc > 25 && imc <= 30) {
      setResultado(`Cuidado! Você está com sobrepeso!`);
    } else if (imc > 30 && imc <= 35) {
      setResultado(`Obesidade grau 1`);
    } else if (imc > 35 && imc <= 40) {
      setResultado(`Obesidade grau 2`);
    } else if (imc > 40) {
      setResultado(`Obesidade grau 3`);
    } else {
      setResultado("Verifique novamente");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcule Seu IMC</Text>
      <Text style={styles.tituloPeso}>Peso</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite Seu Peso"
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
      />
      <Text style={styles.tituloAltura}>Altura</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite Sua Altura"
        value={altura}
        onChangeText={setAltura}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.botao} onPress={calcularImc}>
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
    backgroundColor: "#e3f2fd",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
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
    backgroundColor: "#1565c0",
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 5,
  },
  textoBotao: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  resultado: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  tituloAltura: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  tituloPeso: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
