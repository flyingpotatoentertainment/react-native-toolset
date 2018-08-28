import React from 'react';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../config/styles';

// import styles from './styles';

const ImageButton = (props = { color, icon, size, style, onPress }) => (
  <Touchable
    onPress={props.onPress}
    style={[
      props.style,
      { width: 30, height: 30, justifyContent: 'center', alignItems: 'center' },
    ]}
    background={Touchable.SelectableBackgroundBorderless()}
  >
    <Icon name={props.icon} size={props.size} color={colors.secondary} />
  </Touchable>
);

export default ImageButton;
