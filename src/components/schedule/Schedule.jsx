import "./schedule.css";

const Schedule = () => {
  return (
    <>
      <section className="schedule">
        <div className="container">
          <div className="schedule-inner">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 ">
                {/* single-schedule */}
                <div className="single-schedule first">
                  <div className="inner">
                    <div className="icon">
                      <i className="fa fa-ambulance" />
                    </div>
                    <div className="single-content">
                      <h4>Emergency Cases</h4>
                      <p>
                        In a medical emergency, time is of the essence – and so
                        is a correct diagnosis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* single-schedule */}
                <div className="single-schedule middle">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-prescription" />
                    </div>
                    <div className="single-content">
                      <h4>Doctors Timetable</h4>
                      <ul className="time-sidual">
                        <li className="day">
                          Monday - Friday <span>8.00-20.00</span>
                        </li>
                        <li className="day">
                          Saturday - Sunday <span>9.00-18.30</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                {/* single-schedule */}
                <div className="single-schedule last">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-ui-clock" />
                    </div>
                    <div className="single-content">
                      <h4>Opening Hours</h4>
                      <ul className="time-sidual">
                        <li className="day">
                          Monday - Friday <span>8.00-20.00</span>
                        </li>
                        <li className="day">
                          Saturday - Sunday <span>9.00-18.30</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Schedule;
