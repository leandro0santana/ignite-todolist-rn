import { View, Text } from "react-native";

import { styles } from "./styles";

import ClipboardIcon from '../../assets/clipboard.svg'

export function EmptyList() {
  return (
    <View style={styles.container}>
      <ClipboardIcon />

      <View>
        <Text style={styles.emptyTextBold}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.emptyText}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}