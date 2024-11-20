import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateTask from './TodoList/screens/CreateTask'; // Ajustar la ruta
import TaskList from './TodoList/screens/TaskList';   // Ajustar la ruta

const Stack = createStackNavigator();

export default function App() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Tasca 1', deadline: '2024-12-01', completed: false },
    { id: '2', title: 'Tasca 2', deadline: '2024-12-05', completed: true },
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskList">
        <Stack.Screen name="TaskList">
          {(props) => <TaskList {...props} tasks={tasks} setTasks={setTasks} />}
        </Stack.Screen>
        <Stack.Screen name="CreateTask">
          {(props) => <CreateTask {...props} setTasks={setTasks} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
