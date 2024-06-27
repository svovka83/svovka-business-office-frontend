import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.content}>
      <h1>Опис</h1>
      <p className={styles.text}>
        Мета розробки проєкту спрямована на його функціонал. Використовуючи
        фреймворки та бібліотеки, поєднюючи взаємодію клієнтської та серверної
        частин та бази данних. В основі клієнтської частини використовується
        React.js, в сервернії - Express.js, в базі данних - MongoDB. Сайт
        базується на запитах до сервера за допомогою бібліотеки axios. Всі
        запити є асинхронними та виконуються в @reduxjs/toolkit. З базою данних
        працюю за допомогою бібліотеки mongoose. Створив декілька схем (
        користувачів, постів, коментаріїв, діалогів), та зв'язок між ними, щоб
        логічно вирішувати відповідну задачу на стороні сервера. У backend
        частині використовую bcrypt для шифруввання пароля та jsonwebtoken для
        аутентифікації користувача. Для завантаження картинки на сервер
        використав multer. Для постійного з'єднання між сервером та клієнтом -
        socket.io на бекенді та socket.io-client на фронтенді ( чат та діалог ).
        Щоб сайт не був лише текстовому форматі користуюсь стилями
        використовуючи module, та Material UI. Також за допомогою останнього
        адаптував на пристрої з різним розширенням. Деплой бекенду зробив на
        платформу Render, фронтенду - на Netlify.
      </p>
      <p>
        <a
          href="https://github.com/svovka83/svovka-business-office-frontend"
          target="_blank"
          rel="noreferrer"
        >
          <i className={styles.text}>
            https://github.com/svovka83/svovka-business-office-frontend
          </i>
        </a>
      </p>
      <p>
        <a
          href="https://github.com/svovka83/svovka-business-office-backend"
          target="_blank"
          rel="noreferrer"
        >
          <i className={styles.text}>
            https://github.com/svovka83/svovka-business-office-backend
          </i>
        </a>
      </p>
    </div>
  );
};

export default About;
