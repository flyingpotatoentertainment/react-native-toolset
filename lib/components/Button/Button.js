import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';

type ButtonProps = {|
  title: string,
  locButtontitle: string,
  locImagePath: string,
  difficultyButtontitle: string,
  lightBoxTitle: string,
  style?: any,
  onPress?: () => void,
|};

const Button = (props: ButtonProps) => {
  const _styles = [];
  if (props.title) {
    _styles.push(styles.container);
  }
  if (
    props.locButtontitle ||
    props.difficultyButtontitle ||
    props.locImagePath
  ) {
    _styles.push(styles.container2);
  }
  if (props.lightBoxTitle) {
    _styles.push(styles.container3);
  }
  return (
    <TouchableOpacity style={_styles} onPress={props.onPress}>
      {getText(props)}
    </TouchableOpacity>
  );
};

const getText = (props: ButtonProps) => {
  if (props.title) {
    return <Text style={props.style}>{props.title}</Text>;
  }
  if (props.locButtontitle) {
    return <Text style={props.style}>{props.locButtontitle}</Text>;
  }
  if (props.difficultyButtontitle) {
    return <Text style={props.style}>{props.difficultyButtontitle}</Text>;
  }
  if (props.locImagePath) {
    return <Image style={props.style} source={props.locImagePath} />;
  }
  if (props.lightBoxTitle) {
    return <Text style={props.style}>{props.lightBoxTitle}</Text>;
  }
};

export default Button;
