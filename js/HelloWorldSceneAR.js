'use strict';

import React, { Component } from 'react';
import {
  ViroARImageMarker,
  ViroARScene,
  ViroARTrackingTargets,
  ViroFlexView,
} from 'react-viro';
import { ProductInformation } from './products/ProductInformation';
import ARImage from './res/k-classic-front.jpg';

const initialProduct = {
  text: 'Initializing AR...',
};

const products = [
  {
    id: '1',
    title: 'K Classic Milch',
    category: 'Milchprodukt',
    img: './res/k-classic-front.jpg',
  },
];

class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      product: initialProduct,
    };
  }

  render() {
    return (
      <ViroARScene>
        {products.map((product) => (
          <ViroARImageMarker key={product.id} target={product.id}>
            <ViroFlexView
              position={[0, 0, 0]}
              rotation={[0, 90, 90]}
              height={0.4}
              width={0.7}
            >
              <ProductInformation
                title={product.title}
                category={product.category}
              />
            </ViroFlexView>
          </ViroARImageMarker>
        ))}
      </ViroARScene>
    );
  }
}

const productTargets = {};

products.forEach((product) => {
  productTargets[product.id] = {
    source: ARImage,
    orientation: 'Up',
    physicalWidth: 0.4,
  };
});

ViroARTrackingTargets.createTargets({ ...productTargets });

module.exports = HelloWorldSceneAR;
