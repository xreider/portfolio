import React, { type FC, type AnchorHTMLAttributes } from 'react';
import styles from './Link.module.scss';
import classNames from 'classnames';
import type { LinkAccent } from './links.types';


interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string; // Обязательный href
  accent?: LinkAccent; // Необязательное свойство accent, по умолчанию 'default'
  children: React.ReactNode; // Содержимое ссылки
}

export const ExternalLink: FC<ExternalLinkProps> = ({
  href,
  accent = 'default', // Устанавливаем 'default' как значение по умолчанию
  children,
  className,
  ...rest
}) => {

  return (
    <a
      href={href}
      target="_blank" // Всегда открывать в новой вкладке
      rel="noopener noreferrer" // Важно для безопасности при target="_blank"
      className={classNames(
        styles.link,
        styles[`accent_${accent}`], // Применяем стили в зависимости от значения accent
        className,
      )}
      {...rest} // Передаем все остальные HTML-атрибуты тега <a>
    >
      {children}
    </a>
  );
};
