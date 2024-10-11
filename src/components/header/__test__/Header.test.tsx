import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import Header from '../Header';
import {openBottomSheet} from '../../../utils/modal.utils';
import {AppActions} from '../../../store/redux/slice';
import {useAppDispatch, useAppSelector} from '../../../hooks/useRedux';
import {MODAL_STACK} from '../../../modal/constants';

// Those mocks should be inside of mock file (much better)
jest.mock('../../../hooks/useRedux.ts');

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn().mockReturnValue({top: 0, bottom: 0}),
}));

jest.mock('../../../utils/modal.utils.ts', () => ({
  openBottomSheet: jest.fn(),
}));

jest.mock('../../../store/redux/selector', () => ({
  currentWeatherInfoSelector: jest.fn().mockReturnValue({
    name: 'Colombo',
    sys: {country: 'LK'},
  }),
  appColorSelector: jest.fn().mockReturnValue({
    fontColor: '#000000',
    backgroundColor: '#C5E8F5',
  }),
}));

jest.mock('../../../themes/images', () => ({
  images: {
    icons: {
      location: 'mock-location-icon',
      chevron: 'mock-chevron-icon',
      reload: 'mock-reload-icon',
    },
  },
}));

describe('Header Component', () => {
  const dispatchMock = jest.fn();
  beforeEach(() => {
    (useAppDispatch as unknown as jest.Mock).mockReturnValue(dispatchMock);
    (useAppSelector as unknown as jest.Mock).mockReturnValue({
      name: 'Colombo',
      sys: {country: 'LK'},
    });
    jest.clearAllMocks();
  });

  it('should renders correctly', () => {
    render(<Header colors={{backgroundColor: '#000', fontColor: '#0ff'}} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('should renders location and reload buttons correctly', () => {
    const {getByText, getByTestId} = render(
      <Header colors={{backgroundColor: '#000', fontColor: '#0ff'}} />,
    );

    // Check if location button displays city name and country
    expect(getByText('Colombo (LK)')).toBeTruthy();

    // Check if the reload button exists
    expect(getByTestId('reload-button')).toBeTruthy();
  });

  it('should open the bottom sheet when location is pressed', () => {
    const {getByTestId} = render(
      <Header colors={{backgroundColor: '#000', fontColor: '#0ff'}} />,
    );

    const locationButton = getByTestId('location-button');
    fireEvent.press(locationButton);

    expect(openBottomSheet).toHaveBeenCalledWith(MODAL_STACK.NOTIFY, {
      payload: {
        title: 'Coming Soon!',
        animationKey: 'MAINTENANCE',
        description:
          "Thank you for your interest! Our app is in development, and we're excited to bring you an amazing experience soon. Stay tuned for the official release!",
      },
    });
  });

  it('should dispatch the reload action when reload button is pressed', () => {
    const {getByTestId} = render(
      <Header colors={{backgroundColor: '#000', fontColor: '#0ff'}} />,
    );

    const reloadButton = getByTestId('reload-button');
    fireEvent.press(reloadButton);

    expect(dispatchMock).toHaveBeenCalledWith(
      AppActions.reloadCurrentWeatherData(),
    );
  });
});
