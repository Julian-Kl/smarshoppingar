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

  const width = 1.0;
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
      height={totalHeight}
      rotation={[-90, 0, 0]}
      style={styles.informationPane}
      backgroundColor="rgba(50,50,50,0.8)"
    >
      <ViroText
        text={title}
        textLineBreakMode="Justify"
        textClipMode="ClipToBounds"
        color="white"
        textAlign="center"
        style={styles.title}
      />
      <ViroText
        text={description}
        color="white"
        textLineBreakMode="Justify"
        textClipMode="ClipToBounds"
        position={[0, descriptionY, 0]}
        style={styles.testText}
      />
      <ViroText
        text={`Preis: ${price.toString()}€`}
        color="white"
        position={[0, priceY, 0]}
        style={styles.testText}
      />
      <ViroText
        text={`Herkunft: ${origin}`}
        color="white"
        position={[0, originY, 0]}
        style={styles.testText}
      />
      <ViroText
        text={`Hinweise: ${warnings}`}
        color="white"
        textLineBreakMode="Justify"
        textClipMode="ClipToBounds"
        position={[0, warningsY, 0]}
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
