import React, {memo} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

interface CustomBlurCardProps extends ViewProps {
  borderRadius?: number;
  backgroundColor?: string;
}

const CustomBlurCard = ({
  children,
  style,
  borderRadius = 20,
  backgroundColor = 'rgba(255, 255, 255, 0.2)',
  ...props
}: CustomBlurCardProps) => {
  return (
    <View style={[styles.container, {borderRadius}, style]} {...props}>
      <View
        style={[StyleSheet.absoluteFill, {backgroundColor, borderRadius}]}
      />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  content: {
    padding: 20,
  },
});

export default memo(CustomBlurCard);
