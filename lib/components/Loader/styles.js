import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  anim: {
    height:'80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Platform.OS === 'ios' ? '7%' : '0%',

  },
});
