import * as React from 'react';
import { Props } from '../../global';

type Dispatch = Props['dispatch'];

export interface IWorkProps {
  dispatch: Dispatch;
  lists: any;
  loading: boolean;
}

export interface IWorkStates {}
