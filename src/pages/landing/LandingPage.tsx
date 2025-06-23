
import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { formatExperience, getExperience } from './utils';
import { useHiddenMode } from '@src/app/config/contexts/HiddenModeContext';
import { BioItem, ExternalLink, Icon, InfoItem, InnerLink, TextButton } from '@shared/ui';
import { GalleryBrief } from '@shared/ui/sections/GalleryBrief/GalleryBrief';
import { routeMap } from '@routes/utils';

import Styles from './LandingPage.module.scss';
import SharedStyles from '../shared/SharedStyles.module.scss';

import img_hidden from './image.hidden.png';
import img from './image3.jpeg';


export const LandingPage = () => {
  const [workDuration, setWorkDuration] = useState<string>('');
  const [myAge, setMyAge] = useState<string>('');
  const [showMoreAboutMe, setShowMoreAboutMe] = useState(false);
  const [isFadingShowMoreAboutMe, setIsFadingShowMoreAboutMe] = useState(false);

  useEffect(() => {
    if (showMoreAboutMe) {
      setIsFadingShowMoreAboutMe(true);
      const timer = setTimeout(() => {
        setIsFadingShowMoreAboutMe(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showMoreAboutMe]);

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
      <div className={classNames(SharedStyles.section, Styles.header)}>
        <div className={Styles.header_left}>
          <h1>Привет, я {isHiddenMode ? 'Джон' : 'Юрий'}! 👋</h1>
          <img className={classNames(Styles.header_right, Styles.sBreakpoint)} src={isHiddenMode ? img_hidden : img} alt="Моё фото" />
          <div className={classNames('body-lg', SharedStyles.subsection)}>
            UX UI дизайнер с профессиональным опытом {workDuration} и знанием современных технологий. Ищу команду мечты и фулл-тайм работу удалённо!
          </div>
        </div>
        <img className={classNames(Styles.header_right, Styles.mBreakpoint)} src={isHiddenMode ? img_hidden : img} alt="Моё фото" />
      </div >

      <div className={SharedStyles.section}>
        <h3>Обо мне</h3>
        {/* <p className={'muted'}>
          Собирал сайты ещё <em>с 2006 года</em> как хобби. <em>С 2019 по 2023</em> года активно изучал <em>основные цифровые технологии</em> (фуллстек программирование react, typescript, вёрстка, nodejs, mongodb, docker и другие технологии, 3Д моделирование и 3Д программирование, цифровые редакторы, вектор, ретушь, фотобаш, архитектурный дизайн). <em>В 2023 году</em>, имея знания вёрстки и фронтенда, столкнулся с трудностями организации интерфейса проекта для портфолио программиста, и именно в этот момент стал усиленно проходить курсы UX UI, и <em>задачи разработки и тестирования интерфейсов</em> увлекли меня больше всех. <em>В октябре 2023</em> года успешно прошёл собеседование в 3 компании как программист и в 1 компанию как UX UI дизайнер, но <em>устроился именно дизайнером в {isHiddenMode ? 'ООО «Школа дизайна»' :

            <ExternalLink href='https://www.rusprofile.ru/id/1237700454045'>ООО «4А»</ExternalLink>}

          </em>.
        </p> */}
        <p className='muted'>
          <p>
            <em>С октября 2023</em> работаю UX UI дизайнером в продуктовой и аутсорсинговой компании {isHiddenMode ? 'ООО «Школа дизайна»' :
              <ExternalLink href='https://www.rusprofile.ru/id/1237700454045'>ООО «4А»</ExternalLink>}. Выпустил <em>9 многостраничных проектов</em>. В 2023 году прошёл собеседования <em>фуллстек-программистом</em> в несколько компаний, но задачи UX UI увлекли меня больше всех, поэтому работаю дизайнером уже <em>{workDuration}</em>. <em>Ищу новую команду</em> в продуктовой компании, так как хочу больше опыта по тестированию, исследованиям и проектировкам интерфейса и принести ещё больше пользы вашему бизнесу!
          </p>

          {
            !showMoreAboutMe && <TextButton className={SharedStyles.textButton} onClick={() => setShowMoreAboutMe(true)}>Показать больше текста</TextButton>}
          {showMoreAboutMe &&

            <div
              className={classNames(Styles.moreAboutMe, {
                [Styles.fadeIn]: isFadingShowMoreAboutMe,
              })}
            // Оставил только минимальные стили для отображения блока
            >
              <p>
                <em>За 4 года изучил множество цифровых профессий</em>, но ушёл в дизы. Почему?
              </p>

              <p>
                <em>UX - это психология и общение, - моё!</em> На это повлияли более 10 лет <em>педагоги</em> (преподавания китайского и разработки обучающих методик), 5 лет активной работы в <em>сетевой компании</em> и прохождении тренингов по тимбилдингу, риторике, работе с возражениями, 6 лет работы в <em>аэропорту</em> и прохождение тренингов по работе с пассажирами и в кризисных ситуациях, <em>самостояльеный интерес к психологии</em> взаимоотношений в коллективах и семье.
              </p>
              <p>
                <em>UI - с 2006 года учу вёрстку и графические редакторы</em>, так как нужно было натягивать дизайны сайтов на <em>CMS</em> как хобби и для знакомых.
              </p>

              <p>
                <em>С 2019 по 2023 гг.</em> изучал наиболее привлекательные на тот момент <em>цифровые профессии</em>: <em>фуллстек программирование</em> (react, typescript, nextjs, nodejs, mongodb, html, css, множество либ реакта, например, floating ui, redux, react hook form, tanstack, canvas), <em>3д моделирование и 3д программирование</em> (three.js, react three fiber), <em>вектор</em>, <em>ретушь</em>, <em>фотобаш</em>, <em>коллажирование</em>, <em>цветокор</em>, <em>анимации</em> в after effects, lottiejs, gasp, animejs. Кстати, это резюме <em>пишу я сам на react, typescript, scss</em>.
              </p>

              <p>
                В итоге обзавелся Т-шейп навыками, получил <em>3 оффера программистом</em> и <em>1 оффер UX UI дизайнера</em>. <em>Но выбрал именно дизайн</em>, так как задачи этой профессии и процесс работы <em>нравится больше всех</em> других цифровых профессий.
              </p>
              <p>
                <em>Творчество - это память.</em> Поэтому изучение и практика смежных сфер (верстка, фронтенд, использование различных библиотек) считаю обязательным - они <em>расширяют горизонты</em> понимания возможностей технологий.
              </p>
            </div>
          }

        </p>
        <div className={SharedStyles.subsection}>
          <h3>
            Давайте поговорим о Ваших продуктах!
          </h3>
          <p>
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
          </p>
        </div >
      </div >
      <div className={SharedStyles.section}>
        <h3>Опыт работы</h3>
        <p>
          Работаю в {isHiddenMode ? '«Школа дизайна»' : <ExternalLink href='https://www.rusprofile.ru/id/1237700454045'>ООО «4А»</ExternalLink>} <em>{workDuration}</em>. За время работы:
        </p>
        <ul className={SharedStyles.listUl}>
          <li>Спроектировал более <em>9 крупных многостраничных проектов</em>: веб-портал для крупного застройщика, интерфейс для терминала сбора данных промышленных предприятий (android), международного оператора доставки грузов, образовательная платформа для курсов кибер-безопасности и другие</li>
          <li>Работал с <em>дизайн-системами</em> Контур, Ant Design, Carbon Design System, PrimeVue. В большинстве проектов разрабатывал собственные UI-киты, а дизайн-системы использовал как референсы.</li>
          <li>Работал над <em>отдельными фичами</em> собственных продуктов ООО {isHiddenMode ? '«Школа дизайна»' : "«4А»"}, такие как система контроля Remote Desktop Protocol соединений, многопользовательские режимы в товароучётных системах</li>
          {/* <li>Работал в <em>программах</em> Figma, ClickUp, Miro, Adobe Illustrator, Photoshop, After Effects, Blender</li>
          <li>Работал с <em>ИИ</em>. Об этом далее в резюме</li>
          <li><em>Изучал материалы</em> по UX UI как рекомендованные руководством, так и по своей инициативе</li>
          <li>Прочитал <em>книгу</em> «Hooked. На крючке. Как создавать продукты, формирующие привычки», сейчас читаю «Дизайн привычных вещей», «Designing Virtual Worlds» Ричарда Бартла</li> */}
        </ul>
      </div>


      <div className={SharedStyles.section}>
        <h3>Мои работы</h3>
        <p className={'muted'}>
          Выставлено 6 проектов, которые можно выкладывать частично или полностью согласно NDA (соглашении о неразглашении).
        </p>
        <ul className={SharedStyles.workListAccented}>
          <li>
            <h4>Многостраничный портал застройщика</h4>
            <div>
              <InfoItem heading='Компания' text='ООО «СЗ-Управление Инвестиционных Программ»' />
              <InfoItem heading='Статус' text={<>В открытом доступе. <ExternalLink href='https://uipdv.ru/' accent='high'>Открыть →</ExternalLink></>} />
              <InfoItem heading='Платформа' text='Web' />
              <InfoItem heading='Описание разработки' text={<InnerLink to={routeMap.uip} accent='high'>Перейти →</InnerLink>} />
            </div>
            <GalleryBrief images={[
              'images/landing/uip1.jpeg',
              'images/landing/uip3.jpg',
              'images/landing/uip2.png',
              'images/landing/uip5.png',
            ]} />
          </li>
          <li>
            <h4>Приложение для терминала сбора данных для завода по заправке балонов</h4>
            <div>
              <InfoItem heading='Компания' text='NDA' />
              <InfoItem heading='Статус' text='В закрытом доступе' />
              <InfoItem heading='Платформа' text={<>Android (<ExternalLink href="https://www.chainway.net/Products/Info/142">Chainway C5 UHF</ExternalLink>)</>} />
              <InfoItem heading='Описание разработки' text={<InnerLink to={routeMap.tsd} accent='high'>Перейти →</InnerLink>} />
            </div>
            <GalleryBrief images={[
              'images/landing/tsd1.jpeg',
              'images/landing/tsd7.png',
              'images/landing/tsd5.png',
              'images/landing/tsd8.png',
            ]} />
          </li>
          <li>
            <h4>Многостраничный портал для «Института дополнительного профессионального образования»</h4>
            <div>
              <InfoItem heading='Компания' text='АНО ДПО "ДВИПРАЗ"' />
              <InfoItem heading='Статус' text={<>В открытом доступе. <ExternalLink href='https://dvipraz.ru/' accent='high'>Открыть →</ExternalLink></>} />
              <InfoItem heading='Платформа' text='Web' />
              <InfoItem heading='Описание разработки' text={<InnerLink to={routeMap.dvipraz} accent='high'>Перейти →</InnerLink>} />
            </div>
            <GalleryBrief images={[
              'images/landing/dvipraz1.jpg',
              'images/landing/dvipraz2.png',
              'images/landing/dvipraz3.png',
              'images/landing/dvipraz4.png',
            ]} />
          </li>
          <li>
            <h4>Безопасное управление бизнесом через настроенный удалённый рабочий стол (remote desktop protocol)</h4>
            <div>
              <InfoItem heading='Компания' text='ООО «4А»' />
              <InfoItem heading='Статус' text='Внутренний продукт компании. Готовится к выпуску на рынок' />
              <InfoItem heading='Платформа' text='Web' />
              <InfoItem heading='Разработка лендинга' text={<InnerLink to={routeMap.rdpLanding} accent='high'>Перейти →</InnerLink>} />
              <InfoItem heading='Разработка дашбоарда' text={<InnerLink to={routeMap.rdpDashboard} accent='high'>Перейти →</InnerLink>} />
            </div>
            <GalleryBrief images={[
              'images/landing/rdp1.png',
            ]} />
          </li>
          <li>
            <h4>Международный оператор доставки посылок из Китая</h4>
            <div>
              <InfoItem heading='Компания' text='(NDA)' />
              <InfoItem heading='Статус' text='Готовится к выпуску MVP' />
              <InfoItem heading='Платформа' text='Web' />
              <InfoItem heading='Описание разработки' text={<InnerLink to={routeMap.dostav} accent='high'>Перейти →</InnerLink>} />
            </div>
            <GalleryBrief images={[
              'images/landing/dostav1.jpg',
            ]} />
          </li>
          <li>
            <h4>Система учёта пассажиров бизнес зала международного авиатерминала</h4>
            <div>
              <InfoItem heading='Компания' text='ООО «Авиатерминал»' />
              <InfoItem heading='Статус' text='Закрытое использование' />
              <InfoItem heading='Примечание' text='Разрабатывал его по собственной инициативе когда работал в Аэропорту на должности, не связанной с IT, так как в бизнес-процессах предприятия было множество болей. Но я им горжусь, так как с него началось моё понимание, что я хочу делать приложения, упрощающие процессы.' />
              <InfoItem heading='Платформа' text='Excel' />
              <InfoItem heading='Описание разработки' text={<InnerLink to={routeMap.aeroakt} accent='high'>Перейти →</InnerLink>} />
            </div>
            <GalleryBrief images={[
              'images/landing/aeroakt1.jpg',
              'images/landing/aeroakt2.png',
              'images/landing/aeroakt3.png',
              'images/landing/aeroakt4.png',
            ]} />
          </li>
        </ul>
      </div>
      <div className={SharedStyles.section}>
        <h3>Программы</h3>
        <div className={SharedStyles.subsection}>
          <h4>Профессиональные инструменты</h4>
          <p>
            <ExternalLink href='https://www.figma.com/' accent='high'>Figma</ExternalLink>,{' '}
            <ExternalLink href='https://webflow.com/' accent='high'>Webflow🪫</ExternalLink>,{' '}
            <ExternalLink href='https://www.framer.com/' accent='high'>Framer🪫</ExternalLink>
          </p>
        </div>
        <div className={SharedStyles.subsection}>
          <h4>Графические редакторы</h4>
          <p><ExternalLink href='https://www.adobe.com/products/illustrator.html' accent='high'>Illustrator</ExternalLink> (проходил несколько курсов, делал брендинговые логотипы, иконки), <ExternalLink href='https://www.adobe.com/products/photoshop.html' accent='high'>Photoshop</ExternalLink> (проходил курсы по всем функциям, ретуши, цветокору, фотобашу, matte-painting), <ExternalLink href='https://www.adobe.com/products/aftereffects.html' accent='high'>After Effects🪫</ExternalLink> (проходил курсы и обучение по коротким видео для разных задач, делал различные простые анимированные элементы для лендингов, делал позиционирование лого на движущемся видео)
          </p>
        </div>
        <div className={SharedStyles.subsection}>
          <h4>3Д</h4>
          <p className={'muted'}>Проходил множество курсов по 3Д, но на этапе изучения софт-сёрфис понял, что мне достаточно знать хард-сёрфис, и в целом 3д моделирование это то, к чему бы я хотел обращаться редко
          </p>
          <div>
            <ExternalLink href='https://www.blender.org/' accent='high'>Blender</ExternalLink>,{' '}
            <ExternalLink href='https://www.adobe.com/products/substance3d/apps/painter.html' accent='high'>Adobe Substance 3D🪫</ExternalLink>
          </div>
        </div>
        <div className={SharedStyles.subsection}>
          <h4>Планирование</h4>
          <p><ExternalLink href='https://clickup.com/' accent='high'>ClickUp</ExternalLink>,{' '}
            <ExternalLink href='https://miro.com/' accent='high'>Miro</ExternalLink>,{' '}
            <ExternalLink href='https://app.diagrams.net/' accent='high'>Draw.io</ExternalLink>,{' '}
            <ExternalLink href='https://app.clockify.me/' accent='high'>Clockify</ExternalLink>,{' '}
            <ExternalLink href='https://www.focustodo.cn/' accent='high'>Focus To-Do</ExternalLink> (методика Помодоро)
          </p>
        </div>
      </div>
      <div className={SharedStyles.section}>
        <h3>Искуственный Интеллект</h3>
        <div className={SharedStyles.subsection}>
          <h4>Генерация приложений и дизайна интерфейсов</h4>
          <p className={'muted'}>Использую для тестирования гипотез и поиска вдохновений
          </p>
          <div>
            <ExternalLink href='https://v0.dev/' accent='high'>v0.dev</ExternalLink>,{' '}
            <ExternalLink href='https://lovable.dev/' accent='high'>lovable.dev</ExternalLink>,{' '}
            <ExternalLink href='https://studio.firebase.google.com/' accent='high'>studio.firebase.google.com</ExternalLink> (понимает только английский), <ExternalLink href='https://bolt.new/' accent='high'>bolt.new</ExternalLink>,{' '}
            <ExternalLink href='https://adaptive.ai/' accent='high'>adaptive.ai</ExternalLink>,{' '}
            <ExternalLink href='https://replit.com/' accent='high'>replit.com</ExternalLink> (понимает только английский),{' '}
            <ExternalLink href='https://gamma.app/' accent='high'>gamma.app</ExternalLink>,{' '}
            <ExternalLink href='https://stitch.withgoogle.com/' accent='high'>stitch.withgoogle.com</ExternalLink>
          </div>
        </div>
        <div className={SharedStyles.subsection}>
          <h4>Изображения</h4>
          <p><ExternalLink href='https://github.com/AUTOMATIC1111/stable-diffusion-webui' accent='high'>Stable diffusion</ExternalLink>,{' '}
            <ExternalLink href='https://github.com/lllyasviel/Fooocus' accent='high'>Fooocus</ExternalLink>,{' '}
            <ExternalLink href='https://chatgpt.com/' accent='high'>Chatgpt</ExternalLink>,{' '}
            <ExternalLink href='https://www.perplexity.ai/' accent='high'>Perplexity</ExternalLink>,{' '}
            <ExternalLink href='https://www.midjourney.com/' accent='high'>Midjourney</ExternalLink>
          </p>
        </div>
        <div className={SharedStyles.subsection}>
          <h4>Видео</h4>
          <p className={'muted'}>Использовал для оживления сторисов в прототипе заказчика
          </p>
          <div><ExternalLink href='https://runwayml.com/' accent='high'>Runway</ExternalLink>,{' '}
            <ExternalLink href='https://veo3.ai/' accent='high'>Veo3</ExternalLink>
          </div>
        </div>
        <div className={SharedStyles.subsection}>
          <h4>3Д</h4>
          <p className={'muted'}>
            Использовал для создания 3Д модели логотипа компании, но в итоге сделал всё руками в Блендере
          </p>
          <div>
            <ExternalLink href='https://www.meshy.ai/' accent='high'>meshy.ai</ExternalLink>,{' '}
            <ExternalLink href='https://www.tripo3d.ai/' accent='high'>tripo3d.ai</ExternalLink>,{' '}
            <ExternalLink href='https://hunyuan3d.ai/' accent='high'>hunyuan3d.ai</ExternalLink>
          </div>
        </div>
        <div className={SharedStyles.subsection}>
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
      <div className={SharedStyles.section}>
        <h3>Образование</h3>
        <div className={SharedStyles.subsection}>
          <h4>Высшее образование</h4>
          <p className={'muted'}><em>2006-2012 гг.</em> — <ExternalLink href='https://togudv.ru/ru/faculties_old/full_time/fvi/'>Педагогический Институт Тихоокеанского Государственного Университета</ExternalLink> (бывший ДВГГУ), Факультет востоковедения и истории (бывший Факультет Восточных языков), <em>переводчик-лингвист китайского и английского языков</em></p>
        </div>
        <div className={SharedStyles.subsection}>
          <h4>Пройденные курсы</h4>
        </div>
        <div className={SharedStyles.subsection}>
          <h4>Софт-скиллы</h4>

          <p className={'muted'}>
            За время работы в сетевой компании проходил различные тренинги <em>по тимбилдингу, работе с возражениями, мотивации, тайм-менеджменту</em> и другие. Во время работы в аэропорту проходил тренинги <em>по работе с пассажирами и психологии в кризисных ситуациях</em>. Во время работы преподавателем китайского языка изучал <em>педогогику и методологию составления упражнений</em>. Считаю срочную службу в армии также сильнейшим <em>кризисным уроком</em>.
          </p>
        </div>
        <div className={SharedStyles.subsection}>
          <h4>Книги</h4>
        </div>
        <div className={SharedStyles.subsection}>
          <h4>Список изучаемых медиа</h4>
        </div>
        <div className={SharedStyles.subsection}>
          <h4>Список изучаемых веб-технологий</h4>
          <p className={'muted'}>
            Изучаю как хобби различные веб-технологии, чтобы расширять понимание возможностей современных технологий и находить общий язык с командой.
          </p>
        </div>
      </div>


      <div className={SharedStyles.section}>
        <h2>Поговорим о Ваших проектах!</h2>
        <p className={'body-lg'}>
          Ищу команду мечты с душевными людьми и отработанными процессами исследований, тестирования и проектировки интерфейсов
        </p>
        <div className={SharedStyles.subsection}>
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
