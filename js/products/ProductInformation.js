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

  const width = 1.0;
  return (
    <ViroFlexView
      key={product_id}
      width={width}
      height={1.5}
      rotation={[-90, 0, 0]}
      style={styles.informationPane}
      backgroundColor="rgba(50,50,50,0.8)"
    >
      <ViroText
        text={title}
        width={width}
        textLineBreakMode="Justify"
        textClipMode="ClipToBounds"
        color="white"
        textAlign="center"
        style={styles.title}
      />
      <ViroText
        text={description}
        width={width}
        color="white"
        textLineBreakMode="Justify"
        textClipMode="ClipToBounds"
        position={[0, -0.4, 0]}
        style={styles.testText}
      />
      <ViroText
        text={`Preis: ${price.toString()}€`}
        width={width}
        color="white"
        position={[0, -0.75, 0]}
        style={styles.testText}
      />
      <ViroText
        text={`Herkunft: ${origin}`}
        width={width}
        color="white"
        position={[0, -0.85, 0]}
        style={styles.testText}
      />
      <ViroText
        text={`Hinweise: ${warnings}`}
        width={width}
        color="white"
        textLineBreakMode="Justify"
        textClipMode="ClipToBounds"
        position={[0, -1, 0]}
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
    fontSize: 14,
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
