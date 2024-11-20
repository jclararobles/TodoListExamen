import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, onDelete, onToggleComplete }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={task.completed ? styles.completed : styles.title}>{task.title}</Text>
      <Text>{task.deadline}</Text>
      <TouchableOpacity onPress={onToggleComplete}>
        <Text>{task.completed ? 'Marcar Incompleta' : 'Marcar Completa'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <Text>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },
  completed: {
    fontSize: 18,
    textDecorationLine: 'line-through',
  },
});

export default TaskItem;
