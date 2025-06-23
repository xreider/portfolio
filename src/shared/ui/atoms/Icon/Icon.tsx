import React, { type FC, type SVGProps } from 'react';
import styles from './Icon.module.scss';

// Статический импорт SVG-иконок
import TelegramIcon from './icons/telegram.svg?react';
import VkIcon from './icons/vk.svg?react';

// Определяем возможные названия иконок.
// Добавляйте сюда новые имена, когда создаете новые SVG-файлы.
export type IconName =
  | 'telegram'
  | 'vk'

// Статическая карта иконок
const IconMap: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  telegram: TelegramIcon,
  vk: VkIcon,
};

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconName;
}

export const Icon: FC<IconProps> = ({ name, className, ...rest }) => {
  const IconComponent = IconMap[name];

  if (!IconComponent) {
    console.warn(`Icon with name "${name}" not found.`);
    return null; // Или можно вернуть заглушку
  }

  // Объединяем модульные стили с переданными классами
  const combinedClassName = `${styles.icon} ${className || ''}`;

  return (
    <span
      className={combinedClassName}
      {...rest}
    >
      <IconComponent /> {/* Suspense больше не нужен */}
    </span>
  );
};

// // Динамический импорт SVG-иконок
// const IconMap: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
//   telegram: lazy(() => import('./icons/telegram.svg?react')),
//   vk: lazy(() => import('./icons/vk.svg?react')),
// };
