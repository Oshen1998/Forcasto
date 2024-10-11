import {MODAL_STACK} from './constants';

export interface ILoader {
  title: string;
  description?: string;
}

export interface ModalStackParams {
  [MODAL_STACK.LOADER]: {
    payload: ILoader;
  };
}
