declare const ENV: 'development' | 'production' | 'test';

declare const GATEWAY_URL: string;

declare const EntityGroups: {
  INSTRUCTIONS: 'instructions';
  USERS: 'users';
};

type Nullable<T> = T | null;

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

interface SvgImport {
  id: string;
  viewBox: string;
  url: string;
  toString: Function;
}
