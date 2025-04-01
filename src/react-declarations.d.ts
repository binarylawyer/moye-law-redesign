
declare module 'react' {
  // Add missing types that are causing issues
  export type FC<P = {}> = React.FunctionComponent<P>;
  export type FunctionComponent<P = {}> = (props: P) => React.ReactElement | null;
  export type ReactNode = React.ReactNode;
  export type ReactElement = React.ReactElement;
  export type ComponentType<P = {}> = React.ComponentType<P>;
  export type ElementRef<T> = React.ElementRef<T>;
  export type ComponentProps<T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = React.ComponentProps<T>;
  export type ComponentPropsWithoutRef<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;
  export type ComponentPropsWithRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>;
  export type HTMLAttributes<T = any> = React.HTMLAttributes<T>;
  export type ButtonHTMLAttributes<T = any> = React.ButtonHTMLAttributes<T>;
  export type TextareaHTMLAttributes<T = any> = React.TextareaHTMLAttributes<T>;
  export type ThHTMLAttributes<T = any> = React.ThHTMLAttributes<T>;
  export type TdHTMLAttributes<T = any> = React.TdHTMLAttributes<T>;
  export type CSSProperties = React.CSSProperties;
  export type KeyboardEvent<T = Element> = React.KeyboardEvent<T>;
  export type ErrorInfo = React.ErrorInfo;
  
  // Core React exports
  export const useState: typeof React.useState;
  export const useEffect: typeof React.useEffect;
  export const useRef: typeof React.useRef;
  export const useContext: typeof React.useContext;
  export const useCallback: typeof React.useCallback;
  export const useMemo: typeof React.useMemo;
  export const useId: typeof React.useId;
  export const forwardRef: typeof React.forwardRef;
  export const createContext: typeof React.createContext;
  export const Component: typeof React.Component;
}

declare module 'react-router-dom';
