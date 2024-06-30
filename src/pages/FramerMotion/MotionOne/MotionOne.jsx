import Collapsible from "./Collapsible";
import Filter from "./Filter";

import styles from "./MotionOne.module.css";

import { data } from "./data";

const MotionOne = () => {
  return (
    <div className={styles.motionOne}>
      <Collapsible title="Animate Presence">
        <p className={styles.text}>
          Мета розробки проєкту спрямована на його функціонал. Використовуючи
          фреймворки та бібліотеки, поєднюючи взаємодію клієнтської та серверної
          частин та бази данних. В основі клієнтської частини використовується
          React.js, в сервернії - Express.js, в базі данних - MongoDB. Сайт
          базується на запитах до сервера за допомогою бібліотеки axios. Всі
          запити є асинхронними та виконуються в state-management
          @reduxjs/toolkit. З базою данних працюю за допомогою бібліотеки
          mongoose. Створив декілька схем ( користувачів, постів, коментаріїв,
          діалогів), та зв'язок між ними, щоб логічно вирішувати відповідну
          задачу на стороні сервера. У backend частині використовую bcrypt для
          шифруввання пароля та jsonwebtoken для аутентифікації користувача. Для
          завантаження картинки на сервер використав multer. Для постійного
          з'єднання між сервером та клієнтом - socket.io на бекенді та
          socket.io-client на фронтенді ( чат та діалог ). Щоб сайт не був лише
          текстовому форматі користуюсь стилями використовуючи module,
          бібліотеками react-animate-on-scroll, animate.css та Material UI.
          Також за допомогою останнього адаптував на пристрої з різним
          розширенням. Деплой бекенду зробив на платформу Render, фронтенду - на
          Netlify.
        </p>
        <Filter data={data} />
      </Collapsible>
    </div>
  );
};

export default MotionOne;
