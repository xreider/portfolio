import React, { type FC, type SVGProps, Suspense, lazy } from 'react';
import styles from './Icon.module.scss';

// Определяем возможные названия иконок.
// Добавляйте сюда новые имена, когда создаете новые SVG-файлы.
export type IconName =
  | 'telegram'
  | 'vk'

// Динамический импорт SVG-иконок
const IconMap: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  telegram: lazy(() => import('./icons/telegram.svg?react')),
  vk: lazy(() => import('./icons/vk.svg?react')),
};

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconName;
  // Пропс 'color' удален, так как цвет теперь задается в самом SVG
}

export const Icon: FC<IconProps> = ({ name, className, ...rest }) => {
  const IconComponent = IconMap[name];

  if (!IconComponent) {
    console.warn(`Icon with name "${name}" not found.`);
    return null; // Или можно вернуть заглушку
  }

  // Объединяем модульные стили с переданными классами
  const combinedClassName = `${styles.icon} ${className || ''}`;
  // Удалили 'styles[name]' так как специфичные цвета теперь в SVG

  return (
    <span
      className={combinedClassName}
      // Удалили inline-стиль для цвета
      {...rest}
    >
      <Suspense fallback={<></>}> {/* Простой пустой div как заглушка */}
        <IconComponent />
      </Suspense>
    </span>
  );
};
