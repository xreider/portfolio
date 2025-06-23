import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(err: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    console.log('getDerivedStateFromError', err)
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    // You can also log the error to an error reporting service here

    // Redirect to the specified URL
    window.location.href = 'https://xreider.github.io/portfolio/';
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong. Redirecting...</h1>;
    }

    return this.props.children;
  }
}
