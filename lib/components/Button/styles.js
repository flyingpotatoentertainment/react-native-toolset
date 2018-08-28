import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';
export default StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 40,
    borderColor: '#000',
    borderWidth: 2,
    paddingHorizontal: 16,
    minWidth: 300,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
  },
  container3: {
    height: 50,
    borderRadius: 40,
    borderWidth: 2,
    paddingHorizontal: 16,
    minWidth: 200,
    borderColor: colors.textBlackColor,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
});
