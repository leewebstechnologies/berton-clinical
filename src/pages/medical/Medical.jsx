import Footer from "../../components/footer/Footer";
import "./medical.css";
import medical from "../../images/medical_supplies.jpg";

const Medical = () => {
  return (
    <>
      <div className="medical">
        <img className="medical_image" src={medical} alt="medical" />
        <div className="texts">
          <br />
          <h2>Medical Supplies & Logistics</h2>
          <h5>Reliable Medical Products and Logistics From Start to Finish</h5>
          <img src="img/section-img.png" alt="line" />
          <div className="paragraph">
            <p>
              At Berton Clinical, we provide a comprehensive range of medical
              supplies and logistics services to ensure Healthcare,
              Pharmaceutical facilities and business entities have the products
              they need when they need them. We pride ourselves on delivering
              quality products and support for the entire supply chain process.
            </p>
            <br />
            <h5>Our Quality Commitment</h5>
            <p>
              We follow three principles when it comes to our medical supplies
              and logistics services:
            </p>
            <ol>
              <li>
                Procure products only from globally recognized manufacturers.
                Our inventory consists of medical consumables, equipment, and
                devices from brands that are renowned for their quality and
                safety.
              </li>
              <li>
                Expert logistics with temperature-controlled supply chain. Our
                logistics services include storage, transportation, and last
                mile delivery with strict adherence to temperature requirements
                for shipped products.
              </li>
              <li>
                Provide exceptional customer service and support. Our team works
                closely with your staff to understand product and delivery needs
                in order to meet expectations and optimise the supply chain.
              </li>
            </ol>
            <h5>Comprehensive Services From Start to Finish</h5>
            <p>
              With Berton Clinical as your medical supplies and logistics
              partner, you can have confidence. We will handle everything from
              procurement to delivery including:
            </p>
            <ol>
              <li>
                Sourcing and procurement of medical consumables, devices, and
                equipment
              </li>
              <li>Global inventory management and warehousing</li>
              <li>
                Temperature-controlled storage adhering to product
                specifications
              </li>
              <li>
                Packing, shipping, and transportation through preferred couriers
              </li>
              <li>racking and monitoring until final delivery</li>
              <li>24/7 order support and customer service</li>
            </ol>
            <p>
              Trust Berton Clinical for reliable, on-time medical supplies
              backed by our commitment to product quality and service. Contact
              us today to learn more about our capabilities.
            </p>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Medical;
