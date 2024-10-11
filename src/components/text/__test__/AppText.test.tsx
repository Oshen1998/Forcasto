import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {FONT_FAMILIES} from '../../../themes/fonts';
import AppText from '../AppText';

describe('AppText Component', () => {
  it('renders correctly', () => {
    render(
      <AppText textAlign="center" testId="default-text">
        Default Text
      </AppText>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('should applies custom styles correctly', () => {
    const customStyle = {
      color: 'red',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    };

    const {getByTestId} = render(
      <AppText
        testId="custom-text"
        fontColor="red"
        fontSize={16}
        fontWeight="bold"
        textAlign="center">
        Custom Text
      </AppText>,
    );

    const textElement = getByTestId('custom-text');
    expect(textElement.props.style).toMatchObject(customStyle);
  });

  it('should renders multiple lines correctly', () => {
    const {getByTestId} = render(
      <AppText textAlign="center" testId="multiline-text" numberOfLines={3}>
        This is a long text that should span multiple lines
      </AppText>,
    );

    const textElement = getByTestId('multiline-text');
    expect(textElement.props.numberOfLines).toBe(3);
  });

  it('should applies custom font family correctly', () => {
    const {getByTestId} = render(
      <AppText
        textAlign="center"
        testId="custom-font"
        fontFamily={FONT_FAMILIES.Manrope.Bold}>
        Custom Font Text
      </AppText>,
    );

    const textElement = getByTestId('custom-font');
    expect(textElement.props.style.fontFamily).toBe(FONT_FAMILIES.Manrope.Bold);
  });

  it('should applies custom ellipsizeMode correctly', () => {
    const {getByTestId} = render(
      <AppText
        textAlign="center"
        testId="ellipsize-text"
        ellipsizeMode="middle">
        This text will be ellipsized in the middle if it's too long
      </AppText>,
    );

    const textElement = getByTestId('ellipsize-text');
    expect(textElement.props.ellipsizeMode).toBe('middle');
  });

  it('should applies custom style prop correctly', () => {
    const customStyle = {
      letterSpacing: 2,
      color: '#000000',
    };

    const {getByTestId} = render(
      <AppText
        textAlign="center"
        testId="custom-style-text"
        style={customStyle}>
        Custom Styled Text
      </AppText>,
    );

    const textElement = getByTestId('custom-style-text');
    expect(textElement.props.style).toMatchObject(customStyle);
  });
});
