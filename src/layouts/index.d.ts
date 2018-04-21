import * as React from 'react';

type Element = JSX.Element[] | JSX.Element;

export interface IPageHeaderLayoutProps {
  children?: Element;
  wrapperClassName?: string;
  top?: Element;
  [propName: string]: any;
}
