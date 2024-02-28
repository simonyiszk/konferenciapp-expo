import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ToggleButtonProps {
  isActive: boolean;
  onToggle: () => void;
}

const EventLocationFilter: React.FC<ToggleButtonProps> = ({ isActive, onToggle }) => {
  return (
    <TouchableOpacity style={[styles.button, isActive ? styles.active : styles.inactive]} onPress={onToggle}>
      <Text style={styles.buttonText}>{isActive ? 'ON' : 'OFF'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: 50,
  },
  active: {
    backgroundColor: 'green',
  },
  inactive: {
    backgroundColor: 'grey',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default EventLocationFilter;
