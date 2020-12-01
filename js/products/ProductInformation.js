import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { ViroText } from 'react-viro';

export const ProductInformation = (props) => {
  return (
    <>
      <ViroText
        text={props.title}
        rotation={[0, 0, -90]}
        position={[0.5, 0, 0]}
        onDrag={(dragToPos) => {
          this.setState({
            test: { ...this.state.text, position: dragToPos },
          });
        }}
        width={4}
        height={2}
        style={styles.testText}
      />
      <ViroText
        text={props.category}
        rotation={[0, 0, -90]}
        position={[0.2, 0, 0]}
        onDrag={(dragToPos) => {
          this.setState({
            test: { ...this.state.text, position: dragToPos },
          });
        }}
        width={4}
        height={2}
        style={styles.testText}
      />
    </>
  );
};

const styles = StyleSheet.create({
  testText: {
    fontFamily: 'Arial',
    fontSize: 8,
    color: '#000000',
    textAlignVertical: 'center',
    textAlign: 'center',
    flex: 1,
  },
});

ProductInformation.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
};
