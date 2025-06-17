
import { useEffect, useState } from 'react';
import cls from './LandingPage.module.scss';
import img_hidden from './image.hidden.png';
import img from './image3.jpeg';
import { formatExperience, getExperience } from './utils';
import { useHiddenMode } from '@src/app/config/contexts/HiddenModeContext';
import classNames from 'classnames';
import { BioItem, ExternalLink, Icon } from '@shared/ui';


export const LandingPage = () => {
  const [workDuration, setWorkDuration] = useState<string>('');
  const [myAge, setMyAge] = useState<string>('');

  const { isHiddenMode } = useHiddenMode();

  useEffect(() => {
    const startDate = '2023-10-17';
    const { years, months } = getExperience(startDate);
    setWorkDuration(formatExperience({ years, months }));

    const birthDate = '1990-02-03';
    const { years: birthYears } = getExperience(birthDate);
    setMyAge(formatExperience({ years: birthYears }, false));
  }, []);

  return (
    <>
      <div className={classNames(cls.header, cls.section)}>
        <div className={cls.header_left}>
          <h1>Привет, я {isHiddenMode ? 'Джон' : 'Юрий'}! 👋</h1>
          <p className={'body-lg'}>
            UX UI дизайнер с профессиональным опытом {workDuration} и пониманием современных технологий. Ищу команду мечты и фулл-тайм работу удалённо!
          </p>
        </div>
        <img className={cls.header_right} src={isHiddenMode ? img_hidden : img} alt="моё фото" />
      </div >

      <div className={cls.section}>
        <h3>Обо мне</h3>
        <p className={'muted'}>
          Собирал сайты ещё <em>с 2006 года</em> как хобби. <em>С 2019 по 2023</em> года активно изучал <em>основные цифровые технологии</em> (фуллстек программирование react, typescript, вёрстка, nodejs, mongodb, docker и другие технологии, 3Д моделирование и 3Д программирование, цифровые редакторы, вектор, ретушь, фотобаш, архитектурный дизайн). <em>В 2023 году</em>, имея знания вёрстки и фронтенда, столкнулся с трудностями организации интерфейса проекта для портфолио программиста, и именно в этот момент стал усиленно проходить курсы UX UI, и <em>задачи разработки и тестирования интерфейсов</em> увлекли меня больше всех. <em>В октябре 2023</em> года успешно прошёл собеседование в 3 компании как программист и в 1 компанию как UX UI дизайнер, но <em>устроился именно дизайнером в ООО {isHiddenMode ? '«Школа дизайна»' : "«4А»"}</em>.
        </p>
        <div className={cls.subsection}>
          <BioItem emoji={<Icon name='telegram' />} text={<>
            Телеграмм <ExternalLink href='https://t.me/Rumar1' accent='default'>@Rumar1</ExternalLink>
          </>} />
          <BioItem emoji={<Icon name='vk' />} text={<>
            ВКонтакте <ExternalLink href='https://vk.com/indigosay' accent='default'>@indigosay</ExternalLink>
          </>} />
          <BioItem emoji={'✉️'} text={<>
            Емайл <ExternalLink href='mailto:xreider@yandex.ru' accent='default'>xreider@yandex.ru</ExternalLink>
          </>} />
          <BioItem emoji={'⏰'} text={<>
            Желаемое время работы до 14-18 МСК
          </>} />
          <BioItem emoji={'🌇'} text={<>
            Город Хабаровск, Россия (+10 МСК)
          </>} />
          <BioItem emoji={'🎂'} text={<>
            Возраст {myAge}
          </>} />
          <BioItem emoji={'👨‍👩‍👧'} text={<>
            Семейное положение: женат, ребёнок
          </>} />
          <BioItem emoji={'🀄'} text={<>
            Образование: высшее, переводчик-лингвист китайского и английского языков
          </>} />
          <BioItem emoji={'⚔️'} text={<>
            Срочная служба в армии
          </>} />
        </div >
      </div >
      <div className={cls.section}>
        <h3>Опыт работы</h3>
        <p className={'muted'}>
          Работаю в ООО {isHiddenMode ? '«Школа дизайна»' : "«4А»"} {workDuration}. За время работы:
        </p>
        <ul className={cls.list}>
          <li>Спроектировал более <em>9 крупных многостраничных проектов</em>: веб-портал для крупного застройщика, интерфейс для терминала сбора данных промышленных предприятий (android), систему контроля Remote Desktop Protocol соединений, международного оператора доставки грузов, образовательная платформа для курсов кибер-безопасности и другие</li>
          <li>Работал с <em>дизайн-системами</em> Контур, Ant Design, Carbon Design System, PrimeVue. В большинстве проектов разрабатывал собственные UI-киты, а дизайн-системы использовал как референсы.</li>
          <li>Работал над <em>отдельными фичами</em> собственных продуктов ООО {isHiddenMode ? '«Школа дизайна»' : "«4А»"}, такие как многопользовательские режимы в товароучётных системах</li>
          <li>Работал в <em>программах</em> Figma, ClickUp, Miro, Adobe Illustrator, Photoshop, After Effects, Blender</li>
          <li>Работал с <em>ИИ</em>. Об этом далее в резюме</li>
          <li><em>Изучал материалы</em> по UX UI как рекомендованные руководством, так и по своей инициативе</li>
          <li>Прочитал <em>книгу</em> «Hooked. На крючке. Как создавать продукты, формирующие привычки», сейчас читаю «Дизайн привычных вещей», «Designing Virtual Worlds» Ричарда Бартла</li>
        </ul>
      </div>


      <div className={cls.section}>
        <h3>Мои работы</h3>
      </div>
      <div className={cls.section}>
        <h3>Программы</h3>
        <div className={cls.subsection}>
          <h4>Профессиональные инструменты</h4>
          <p><ExternalLink href='https://www.figma.com/' accent='high'>Figma</ExternalLink>,{' '}
            <ExternalLink href='https://webflow.com/' accent='high'>Webflow🪫</ExternalLink>,{' '}
            <ExternalLink href='https://www.framer.com/' accent='high'>Framer🪫</ExternalLink>
          </p>
        </div>
        <div className={cls.subsection}>
          <h4>Графические редакторы</h4>
          <p><ExternalLink href='https://www.adobe.com/products/illustrator.html' accent='high'>Illustrator</ExternalLink> (проходил несколько курсов, делал брендинговые логотипы, иконки), <ExternalLink href='https://www.adobe.com/products/photoshop.html' accent='high'>Photoshop</ExternalLink> (проходил курсы по всем функциям, ретуши, цветокору, фотобашу, matte-painting), <ExternalLink href='https://www.adobe.com/products/aftereffects.html' accent='high'>After Effects🪫</ExternalLink> (проходил курсы и обучение по коротким видео для разных задач, делал различные простые анимированные элементы для лендингов, делал позиционирование лого на движущемся видео)
          </p>
        </div>
        <div className={cls.subsection}>
          <h4>3Д</h4>
          <p className={'muted'}>Проходил множество курсов по 3Д, но на этапе изучения софт-сёрфис понял, что мне достаточно знать хард-сёрфис
          </p>
          <p>
            <ExternalLink href='https://www.blender.org/' accent='high'>Blender</ExternalLink>,{' '}
            <ExternalLink href='https://www.adobe.com/products/substance3d/apps/painter.html' accent='high'>Adobe Substance 3D🪫</ExternalLink>
          </p>
        </div>
        <div className={cls.subsection}>
          <h4>Планирование</h4>
          <p><ExternalLink href='https://clickup.com/' accent='high'>ClickUp</ExternalLink>,{' '}
            <ExternalLink href='https://miro.com/' accent='high'>Miro</ExternalLink>,{' '}
            <ExternalLink href='https://app.diagrams.net/' accent='high'>Draw.io</ExternalLink>,{' '}
            <ExternalLink href='https://app.clockify.me/' accent='high'>Clockify</ExternalLink>,{' '}
            <ExternalLink href='https://www.focustodo.cn/' accent='high'>Focus To-Do</ExternalLink> (методика Помодоро)
          </p>
        </div>
      </div>
      <div className={cls.section}>
        <h3>Искуственный Интеллект</h3>
        <div className={cls.subsection}>
          <h4>Генерация приложений и дизайна интерфейсов</h4>
          <p className={'muted'}>Использую для тестирования гипотез и поиска вдохновений
          </p>
          <p>
            <ExternalLink href='https://v0.dev/' accent='high'>v0.dev</ExternalLink>,{' '}
            <ExternalLink href='https://lovable.dev/' accent='high'>lovable.dev</ExternalLink>,{' '}
            <ExternalLink href='https://studio.firebase.google.com/' accent='high'>studio.firebase.google.com</ExternalLink> (понимает только английский), <ExternalLink href='https://bolt.new/' accent='high'>bolt.new</ExternalLink>,{' '}
            <ExternalLink href='https://adaptive.ai/' accent='high'>adaptive.ai</ExternalLink>,{' '}
            <ExternalLink href='https://replit.com/' accent='high'>replit.com</ExternalLink> (понимает только английский),{' '}
            <ExternalLink href='https://gamma.app/' accent='high'>gamma.app</ExternalLink>,{' '}
            <ExternalLink href='https://stitch.withgoogle.com/' accent='high'>stitch.withgoogle.com</ExternalLink>
          </p>
        </div>
        <div className={cls.subsection}>
          <h4>Изображения</h4>
          <p><ExternalLink href='https://github.com/AUTOMATIC1111/stable-diffusion-webui' accent='high'>Stable diffusion</ExternalLink>,{' '}
            <ExternalLink href='https://github.com/lllyasviel/Fooocus' accent='high'>Fooocus</ExternalLink>,{' '}
            <ExternalLink href='https://chatgpt.com/' accent='high'>Chatgpt</ExternalLink>,{' '}
            <ExternalLink href='https://www.perplexity.ai/' accent='high'>Perplexity</ExternalLink>,{' '}
            <ExternalLink href='https://www.midjourney.com/' accent='high'>Midjourney</ExternalLink>
          </p>
        </div>
        <div className={cls.subsection}>
          <h4>Видео</h4>
          <p className={'muted'}>Использовал для оживления сторисов в прототипе заказчика
          </p>
          <p><ExternalLink href='https://runwayml.com/' accent='high'>Runway</ExternalLink>,{' '}
            <ExternalLink href='https://veo3.ai/' accent='high'>Veo3</ExternalLink>
          </p>
        </div>
        <div className={cls.subsection}>
          <h4>3Д</h4>
          <p className={'muted'}>Использовал для создания 3Д модели логотипа компании, но в итоге сделал всё руками в Блендере
          </p>
          <p><ExternalLink href='https://www.meshy.ai/' accent='high'>meshy.ai</ExternalLink>,{' '}
            <ExternalLink href='https://www.tripo3d.ai/' accent='high'>tripo3d.ai</ExternalLink>,{' '}
            <ExternalLink href='https://hunyuan3d.ai/' accent='high'>hunyuan3d.ai</ExternalLink>
          </p>
        </div>
        <div className={cls.subsection}>
          <h4>Текстовые запросы</h4>
          <p><ExternalLink href='https://gemini.google.com/' accent='high'>Gemini</ExternalLink>,{' '}
            <ExternalLink href='https://grok.com/' accent='high'>Grok</ExternalLink>,{' '}
            <ExternalLink href='https://chatgpt.com/' accent='high'>Chatgpt</ExternalLink>,{' '}
            <ExternalLink href='https://www.anthropic.com/' accent='high'>Claude</ExternalLink>,{' '}
            <ExternalLink href='https://www.perplexity.ai/' accent='high'>Perplexity</ExternalLink>,{' '}
            <ExternalLink href='https://chat.qwen.ai/' accent='high'>Qwen</ExternalLink>,{' '}
            <ExternalLink href='https://chat.deepseek.com/' accent='high'>Deepseek</ExternalLink>,{' '}
            <ExternalLink href='https://copilot.microsoft.com/' accent='high'>Copilot</ExternalLink>,{' '}
            <ExternalLink href='https://windsurf.com/' accent='high'>Windsurf</ExternalLink>
          </p>
        </div>
      </div>
      <div className={cls.section}>
        <h3>Образование</h3>
        <div className={cls.subsection}>
          <h4>Высшее образование</h4>
          <p className={'muted'}><em>2006-2012 гг.</em> — <ExternalLink href='https://togudv.ru/ru/faculties_old/full_time/fvi/'>Педагогический Институт Тихоокеанского Государственного Университета</ExternalLink> (бывший ДВГГУ), Факультет востоковедения и истории (бывший Факультет Восточных языков), <em>переводчик-лингвист китайского и английского языков</em></p>
        </div>
        <div className={cls.subsection}>
          <h4>Пройденные курсы</h4>
        </div>
        <div className={cls.subsection}>
          <h4>Софт-скиллы</h4>
        </div>
        <div className={cls.subsection}>
          <h4>Книги</h4>
        </div>
        <div className={cls.subsection}>
          <h4>Список изучаемых медиа</h4>
        </div>
        <div className={cls.subsection}>
          <h4>Список изучаемых веб-технологий</h4>
        </div>
      </div>


      <div className={cls.section}>
        <h2>Поговорим о Ваших проектах!</h2>
        <p className={'body-lg'}>
          Ищу команду мечты с душевными людьми и отработанными процессами исследований и проектировки интерфейсов
        </p>
        <div className={cls.subsection}>
          <BioItem emoji={<Icon name='telegram' />} text={<>
            Телеграмм <ExternalLink href='https://t.me/Rumar1' accent='default'>@Rumar1</ExternalLink>
          </>} />
          <BioItem emoji={<Icon name='vk' />} text={<>
            ВКонтакте <ExternalLink href='https://vk.com/indigosay' accent='default'>@indigosay</ExternalLink>
          </>} />
          <BioItem emoji={'✉️'} text={<>
            Емайл <ExternalLink href='mailto:xreider@yandex.ru' accent='default'>xreider@yandex.ru</ExternalLink>
          </>} />
        </div>
      </div>
    </>
  )
};
