'use strict';

import React, { Component } from 'react';
import {
  ViroARImageMarker,
  ViroARScene,
  ViroARTrackingTargets,
} from 'react-viro';
import { ProductInformation } from './products/ProductInformation';
import { ProductsApiService } from './products/ProductsApiService';
import Images from './products/ProductImages';

const productsApiService = new ProductsApiService();
class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      recognizedTarget: null,
      products: [],
    };
  }

  async componentDidMount() {
    const products = await productsApiService.getAllProducts();
    this.setState({ products });
  }

  componentDidUpdate() {
    ViroARTrackingTargets.createTargets({
      ...buildProductTargets(this.state.products),
    });
  }

  render() {
    return (
      <ViroARScene>
        {this.state.products.map((product) => (
          <ViroARImageMarker
            key={product.product_id}
            target={product.product_id.toString()}
            onAnchorUpdated={() => {
              if (this.state.recognizedTarget !== product.product_id) {
                this.setState({ recognizedTarget: product.product_id });
              }
            }}
            visible={this.state.recognizedTarget === product.product_id}
          >
            <ProductInformation product={product} />
          </ViroARImageMarker>
        ))}
      </ViroARScene>
    );
  }
}

const buildProductTargets = (rawProducts) => {
  const productTargets = {};
  rawProducts.forEach((product) => {
    const productImage = Images[`product_id${product.product_id}`];
    productTargets[product.product_id.toString()] = {
      source: productImage,
      orientation: 'Up',
      physicalWidth: 1.1,
      type: 'Image',
    };
  });
  return productTargets;
};

module.exports = HelloWorldSceneAR;
