import { Link, type LinkProps } from 'react-router';
import { type FC, type ReactNode } from 'react';
import classNames from 'classnames';
// import { routeImportMap } from '@routes';
import styles from './Link.module.scss';
import type { LinkAccent } from './links.types';


// Пропсы для InnerLink, расширяющие LinkProps
interface InnerLinkProps extends LinkProps {
  to: string;
  children: ReactNode;
  accent?: LinkAccent; // Необязательное свойство accent, по умолчанию 'default'
}

export const InnerLink: FC<InnerLinkProps> = ({ accent, children, className, to, ...props }) => {

  return (
    <Link
      to={to}
      // onMouseEnter={handlePrefetch}
      // onMouseLeave={handleCancelPrefetch}
      // onFocus={handlePrefetch}
      // onBlur={handleCancelPrefetch}
      className={classNames(
        styles.link,
        styles[`accent_${accent}`], // Применяем стили в зависимости от значения accent
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};


// const timeoutRef = useRef<NodeJS.Timeout | null>(null);

// const handlePrefetch = useCallback(() => {
//   // Очищаем предыдущий таймер, если он существует
//   if (timeoutRef.current) {
//     clearTimeout(timeoutRef.current);
//   }

//   // Устанавливаем новый таймер на 100 мс
//   timeoutRef.current = setTimeout(() => {
//     if (routeImportMap[to]) {
//       routeImportMap[to](); // Запускаем динамический импорт
//     }
//   }, 150);
// }, [to]);

// const handleCancelPrefetch = useCallback(() => {
//   // Очищаем таймер при уходе курсора или потере фокуса
//   if (timeoutRef.current) {
//     clearTimeout(timeoutRef.current);
//     timeoutRef.current = null;
//   }
// }, []);
