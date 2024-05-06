import { Pressable, Text, StyleSheet } from 'react-native';

export function ButtonHome() {
  return (
    <Pressable style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{'Open profile'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'black',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: '50%',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 20,
  },
});
