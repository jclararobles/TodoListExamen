import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Alert, Button } from 'react-native';
import TaskItem from '../Components/TaskItem';

export default function TaskListScreen({ navigation }) {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Comprar menjar', deadline: '2024-11-20', completed: false },
    { id: '2', title: 'Estudiar examen', deadline: '', completed: false },
  ]);

  const deleteTask = (id) => {
    Alert.alert('Eliminar Tasca', 'Segur que vols eliminar aquesta tasca?', [
      { text: 'Cancel·lar', style: 'cancel' },
      { text: 'OK', onPress: () => setTasks(tasks.filter(task => task.id !== id)) },
    ]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem 
            task={item} 
            onDelete={() => deleteTask(item.id)} 
            onToggleComplete={() => toggleComplete(item.id)} 
          />
        )}
      />
      <Button title="Nova Tasca" onPress={() => navigation.navigate('CreateTask', { setTasks })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
