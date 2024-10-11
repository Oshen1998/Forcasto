import {
  createModalStack,
  ModalOptions,
  ModalStackConfig,
} from 'react-native-modalfy';
import {slideFromBottomAnimation} from './modal.utils';
import {MODAL_STACK} from './constants';
import GeneralLoader from './GeneralLoader';

const modalConfig: ModalStackConfig = {
  [MODAL_STACK.LOADER]: {
    modal: GeneralLoader,
    backBehavior: 'pop',
  },
};

const defaultOptions: ModalOptions = {
  disableFlingGesture: true,
  position: 'bottom',
  transitionOptions: slideFromBottomAnimation,
};

export const ModalStack = createModalStack(modalConfig, defaultOptions);
