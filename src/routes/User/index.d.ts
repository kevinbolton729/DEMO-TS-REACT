/// <reference types="react" />
import * as React from 'react';

export interface LoginProps {
  login: any;
  submitting: boolean;
  dispatch(params: { type: string; payload?: any }): void;
}
