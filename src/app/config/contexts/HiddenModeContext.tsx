// HiddenModeContext.tsx
import { createContext, useContext, type ReactNode } from 'react';

// Интерфейс для контекста
interface HiddenModeContextType {
  isHiddenMode: boolean;
}

// Создаем контекст с начальным значением
const HiddenModeContext = createContext<HiddenModeContextType | undefined>(undefined);

// Провайдер контекста
interface HiddenModeProviderProps {
  isHiddenMode: boolean;
  children: ReactNode;
}

export const HiddenModeProvider: React.FC<HiddenModeProviderProps> = ({ isHiddenMode, children }) => {
  return (
    <HiddenModeContext.Provider value={{ isHiddenMode }}>
      {children}
    </HiddenModeContext.Provider>
  );
};

// Хук для использования контекста
export const useHiddenMode = (): HiddenModeContextType => {
  const context = useContext(HiddenModeContext);
  if (!context) {
    throw new Error('useHiddenMode must be used within a HiddenModeProvider');
  }
  return context;
};
