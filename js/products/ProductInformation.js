import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { ViroText, ViroFlexView } from 'react-viro';

export const ProductInformation = (props) => {
  const {
    product_id,
    title,
    description,
    price,
    origin,
    warnings,
  } = props.product;

  const titleLengthRatio = 0.01;
  const bodyLengthRatio = 0.008;

  const width = 1.5;
  const titleHeight = titleLengthRatio * title.length + 0.2;
  const descriptionHeight = bodyLengthRatio * description.length + 0.1;
  const priceHeight = 0.1;
  const originHeight = 0.15;

  const totalHeight =
    (titleHeight + descriptionHeight + priceHeight + originHeight) * 1.5;
  const descriptionY = -titleHeight;
  const priceY = -(titleHeight + descriptionHeight);
  const originY = -(titleHeight + descriptionHeight + priceHeight);
  const warningsY = -(
    titleHeight +
    descriptionHeight +
    priceHeight +
    originHeight
  );
  return (
    <ViroFlexView
      key={product_id}
      width={width}
      height={2.5}
      rotation={[-90, 0, 0]}
      style={styles.informationPane}
      backgroundColor="rgba(50,50,50,0.8)"
    >
      <ViroText
        text={`${title}`}
        height={0.6}
        width={width - 0.2}
        color="white"
        textAlign="center"
        position={[0, 1, 0]}
        style={styles.title}
      />
      <ViroText
        text={`${description}

Preis: ${price}
Herkunft: ${origin}
Hinweise: ${warnings}`}
        height={1.4}
        width={width - 0.2}
        color="white"
        style={styles.testText}
      />
    </ViroFlexView>
  );
};

const styles = StyleSheet.create({
  testText: {
    fontSize: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  informationPane: {
    flexDirection: 'column',
    padding: 0.5,
  },
});

ProductInformation.propTypes = {
  product: PropTypes.object,
};
