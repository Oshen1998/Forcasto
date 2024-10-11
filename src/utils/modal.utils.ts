import {modalfy} from 'react-native-modalfy';
import {MODAL_STACK} from '../modal/constants';
import {debounce} from 'lodash';

export const openBottomSheet = <T>(stack: MODAL_STACK, payload?: T) =>
  debounce(
    () => {
      const {openModal} = modalfy();
      openModal(stack, payload);
    },
    1000,
    {leading: true, trailing: false},
  );

export const hideAllBottomSheets = () =>
  debounce(
    () => {
      // To close all open bottomSheets
      const {closeAllModals} = modalfy();
      closeAllModals();
    },
    1000,
    {leading: true, trailing: false},
  );

export const hideBottomSheet = (stack: MODAL_STACK) =>
  debounce(
    () => {
      // To close all open bottomSheets
      const {closeModal} = modalfy();
      closeModal(stack);
    },
    1000,
    {leading: true, trailing: false},
  );

export const showGeneralErrorNotify = () =>
  debounce(
    () => {
      const {openModal} = modalfy();
      openModal(MODAL_STACK.NOTIFY, {
        payload: {
          title: 'Something Went Wrong!',
          description:
            "We're currently investigating the issue. Thank you for your patience as we work to resolve it.",
        },
      });
    },
    1000,
    {leading: true, trailing: false},
  );
