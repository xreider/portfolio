// import Styles from './TsdProduct.module.scss';

import { ExternalLink, InfoItem, InnerLink, UserPortraitSlider, type UserPortrait } from "@shared/ui";
import SharedStyles from '../../shared/SharedStyles.module.scss';
import { routeMap } from "@routes/utils";
import { GalleryBrief } from "@shared/ui/sections/GalleryBrief/GalleryBrief";


export const TsdProduct = () => {
  return (
    <>
      <div className={SharedStyles.section}>
        <div className={SharedStyles.subsection}>
          <InnerLink to={routeMap.landing}>На главную</InnerLink>
        </div>
        <h2>Приложение для терминала сбора данных для завода по заправке баллонов</h2>
        <div className={SharedStyles.subsection}>
          <InfoItem heading='Компания' text='NDA' />
          <InfoItem heading='Статус' text='В закрытом доступе' />
          <InfoItem heading='Платформа' text={<>Android (<ExternalLink href="https://www.chainway.net/Products/Info/142">Chainway C5 UHF</ExternalLink>)</>} />
        </div>
        <p className={'muted'}>
          Проектирование интерфейса мобильного приложения для терминала сбора данных <ExternalLink href="https://www.chainway.net/Products/Info/142">Chainway C5 UHF</ExternalLink>, предназначенного для автоматизации процессов приёма, обслуживания, заправки, контроля качества и выдачи баллонов на крупном промышленном предприятии.

          Проект начался с глубокого анализа текущих бизнес-процессов, участия в стратегических встречах с заказчиком и сотрудниками завода. Было принято решение не просто перевести существующие процессы в цифровой формат, а полностью переработать логистику и внутреннюю организацию работы предприятия.
        </p>
        <GalleryBrief images={[
          'images/landing/tsd1.jpeg',
          'images/landing/tsd7.png',
          'images/landing/tsd5.png',
          'images/landing/tsd8.png',
        ]} />

      </div>
      <div className={SharedStyles.section}>
        <h3>Мои задачи как UX/UI-дизайнера</h3>
        <ul className={SharedStyles.workListAccented}>
          <li>
            <h4>Исследование пользователей и контекста</h4>
            <p>
              <InfoItem heading='Задача' text='Проаннализировать контекст и пользователей (сотрудников, управляющего и клиентов завода)' />
              <InfoItem heading='Решение' text={<>Составить потрет пользователей, чтобы понять их ожидания, фрустрации, потребности, мотивацию</>} />
              <InfoItem heading='Результат' text='Сделали много выводов для проектировки интерфейсов и изменения бизнес-процессов завода' />
            </p>
            <div>
              Провели интервью с пользователями, анализ их потребностей и контекста использования приложения. Посещали рабочее место сотрудников. Тесно общались с сотрудниками и директором. Сделали следующий вывод:
            </div>
            <ul>
              <li>
                Рабочее окружение — тёмные, плохо освещённые помещения.
              </li>
              <li>
                Высокая нагрузка на зрение из-за постоянной работы с маленькими объектами и маркировками.
              </li>
              <li>
                Частое использование перчаток, что делает работу с мелкими элементами невозможной.
              </li>
              <li>
                Нужна быстрая обратная связь (визуальная и звуковая), чтобы подтверждать действия без необходимости отвлекаться на экран.
              </li>
            </ul>
            <div>
              На основе этих данных мы определили основные требования к интерфейсу:
            </div>
            <ul>
              <li>
                Темная тема оформления
              </li>
              <li>
                Крупные кнопки и элементы
              </li>
              <li>
                Простые, линейные сценарии использования
              </li>
              <li>
                Громкие звуковые сигналы для подтверждения сканирования и действий
              </li>
              <li>
                Минимизация ошибок за счёт четкой структуры и ограничений
              </li>
            </ul>
            <UserPortraitSlider userPortraits={getUserPortraits()} />
          </li>


          <li>
            <h4>Исследование конкурентов</h4>
            <div>
              Исследования проводилось с полным отстутсвием доступа к интерфейсам программ прямых конкурентов. Поэтому мы изучали пользовательские пути через видео ролики интерфейсов, выложенные на видео-хостинги, а также изучали различные дизайны интерфейсов терминалов сбора данных промышленных предприятий на Behance, Dribbble, Youtube и так далее.
            </div>
            <p>
              На основе этих наблюдений мы получили ценные данные, что конкуренты использвуют UFC-метки. И после согласования с заказчиком, мы решили использовать их в нашем бизнес-процессе. Это потребовало ввести существенные изменения в бизнес-процессы завода, пользовательские пути и дизайн интерфейса, но в итоге позволило значительно упростить работу сотрудников и ускорить процессы.
            </p>
          </li>
        </ul>
      </div>
    </>
  )
};


function getUserPortraits(): UserPortrait[] {
  return [
    {
      "id": 1,
      "name": "Виктор Петрович",
      "age": "28 лет",
      "occupation": "Работник цеха (наполнитель баллонов)",
      "goal": "Быстро и безошибочно выполнять производственные задачи: принимать пустые баллоны, регистрировать их и выдавать клиентам готовые, заправленные баллоны.",
      "needs": [
        "Интерфейс с крупными элементами управления (кнопки, поля ввода) из-за больших пальцев и возможной работы в перчатках.",
        "Тёмная тема приложения для комфортной работы в условиях слабой освещенности цеха.",
        "Высококонтрастный и легко читаемый шрифт.",
        "Защита от случайных действий, особенно от сброса введенных данных.",
        "Понятные и громкие звуковые сигналы, а также четкая визуальная индикация (цвет, иконки) для подтверждения успешных операций (например, сканирование штрихкода) и оповещения об ошибках или предупреждениях.",
        "Минимальное количество шагов для выполнения типовых задач.",
        "Возможность быстрого ввода данных с помощью сканера штрихкодов/QR-кодов.",
        "Простой и интуитивно понятный пользовательский путь, не требующий длительного обучения."
      ],
      "behaviors": [
        "Работает в спецодежде и перчатках.",
        "Часто работает в условиях недостаточной освещенности и повышенного шума.",
        "Физически устает к концу смены, что может снижать концентрацию внимания.",
        "Не имеет большого опыта работы со сложными приложениями, предпочитает простые и надежные инструменты.",
        "Держит устройство одной рукой, а другой выполняет физическую работу с баллонами.",
        "Полагается на мышечную память при выполнении рутинных операций в интерфейсе."
      ],
      "frustrations": [
        "Мелкие кнопки и иконки, по которым сложно попасть пальцем.",
        "Случайное нажатие кнопки «назад» или «отмена» и потеря всех введенных данных о партии баллонов.",
        "Непонятные сообщения об ошибках, которые не объясняют, что делать дальше.",
        "Слишком яркий экран, который слепит в темноте и быстро разряжает батарею устройства.",
        "Тихие звуковые уведомления, которые не слышно из-за производственного шума.",
        "Необходимость совершать много лишних нажатий для выполнения простой задачи."
      ]
    },
    {
      "id": 2,
      "name": "Андрей Васильев",
      "age": "39 лет",
      "occupation": "Клиент (индивидуальный предприниматель, владелец небольшой строительной фирмы)",
      "goal": "Максимально быстро сдать пустые баллоны и получить заправленные, чтобы не задерживать рабочий процесс на своих объектах.",
      "needs": [
        "Минимальное время ожидания в очереди.",
        "Прозрачная и понятная система обмена: сдал 5 баллонов — получил 5 аналогичных баллонов.",
        "Быстрый процесс оформления документов и оплаты.",
        "Возможность заранее узнать о наличии нужного количества заправленных баллонов.",
        "Четкое понимание статуса своего заказа без необходимости искать сотрудника и спрашивать.",
        "Уверенность в том, что полученные баллоны исправны и прошли техническое обслуживание."
      ],
      "behaviors": [
        "Приезжает на завод на собственном грузовом транспорте.",
        "Ценит свое время, так как от скорости обслуживания на заводе зависит простой его работников.",
        "Предпочитает безналичный расчет.",
        "Хочет решить все вопросы за один визит.",
        "Пользуется смартфоном и ожидает современного уровня сервиса.",
        "Положительно воспринимает нововведения, если они экономят его время."
      ],
      "frustrations": [
        "Длинные очереди и медленное обслуживание.",
        "Необходимость ждать, пока именно его баллоны заправят и обслужат.",
        "Непрозрачная система ценообразования за ремонт и обслуживание.",
        "Потеря времени из-за бумажной волокиты и ручного оформления документов.",
        "Отсутствие информации о готовности заказа.",
        "Риск получить неисправный или плохо обслуженный баллон по старой схеме."
      ]
    },
    {
      "id": 3,
      "name": "Виктор Валерьевич",
      "age": "42 года",
      "occupation": "Управляющий цехом (руководитель смены)",
      "goal": "Обеспечить бесперебойную и эффективную работу завода, контролировать ключевые показатели и иметь возможность оперативно решать возникающие проблемы.",
      "needs": [
        "Доступ к административной панели приложения с любого устройства (в идеале, и с компьютера).",
        "Возможность просматривать отчеты и аналитику в реальном времени: количество принятых и выданных баллонов, остатки на складе, производительность смены.",
        "Функционал для управления пользователями-работниками (добавление, блокировка).",
        "Инструменты для исправления ошибок, допущенных работниками (например, отмена неверно проведенной операции, корректировка данных).",
        "Система уведомлений о критических ошибках или нештатных ситуациях на производстве (например, простой линии, большое количество брака).",
        "Возможность управлять номенклатурой газов и услуг.",
        "Контроль финансовых потоков, интеграция с системой бухгалтерского учета."
      ],
      "behaviors": [
        "Нуждается в быстром доступе к сводным данным для принятия управленческих решений.",
        "Не выполняет рутинные операции в приложении, но должна понимать, как оно работает, чтобы контролировать процесс.",
        "Ценит точность данных и прозрачность всех операций.",
        "Является опытным пользователем ПК и мобильных приложений."
      ],
      "frustrations": [
        "Отсутствие оперативной информации о состоянии дел на производстве.",
        "Невозможность удаленно проконтролировать работу смены.",
        "Ситуации, когда ошибка рядового сотрудника в системе приводит к остановке работы, и нет простого способа ее исправить.",
        "Сложные и запутанные отчеты, на анализ которых уходит много времени.",
        "Невозможность быстро найти информацию по конкретному клиенту или заказу.",
        "Зависимость от бумажных отчетов, которые предоставляются с задержкой."
      ]
    }
  ];
}
