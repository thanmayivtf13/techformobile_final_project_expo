import React from 'react';
import { ListItem } from 'react-native-elements';

const TodoItem = ({ title }) => {
  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

export default TodoItem;
