import React from 'react';
import {render, screen} from '@testing-library/react-native';
import AppLottie from '../AppLottie';

jest.mock('lottie-react-native', () => jest.fn());

describe('AppLottie Component', () => {
  it('should renders correctly', () => {
    const mockSource = 'mock-source';
    render(<AppLottie source={mockSource} height={100} width={100} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
