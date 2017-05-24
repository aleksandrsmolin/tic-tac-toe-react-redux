import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'Center-row': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'red' }]
  },
  'Left-row': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'green' }]
  },
  'Right-row': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'blue' }]
  },
  'All-rows': {
    'textAlign': 'center'
  }
});
