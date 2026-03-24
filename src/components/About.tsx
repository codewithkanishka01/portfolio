import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me-avatar">
        <img src="/images/avatar.png" alt="Avatar" className="avatar-img" />
      </div>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          B.Tech student with a strong foundation in C++ and frontend web development, skilled in building responsive and interactive web applications using HTML, CSS, and JavaScript. Experienced in developing real-world projects with a focus on user experience and problem-solving. Currently seeking an internship opportunity to apply and enhance technical skills.
        </p>
      </div>
    </div>
  );
};

export default About;
