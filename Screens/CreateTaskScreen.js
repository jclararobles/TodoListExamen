import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CreateTask({ navigation, route }) {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { setTasks } = route.params; // Recibe setTasks desde la pantalla anterior

  const addTask = () => {
    if (!title.trim()) {
      Alert.alert('Error', 'El títol és obligatori.');
      return;
    }
    if (!deadline) {
      Alert.alert('Error', 'La data límit és obligatòria.');
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title,
      deadline,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]); // Actualiza la lista de tareas
    navigation.goBack(); // Vuelve a la pantalla anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Títol</Text>
      <TextInput
        style={styles.input}
        placeholder="Escriu el títol"
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>Data límit</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dateInput}>
          {deadline || 'Selecciona una data'}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          mode="date"
          value={new Date()}
          onChange={(event, date) => {
            setShowDatePicker(false);
            if (date) setDeadline(date.toISOString().split('T')[0]);
          }}
        />
      )}
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addText}>Afegir Tasca</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  dateInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addText: {
    color: '#fff',
    fontSize: 16,
  },
});
