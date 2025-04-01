
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
}

declare module 'react-router-dom';
