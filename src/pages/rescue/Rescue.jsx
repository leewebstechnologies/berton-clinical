import Footer from "../../components/footer/Footer";
import "./rescue.css";
import rescue from "../../images/rescue.jpg";

const Rescue = () => {
  return (
    <>
      <div className="rescue">
        <img src={rescue} alt="rescue" />
        <div className="texts">
          <br />
          <h2>Rescue Research - Save Studies</h2>
          <h5>Get Stalled Clinical Trials Back on Track</h5>
          <img src="img/section-img.png" alt="line" />
        </div>
        <div className="paragraph">
          <p>
            Is your clinical trial facing unexpected delays? Are milestones
            slipping through the cracks with your current research partner? Look
            no further than Berton Clinical for expert rescue research services
            designed to swiftly get your studies back on course.
          </p>
          <p>
            Every day of delay in clinical trials translates to lost time and
            resources. That's why our dedicated team intervenes promptly to
            revitalize your development program and ensure efficient execution.
          </p>
          <h5>
            As a seasoned Contract Research Organization (CRO), we offer
            tailored support based on your study's current status
          </h5>
          <p>
            <b>Expedited Startup Assistance:</b> For trials in the startup
            phase, we streamline site identification, contracting, and
            activation processes to expedite the enrollment of the first
            subject.
          </p>
          <p>
            <b>Enhanced Recruitment Strategies:</b> If enrollment is lagging, we
            leverage our extensive site network and implement targeted promotion
            to boost recruitment efforts.
          </p>
          <p>
            <b>Data Resolution Solutions:</b> Addressing data issues head-on,
            our experts perform data migration or cleaning to seamlessly realign
            data collection efforts.
          </p>
          <p>
            <b>Rescue Monitoring Initiatives:</b> For trials in need of rescue
            monitoring, our experienced Clinical Research Associates (CRAs)
            conduct swift site visits and address protocol deviations promptly.
          </p>
          <p>
            <b>Focused Study Completion Support:</b> As your study nears
            completion, we intensify our focus on resolving outstanding queries,
            managing adverse events, and ensuring meticulous documentation for
            faster database lock.
          </p>
          <br />
          <p>
            Regardless of the stage at which your study stalled, Berton Clinical
            possesses the experience and resources necessary to stabilize
            operations immediately. We then work diligently to optimize
            processes, mitigating the risk of future disruptions.
          </p>
          <p>
            Don't let poor trial performance hinder your critical momentum. Our
            proactive study rescue services are designed to tackle delays and
            challenges head-on, ensuring that your development program continues
            to advance seamlessly. Let our expert team get your trial back on
            track today.
          </p>
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Rescue;
