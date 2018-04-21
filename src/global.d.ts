type Dispatch = IAction['dispatch'];

interface IAction {
  action: { type: string; payload?: any };
  dispatch: (action: IAction['action']) => void;
}

export interface IReturnTypes {
  void: () => void;
  boolean: () => boolean;
  string: () => string;
  number: () => number;
  array: () => any[];
}

export interface IProps {
  currentUser: {
    portrait: string;
    nickname: string;
    sex: number;
    tel: number | string;
    email: string;
  };
  dispatch: Dispatch;
}
