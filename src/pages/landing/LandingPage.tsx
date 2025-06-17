
import cls from './LandingPage.module.scss';
import img from './image.png';


export const LandingPage = () => {
  return (
    <>
      <div className={cls.header}>
        <div className={cls.header_left}>
          <h1>Привет, я Джон! 👋</h1>
          <p className={'body-lg'}>
            UX UI дизайнер с 20 месяцев профессионального опыта и пониманием современных технологий. Давайте поговорим о Ваших продуктах!
          </p>
        </div>
        <div className={cls.header_right}>
          <img src={img} alt="landing" />
        </div>
      </div>
    </>
  )
};
