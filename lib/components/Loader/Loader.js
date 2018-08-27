import LottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';
import anim from '../../assets/preloader.json';
import styles from './styles';

export default class Loader extends React.Component {
  componentDidMount() {
    this.animation.play();
  }
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <LottieView
          style={styles.anim}
          ref={animation => {
            this.animation = animation;
          }}
          source={anim}
        />
      </View>
    );
  }
}
