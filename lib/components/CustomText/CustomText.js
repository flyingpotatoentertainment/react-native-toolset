import React from 'react';
import { Text,View } from 'react-native';
import styles from './styles';

const CustomText = ({ headerTitle, title, addChallengeTitle }) => {
  const _styles = [];

  if (headerTitle || title || addChallengeTitle) {
    if (headerTitle) {
      title = headerTitle;
      _styles.push(styles.textConatiner);
    } else if (addChallengeTitle) {
      title = addChallengeTitle;
      _styles.push(styles.text);
    } else {
      _styles.push(styles.textboxConatiner);
    }
    return <Text style={_styles}>{title}</Text>;
  } else {
    _styles.push(styles.lineContainer);
      return <View style={_styles}></View>;
  }
};

export default CustomText;
