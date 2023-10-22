import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 24,
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    gap: 6,
    marginTop: -52,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 8,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  taskTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  taskCreateText: {
    fontSize: 14,
    color: '#4EA8DE',
    fontWeight: 'bold',
  },

  taskConcludeText: {
    fontSize: 14,
    color: '#8284FA',
    fontWeight: 'bold',
  },

  taskTotalInfo: {
    width: 25,
    height: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
    borderRadius: 50,
  },

  taskTotalText: {
    fontSize: 12,
    color: '#D9D9D9',
  },
})
