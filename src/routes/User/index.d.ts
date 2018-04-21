import * as React from 'react';
import { Props } from '../../global';

type Dispatch = Props['dispatch'];

export interface ILoginProps {
  dispatch: Dispatch;
  login: any;
  submitting: boolean;
}
export interface ILoginStates {
  type: string;
  autoLogin: boolean;
  mode: {
    isRegister: boolean;
    isMobile: boolean;
    isOther: boolean;
    isForget: boolean;
    isAuto: boolean;
  };
}

export interface ILoginClass {
  onTabChange: () => void;
  handleSubmit: (err: any, values: any) => void;
  changeAutoLogin: (event: any) => void;
  renderMessage: (content: string) => React.ReactNode;
}
