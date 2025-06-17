import { Link, type LinkProps } from 'react-router';
import { useCallback, useRef, type FC, type ReactNode } from 'react';
import { routeMap } from '@routes';


// Пропсы для PrefetchLink, расширяющие LinkProps
interface PrefetchLinkProps extends LinkProps {
  to: string;
  children: ReactNode;
}

export const PrefetchLink: FC<PrefetchLinkProps> = ({ to, children, ...props }) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrefetch = useCallback(() => {
    // Очищаем предыдущий таймер, если он существует
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Устанавливаем новый таймер на 100 мс
    timeoutRef.current = setTimeout(() => {
      if (routeMap[to]) {
        routeMap[to](); // Запускаем динамический импорт
      }
    }, 150);
  }, [to]);

  const handleCancelPrefetch = useCallback(() => {
    // Очищаем таймер при уходе курсора или потере фокуса
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  return (
    <Link
      to={to}
      onMouseEnter={handlePrefetch}
      onMouseLeave={handleCancelPrefetch}
      onFocus={handlePrefetch}
      onBlur={handleCancelPrefetch}
      {...props}
    >
      {children}
    </Link>
  );
};
