import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);

  const capacidadeMaxima = 5;
  let mensagem = "";

  if (contador === capacidadeMaxima) {
    mensagem = "Capacidade Máxima Atingida";
  }

  function incrementar() {
    if (contador < capacidadeMaxima) {
      setContador(contador + 1);
    }
  }

  function decrementar() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  function zerar() {
    setContador(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>

      <Text style={styles.contador}>{contador}</Text>
      <Text  style={styles.mensagem}>{mensagem}</Text>

      <View style={styles.botoes}>
        <TouchableOpacity
          style={[styles.botao, styles.botaoMais]}
          onPress={incrementar}
        >
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, styles.botaoMenos]}
          onPress={decrementar}
        >
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.botao, styles.botaoZerar]}
        onPress={zerar}
      >
        <Text style={styles.textoBotao}>Zerar</Text>
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
    gap: 10,
  },

  mensagem: {
    fontSize: 25,
    fontWeight: "bold",
    color: "yellow",
    marginBottom: 30,
  },

  botoes: {
    flexDirection: "row",
    gap: 10,
  },

  botao: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 10,
  },

  botaoMais: {
    backgroundColor: "#2cce17",
    padding: 20,
    borderRadius: 10,
  },

  botaoMenos: {
    backgroundColor: "#FF2C2C",
    padding: 20,
    borderRadius: 10,
  },

  botaoZerar: {
    backgroundColor: "#00A8FF",
    width: 120,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  textoBotao: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },

  contador: {
    fontSize: 70,
    fontWeight: "bold",
    marginBottom: 10,
  },

  titulo: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
