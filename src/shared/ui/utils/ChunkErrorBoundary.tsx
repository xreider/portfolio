import React from "react";

type ChunkErrorBoundaryState = {
  hasError: boolean;
};

type ChunkErrorBoundaryProps = {
  children: React.ReactNode;
};

export class ChunkErrorBoundary extends React.Component<ChunkErrorBoundaryProps> {
  state: ChunkErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ChunkErrorBoundaryState {
    if (
      error.name === "ChunkLoadError" ||
      error.message.includes("Failed to fetch dynamically imported module")
    ) {
      return { hasError: true };
    }
    return { hasError: false };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>Произошла ошибка при загрузке. Пожалуйста, обновите страницу.</p>
          <button onClick={() => window.location.reload()}>
            Обновить страницу
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
