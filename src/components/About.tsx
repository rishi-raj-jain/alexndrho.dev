import styles from '@styles/modules/About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container container--section">
        <h2>About me</h2>
        <p className={styles.about__p}>
          My name is Alexander Gabriel Ho. I&apos;m a Full Stack Web Developer. I excel in creating
          and maintaining responsive websites that provide an excellent user experience. I&apos;m
          passionate about technology, user interface design, and everything that makes a computer
          operate.
        </p>
        <p className={styles.about__p}>
          My projects currently focus on the development of front-end applications using React and
          TypeScript. I am also interested in learning more about back-end development and
          cloud-based solutions. I typically base my projects on MERN stack, which consists
          primarily of MongoDB, Express, React, and Node.
        </p>
        <p className={styles.about__p}>
          In 2021, I started learning various programming languages and frameworks. My struggles
          with finding what technology to learn and how to learn it inspired me to learn more about
          the learning process itself. As I delved deeper, I realized that I was more interested in
          web development, I became fascinated with the idea of creating something that can be used
          by anyone with an internet connection.
        </p>
      </div>
    </section>
  );
};

export default About;
