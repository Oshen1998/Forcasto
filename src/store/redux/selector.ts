import {RootState} from '../index';

export const countValueSelector = (state: RootState) => state.general.app.count;
