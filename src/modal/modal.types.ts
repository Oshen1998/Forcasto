import {MODAL_STACK} from './constants';

export interface ILoader {
  description?: string;
}

export interface INotify {
  title: string;
  description?: string;
  animationKey?: string;
}

export interface ModalStackParams {
  [MODAL_STACK.LOADER]: {
    payload: ILoader;
  };
  [MODAL_STACK.NOTIFY]: {
    payload: INotify;
  };
}
