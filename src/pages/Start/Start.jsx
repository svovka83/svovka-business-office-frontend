import styles from "./Start.module.css";

const Start = () => {
  return (
    <div className={styles.start}>
      <h1>Welcome to site!</h1>
      <img
        className={styles.start_image}
        src="DSC00237.JPG"
        alt="start content"
      />
          <div className={styles.content}>
      <h1>Про сайт</h1>
      <p className={styles.text}>
        Мета розробки проєкту спрямована на його функціонал. Використовуючи
        фреймворки та бібліотеки, поєднюючи взаємодію клієнтської та серверної
        частин та бази данних. В основі клієнтської частини використовується
        React.js, в сервернії - Express.js, в базі данних - MongoDB. Сайт
        базується на запитах до сервера за допомогою бібліотеки axios, задіявши
        RestAPI. Всі запити є асинхронними та виконуються в @reduxjs/toolkit. З
        базою данних працюю за допомогою бібліотеки mongoose. Створив декікілька
        схем ( користувачів, постів, коментаріїв, діалогів), та зв'язок між
        ними, щоб логічно вирішувати відповідну задачу на стороні сервера. У
        backend частині використовую bcrypt для шифруввання пароля та
        jsonwebtoken для аутентифікації користувача. Для завантаження картинки
        на сервер використав multer. Для постійного з'єднання між сервером та
        клієнтом - socket.io на бекенді та socket.io-client на фронтенді ( чат
        та діалог ). Щоб сайт не був лише текстовому форматі користуюсь стилями
        використовуючи module, та Material UI. Також за допомогою останнього
        адаптував на пристрої з різним розширенням. Деплой бекенду зробив на
        платформу Render, фронтенду - на Netlify.
      </p>
      <p>
        <a className={styles.text} href="https://svovka-business-office.netlify.app/" target="_blank">
          <i >
            https://svovka-business-office.netlify.app/
          </i>
        </a>
      </p>
    </div>
    </div>
  );
};

export default Start;
