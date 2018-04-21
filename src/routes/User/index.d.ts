import * as React from 'react';

export interface ILoginProps {
  login: any;
  submitting: boolean;
  dispatch(params: { type: string; payload?: any }): void;
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
