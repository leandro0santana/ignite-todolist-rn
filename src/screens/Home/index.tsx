import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native'
import { useState } from 'react'

import { Header } from '../../components/Header'
import { EmptyList } from '../../components/EmptyList'
import { Task } from '../../components/Task'

import { styles } from './styles'

import PlusIcon from '../../assets/plus.svg'

interface Task {
  id: number
  description: string
  status: 'pending' | 'concluded'
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskDescription, setTaskDescription] = useState('')
  const [taskId, setTaskId] = useState(0)
  const [taskConcluded, setTaskConcluded] = useState(0)

  function handleTaskAdd() {
    if (!taskDescription) {
      return Alert.alert(
        'Tarefa vazio',
        'Necessário informar uma tarefa para acionar a lista',
      )
    }

    const id = taskId + 1

    const task: Task = {
      id,
      description: taskDescription,
      status: 'pending',
    }

    setTasks((prevState) => [...prevState, task])
    setTaskDescription('')
    setTaskId(id)
  }

  function handleTaskRemove(id: number) {
    const tasksRemoved = tasks.filter((task) => task.id !== id)

    const tasksConcluded = tasksRemoved.filter(
      (task) => task.status === 'concluded',
    )

    setTasks(tasksRemoved)
    setTaskConcluded(tasksConcluded.length)
  }

  function handleTaskQuestionRemove(id: number) {
    Alert.alert('Remover', `Deseja remove a tarefa?`, [
      {
        text: 'Sim',
        onPress: () => handleTaskRemove(id),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  function handleTaskToggle(id: number) {
    const tasksWithChangeStatus = tasks.map((task) => {
      if (task.id === id) {
        if (task.status === 'concluded') {
          task.status = 'pending'
        } else {
          task.status = 'concluded'
        }
        return task
      } else {
        return task
      }
    })

    const tasksConcluded = tasksWithChangeStatus.filter(
      (task) => task.status === 'concluded',
    )

    setTaskConcluded(tasksConcluded.length)
    setTasks(tasksWithChangeStatus)
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTaskDescription}
            value={taskDescription}
          />

          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <PlusIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.taskInfo}>
          <View style={styles.taskTotal}>
            <Text style={styles.taskCreateText}>Criadas</Text>
            <View style={styles.taskTotalInfo}>
              <Text style={styles.taskTotalText}>{tasks.length}</Text>
            </View>
          </View>

          <View style={styles.taskTotal}>
            <Text style={styles.taskConcludeText}>Concluídas</Text>
            <View style={styles.taskTotalInfo}>
              <Text style={styles.taskTotalText}>{taskConcluded}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <Task
              task={item}
              onRemove={handleTaskQuestionRemove}
              onToggle={handleTaskToggle}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </>
  )
}
