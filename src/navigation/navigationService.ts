import {
  CommonActions,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

type params = {
  screen?: string;
  params?: any;
};

const navigate = (routeName: string, params?: params) => {
  if (navigationRef.current?.isReady()) {
    navigationRef.current?.navigate(routeName, params);
  }
};

const getCurrentRoute = () => navigationRef.current?.getCurrentRoute();

const goBack = () => {
  navigationRef.current?.goBack();
};

const goBackTo = (targetScreenName: string) => {
  const index = getIndexToPop(targetScreenName);
  if (index > 0) {
    pop(index, false);
  }
};

const fullReset = (routeName: string) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: routeName}],
    }),
  );
};

function pop(count: number, forceGoBack?: boolean) {
  navigationRef.current?.dispatch(StackActions.pop(count));
  if (forceGoBack) {
    navigationRef.current?.goBack();
  }
}

function getIndexToPop(targetScreenName: string) {
  const routes = navigationRef.current?.getRootState().routes;
  if (routes) {
    const currentIndex = routes.findIndex(
      route => route.name === getCurrentRoute()?.name,
    );
    const targetIndex = routes.findIndex(
      route => route.name === targetScreenName,
    );

    if (targetIndex === -1) {
      return -1;
    }

    return currentIndex - targetIndex;
  }
  return -1;
}

export default {
  pop,
  navigationRef,
  navigate,
  goBack,
  getCurrentRoute,
  fullReset,
  goBackTo,
};
