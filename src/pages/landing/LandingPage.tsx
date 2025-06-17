
import { useEffect, useState } from 'react';
import cls from './LandingPage.module.scss';
import img_hidden from './image.hidden.png';
import img from './image3.jpeg';
import { formatExperience, getExperience } from './utils';
import { useHiddenMode } from '@src/app/config/contexts/HiddenModeContext';
import classNames from 'classnames';


export const LandingPage = () => {
  const [text, setText] = useState<string>('');

  const { isHiddenMode } = useHiddenMode();

  useEffect(() => {
    const startDate = '2023-10-17';
    const { years, months } = getExperience(startDate);
    setText(formatExperience({ years, months }));
  }, []);

  return (
    <>
      <div className={classNames(cls.header, cls.section)}>
        <div className={cls.header_left}>
          <h1>Привет, я {isHiddenMode ? 'Джон' : 'Юрий'}! 👋</h1>
          <p className={'body-lg'}>
            UX UI дизайнер с профессиональным опытом {text} и пониманием современных технологий. Давайте поговорим о Ваших продуктах!
          </p>
        </div>
        <img className={cls.header_right} src={isHiddenMode ? img_hidden : img} alt="моё фото" />
      </div >

      <div className={cls.section}>
        <h3>Обо мне</h3>
        <p className={'muted'}>
          Собирал сайты ещё <em>с 2006 года</em>, <em>с 2019 по 2023</em> года активно изучал <em>основные цифровые технологии</em> (фуллстек программирование, 3Д, цифровые редакторы, вектор, ретушь, фотобаш). Но окончательно определился с выбором профессии UX UI дизайнер <em>в 2023 году</em>, так как имея знания вёрстки и фронтенда столкнулся с трудностями организации интерфейса проекта для портфолио, и именно в этот момент стал усиленно проходить курсы UX UI, и <em>задачи разработки и тестирования интерфейсов</em> увлекли меня больше всех. <em>В октябре 2023</em> года успешно прошёл собеседование в 3 компании как программист и в 1 компанию как UX UI дизайнер, но <em>устроился именно дизайнером в {isHiddenMode ? '«Школа дизайна»' : "«4А»"}</em>, г. {isHiddenMode ? 'Новосибирск' : "Хабаровск"}.
        </p>
      </div>
    </>
  )
};
