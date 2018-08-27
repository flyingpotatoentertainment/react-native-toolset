import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
  },
  modePrimary: {
    backgroundColor: colors.primaryBackground,
  },
  modeSecondary: {
    backgroundColor: colors.secondaryBackground,
  },
  modeCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modeStretch: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
