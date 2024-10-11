import {
  createModalStack,
  ModalOptions,
  ModalStackConfig,
} from 'react-native-modalfy';
import {slideFromBottomAnimation} from './modal.utils';
import {MODAL_STACK} from './constants';
import GeneralLoader from './GeneralLoader';
import Notify from './Notify';

const modalConfig: ModalStackConfig = {
  [MODAL_STACK.LOADER]: {
    modal: GeneralLoader,
    backBehavior: 'none',
  },
  [MODAL_STACK.NOTIFY]: {
    modal: Notify,
    backBehavior: 'pop',
  },
};

const defaultOptions: ModalOptions = {
  disableFlingGesture: true,
  position: 'bottom',
  transitionOptions: slideFromBottomAnimation,
};

export const ModalStack = createModalStack(modalConfig, defaultOptions);
