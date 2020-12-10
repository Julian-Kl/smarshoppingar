'use strict';

import React, { Component } from 'react';
import {
  ViroARImageMarker,
  ViroARScene,
  ViroARTrackingTargets,
  ViroFlexView,
} from 'react-viro';
import { ProductInformation } from './products/ProductInformation';
import { ProductsApiService } from './products/ProductsApiService';
import Images from './products/ProductImages';

const initialProduct = {
  title: 'Initializing AR...',
};

const productsApiService = new ProductsApiService();
class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      recognizedProduct: initialProduct,
      products: [],
    };
  }

  async componentDidMount() {
    console.log(MILK_TARGET);
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
          >
            <ViroFlexView
              position={[0, 0, 0]}
              rotation={[0, 90, 90]}
              height={0.4}
              width={0.7}
            >
              <ProductInformation
                title={product.title}
                category={product.category}
                description={product.description}
              />
            </ViroFlexView>
          </ViroARImageMarker>
        ))}
      </ViroARScene>
    );
  }
}

const getProductImageByProduct = (product) => {
  if (product.title.includes('K Classic')) {
    return Images[1];
  }
  if (product.title.includes('Landliebe')) {
    return Images[2];
  }
};

const buildProductTargets = (rawProducts) => {
  const productTargets = {};
  rawProducts.forEach((product) => {
    const productImage = getProductImageByProduct(product);
    productTargets[product.product_id.toString()] = {
      source: productImage,
      orientation: 'Up',
      physicalWidth: 0.4,
    };
  });
  return productTargets;
};

module.exports = HelloWorldSceneAR;
