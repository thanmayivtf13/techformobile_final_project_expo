// TodoList.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

const TodoList = ({ todos, onCheck, onDelete, onMarkImportant }) => {
  return (
    <View style={styles.container}>
      {todos.map(todo => (
        <View key={todo.id} style={styles.todoItem}>
          <TouchableOpacity onPress={() => onCheck(todo.id)}>
            <CheckBox
              checked={todo.checked}
              onPress={() => onCheck(todo.id)}
              containerStyle={styles.checkboxContainer}
            />
          </TouchableOpacity>
          <Text style={[styles.todoText, todo.important && styles.important]}>
            {todo.title}
          </Text>
          <Button
            title="Mark Important"
            onPress={() => onMarkImportant(todo.id)}
            buttonStyle={styles.markImportantButton}
          />
          <Button
            title="Delete"
            onPress={() => onDelete(todo.id)}
            buttonStyle={styles.deleteButton}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  checkboxContainer: {
    marginRight: 10,
  },
  todoText: {
    flex: 1,
    fontSize: 18,
  },
  important: {
    fontWeight: 'bold',
    color: 'red',
  },
  markImportantButton: {
    backgroundColor: 'orange',
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
  },
});

export default TodoList;
