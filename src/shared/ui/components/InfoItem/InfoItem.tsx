
import classNames from 'classnames';
import cls from './InfoItem.module.scss';
import type { ReactNode } from 'react';

interface InfoItemProps {
  heading?: string | ReactNode
  text?: string | ReactNode
  className?: string
}

export const InfoItem = ({ className, heading, text }: InfoItemProps) => {
  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      <span className={cls.heading}>{heading} </span><span className={cls.text}>{text}</span>
    </div>
  )
};
