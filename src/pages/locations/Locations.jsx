import Footer from "../../components/footer/Footer";
import "./locations.css";
import location from "../../images/location.jpg";

const Locations = () => {
  return (
    <>
      <div className="locations">
        <img src={location} alt="loaction" />
        <div className="text">
          <br />
          <h2>Find Our Locations</h2>
          <h5>Berton Clinical's Global Reach</h5>
          <img src="img/section-img.png" alt="line" />
        </div>
        <div className="paragraph">
          <p>
            Headquartered in Fort Lauderdale, USA, Berton Clinical is
            strategically expanding our global footprint to better serve clients
            across international markets. Our mission to bring vital therapies
            to patients worldwide drives our commitment to establishing an
            on-the-ground presence in key regions.
          </p>
          <p>
            In addition to our headquarters in Florida, we have established
            subsidiary facilities strategically positioned to provide localized
            expertise and support:
          </p>
          <h5>Colombia</h5>
          <p>
            Our Latin America hub in Bogota serves as a strategic base for
            servicing clients across Central and South America, leveraging our
            team's deep regional knowledge.
          </p>
          <h5>Nigeria</h5>
          <p>
            Our African headquarters in Lagos enables us to meet the unique
            clinical research needs of the continent's rapidly emerging
            pharmaceutical markets with culturally attuned solutions.
          </p>
          <h5>China</h5>
          <p>
            Our Asia-Pacific office in Shanghai supports clients operating in
            China, Japan, South Korea, and Australia, providing locally nuanced
            guidance from seasoned regional experts.
          </p>
          <p>
            These strategic locations provide the infrastructure and specialized
            local talent required to directly operate in-country, a key
            differentiator. This on-the-ground presence empowers us to deeply
            understand the distinct market dynamics and regulatory landscapes of
            each region we serve.
          </p>
          <p>
            As we continue our strategic global expansion, Berton Clinical has
            plans to establish additional offices over the next 3-5 years in
            areas such as Europe and India to better support clinical
            development programs in the European Union, and further extend our
            Asia-Pacific capabilities.
          </p>
          <p>
            Our global scale combined with localized expertise allows us to
            provide customized clinical research solutions tailored to the
            unique cultural, regulatory and operational needs in the countries
            and regions where we operate. Berton Clinical's clients benefit from
            our ability to navigate global complexities while delivering
            locally-attuned service excellence.
          </p>
          <p>
            Partner with Berton Clinical and leverage our ever-expanding global
            reach backed by regional mastery. Contact us today to learn how our
            worldwide operational capabilities can propel your clinical
            development initiatives forward with unparalleled speed and success.
          </p>
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Locations;
