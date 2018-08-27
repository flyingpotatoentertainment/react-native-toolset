//@flow
import React, { Component, Fragment } from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './styles';
import ImageButton from '../ImageButton';
import DropdownAlert from 'react-native-dropdownalert';

import { AlertContext } from '../../AlertContext';

import firebase from 'react-native-firebase';

firebase.admob().initialize('ca-app-pub-5482064059427673~6810596728');
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();



export default class Screen extends Component {
  constructor(props) {
    super(props);
  }
  showAlert = error => {
    if (error) {
      this.dropdown.alertWithType('error', 'Error', error);
    }
  };
  render() {
    const _styles = [styles.container];

    if (this.props.center) {
      _styles.push(styles.modeCenter);
    }
    if (this.props.stretch) {
      _styles.push(styles.modeStretch);
    }

    if (this.props.secondary) {
      _styles.push(styles.modeSecondary);
    } else {
      _styles.push(styles.modePrimary);
    }
    if (this.props.style) {
      _styles.push(this.props.style);
    }
    console.log(AlertContext);
    return (
      <Fragment>
        <AlertContext.Provider value={this.showAlert}>
          <SafeAreaView
            style={[
              styles.safeView,
              this.props.secondary ? styles.modeSecondary : styles.modePrimary,
            ]}
          >
            <View style={_styles}>
              {!!this.props.onBackPressed && (
                <ImageButton
                  icon="angle-left"
                  size={30}
                  zIndex={100}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    margin: 16,
                    marginTop: 32,
                  }}
                  onPress={() => {
                    this.props.onBackPressed();
                  }}
                />
              )}
              {this.props.children}
              <Banner
                unitId={'ca-app-pub-5482064059427673/1300508924'}
                size={'LARGE_BANNER'}
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                }}
                request={request.build()}
                onAdLoaded={() => {
                  console.log('Advert loaded');
                }}
              />
            </View>
          </SafeAreaView>
          <DropdownAlert
            ref={ref => (this.dropdown = ref)}
            onClose={data => {
              if (this.props.onClose) {
                this.props.onClose(data);
              }
            }}
          />
        </AlertContext.Provider>
      </Fragment>
    );
  }
}
