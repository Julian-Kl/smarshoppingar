'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroFlexView
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroARImageMarker target={"targetOne"} >
          <ViroFlexView style={styles.flexView} position={[0, 0, 0]} rotation={[0, 90, 90]} height={.4} width={.7}>
            <ViroText text={this.state.text} rotation={[0, 0, -90]} position={[0, 0, -5]} width={4} height={.5}  style={styles.testText} />
          </ViroFlexView>
        </ViroARImageMarker>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Text"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

ViroARTrackingTargets.createTargets({
  "targetOne" : {
    source : require('./res/test_img_small.jpg'),
    orientation : "Up",
    physicalWidth : 0.4 // real world width in meters
  },
});

var styles = StyleSheet.create({
  testText: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#000000',
    textAlignVertical: 'center',
    textAlign: 'center',
    flex: 1,
  },
  flexView: {
    backgroundColor: "#ffffff66"
  },
});

module.exports = HelloWorldSceneAR;
