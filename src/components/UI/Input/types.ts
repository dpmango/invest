import { FC, ChangeEvent, InputHTMLAttributes, MutableRefObject } from 'react';

export type IconType = 'search';

export type OwnProps = {
  label?: string;
  inputRef?: MutableRefObject<Nullable<HTMLInputElement>>;
  icon?: IconType;
  allowClear?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type Props<T = HTMLInputElement> = FC<OwnProps & InputHTMLAttributes<T>>;
