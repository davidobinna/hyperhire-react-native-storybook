import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

type FormProps = {
  name?: string; // Add this line to accept name as a prop
  onSubmit: (data: { name: string }) => void;
};

export const Form: React.FC<FormProps> = ({ name = '', onSubmit }) => {
  const [nameValue, setNameValue] = React.useState(name);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={nameValue}
        onChangeText={setNameValue}
      />
      <Button title="Submit" onPress={() => onSubmit({ name: nameValue })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});
