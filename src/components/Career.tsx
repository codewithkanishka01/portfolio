import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BTech (CSE)</h4>
                <h5>SRM Institute of Science and Technology, Chennai</h5>
              </div>
              <h3>2024-2028</h3>
            </div>
            <p>
              Pursuing Bachelor's in Computer Science. CGPA: 9.0. Strong foundation in Data Structures and Algorithms, and problem-solving. Solved 40+ problems on LeetCode.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary (12th)</h4>
                <h5>Academic Global School, UP</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed Higher Secondary education with a score of 75%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High School (10th)</h4>
                <h5>GN National Public School</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed High School education with a score of 90.01%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
