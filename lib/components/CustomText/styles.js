import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  textboxConatiner: {
    backgroundColor: colors.challengeBoxBankground,
    paddingHorizontal: 16,
    width: '80%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 40,
    color: colors.textBlackColor,
    margin: 20,
    borderRadius:10,
    overflow: 'hidden',
  },

  textConatiner: {
    fontSize: responsiveFontSize(5.5),
    fontFamily: 'AmaticSC-Bold',
    color: colors.textBlackColor,
  },

  lineContainer: {
    paddingTop:7,
    borderBottomWidth: 5,
    borderBottomColor: '#000',
    marginBottom: 20,
    width: '70%',
  },

  text: {
    fontSize: responsiveFontSize(4),
    fontFamily: 'AmaticSC-Bold',
    color: colors.textBlackColor,
    paddingLeft: 12,
  },
});
