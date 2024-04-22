// App.js
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Header, Button, Icon } from 'react-native-elements';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (title, dueDate) => {
    const newTodo = { id: Math.random(), title, dueDate, checked: false, important: false, subtasks: [] };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleDeleteCheckedTodos = () => {
    const updatedTodos = todos.filter(todo => !todo.checked);
    setTodos(updatedTodos);
  };

  const handleCheckTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
  };

  const handleMarkImportant = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, important: !todo.important } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: 'Todo List', style: { color: '#fff', textAlign: 'center' } }}
        rightComponent={
          <View style={styles.headerRight}>
            <Button
              type="clear"
              icon={<Icon name="delete" size={30} color="#fff" />}
              onPress={handleDeleteCheckedTodos}
            />
          </View>
        }
      />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <AddTodo onAdd={handleAddTodo} />
        <TodoList
          todos={todos}
          onCheck={handleCheckTodo}
          onDelete={handleDeleteTodo}
          onMarkImportant={handleMarkImportant}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;
