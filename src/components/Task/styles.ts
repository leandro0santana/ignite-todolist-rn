import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  taskPending: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    marginBottom: 20,
  },

  taskConclude: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#262626',
    borderRadius: 8,
    marginBottom: 20,
  },

  noCheck: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#1E6F9F',
    borderRadius: 9999,
  },

  check: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    backgroundColor: '#8284FA',
    borderRadius: 9999,
  },

  taskDescription: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 14,
    marginHorizontal: 12,
  },

  taskDescriptionConclude: {
    flex: 1,
    color: '#808080',
    fontSize: 14,
    marginHorizontal: 12,
    textDecorationLine: 'line-through',
  },

  buttonRemove: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
