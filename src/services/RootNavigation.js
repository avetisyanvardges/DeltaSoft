import * as React from 'react';
import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function back() {
  navigationRef.current?.goBack();
}

export function replace(name, params) {
  navigationRef?.dispatch(StackActions.replace(name, params));
}
