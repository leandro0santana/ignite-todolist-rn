import { TouchableOpacity, View, Text } from 'react-native'

import { styles } from './styles'

import CheckIcon from '../../assets/check.svg'
import DumpIcon from '../../assets/dump.svg'

interface Task {
  id: number
  description: string
  status: 'pending' | 'concluded'
}

interface TaskProps {
  task: Task
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

export function Task({ task, onToggle, onRemove }: TaskProps) {
  return (
    <View
      style={
        task.status === 'pending' ? styles.taskPending : styles.taskConclude
      }
    >
      <TouchableOpacity onPress={() => onToggle(task.id)}>
        <View style={task.status === 'pending' ? styles.noCheck : styles.check}>
          {task.status === 'concluded' && <CheckIcon />}
        </View>
      </TouchableOpacity>

      <Text
        style={
          task.status === 'pending'
            ? styles.taskDescription
            : styles.taskDescriptionConclude
        }
      >
        {task.description}
      </Text>

      <TouchableOpacity
        style={styles.buttonRemove}
        onPress={() => onRemove(task.id)}
      >
        <DumpIcon />
      </TouchableOpacity>
    </View>
  )
}
