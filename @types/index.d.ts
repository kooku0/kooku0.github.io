export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.yml' {
  const value: any;
  export default value;
}

declare global {
  interface Window {
    gtag: any;
  }
}
