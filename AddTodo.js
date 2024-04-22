import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Add a new todo"
        onChangeText={setText}
        value={text}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};

export default AddTodo;
