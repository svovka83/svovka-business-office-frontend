import { motion } from "framer-motion";

import styles from "./Start.module.css";
import Collapsible from "../FramerMotion/MotionOne/Collapsible";

const Start = () => {
  return (
    <div className={styles.start}>
      <h1>Welcome!</h1>

      <div className={styles.content}>
        <Collapsible title="Відкрити опис">
          <p className={styles.text}>
            Мета розробки проєкту спрямована на його функціонал. Використовуючи
            фреймворки та бібліотеки, поєднюючи взаємодію клієнтської та
            серверної частин та бази данних. В основі клієнтської частини
            використовується React.js, в сервернії - Express.js, в базі данних -
            MongoDB. Сайт базується на запитах до сервера за допомогою
            бібліотеки axios. Всі запити є асинхронними та виконуються в
            state-management @reduxjs/toolkit. З базою данних працюю за
            допомогою бібліотеки mongoose. Створив декілька схем ( користувачів,
            постів, коментаріїв, діалогів), та зв'язок між ними, щоб логічно
            вирішувати відповідну задачу на стороні сервера. У backend частині
            використовую bcrypt для шифруввання пароля та jsonwebtoken для
            аутентифікації користувача. Для завантаження картинки на сервер
            використав multer. Для постійного з'єднання між сервером та клієнтом
            - socket.io на бекенді та socket.io-client на фронтенді ( чат та
            діалог ). Щоб сайт не був лише текстовому форматі користуюсь стилями
            використовуючи module, бібліотеками react-animate-on-scroll,
            animate.css та Material UI. Також за допомогою останнього адаптував
            на пристрої з різним розширенням. Деплой бекенду зробив на платформу
            Render, фронтенду - на Netlify.
          </p>
          <p className={styles.ps}>
            P.S. При реєстрації у полі пошти прописана валідація лише isEmail,
            тому можна вводити фейковий.
          </p>
          <p className={styles.ps}>
            P.S. Також на стартовій сторінці буде link на github repositories.
          </p>
        </Collapsible>
        <motion.img
          className={styles.start_image}
          src="DSC00237.JPG"
          alt="start content"
          animate={{ rotateX: 360 }}
          transition={{
            delay: 2,
            duration: 8,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      </div>
    </div>
  );
};

export default Start;
