
import classNames from 'classnames';
import Styles from './BioItem.module.scss';
import type { ReactNode } from 'react';

interface BioItemProps {
  emoji: string | ReactNode;
  text: string | ReactNode;
  className?: string;
}

export const BioItem = ({ className, emoji, text }: BioItemProps) => {
  return (
    <span className={classNames(Styles.wrapper, {}, [className])}>
      <span className={Styles.icon}>{emoji}</span>
      <span>{text}</span>
    </span>
  )
};
