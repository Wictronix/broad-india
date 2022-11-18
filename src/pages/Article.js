import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";
import RecentNews from "../components/RecentNews";

export default function Article() {
  const [isMobile, setIsMobile] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  return (
    <div>
      <NavbarComp />
      <Container
        style={{ margin: isMobile ? "1rem" : "10rem", marginTop: "8rem" }}
      >
        {id === "1" && (
          <div>
            <div className="display-5  text-center">Job and Career</div>
            <br />
            <img
              className="shadow"
              src="https://broadusa.com/broad/wp-content/uploads/2020/11/trainning-800x600.jpg"
              alt="img"
              style={{ width: "100%", objectFit: "cover" }}
            />
            <br />
            <br />
            <div>
              <strong>Job Title:</strong>
              <br /> HVAC Engineers (Hackensack, NJ) <br />
              <br />
              <strong>Job duties:</strong>
              <br />
              <ul>
                <li>Install/inspect/analyze large chillers/HVAC system</li>
                <li>
                  Service/diagnose/analyze/repair products/system with
                  experience in
                </li>
                <li>
                  chiller & CCHP, HVAC, green energy technology. BS+2 yrs, or
                  AS+5 yrs experience.
                </li>
              </ul>
              <br />
              <br />
              <strong>Email: </strong>
              <br />
              Broad U.S.A. Inc. at service@broadusa.com <br />
              <br />
              <strong>About us</strong> <br />
              BROAD U.S.A.is a privately held company headquarter in New Jersey,
              supporting the sales and service to our customers in North
              America. Relying on our innovative and environmental-friendly
              technology, BROAD U.S.A commits itself to optimize energy
              efficiency for clients in Commercial, Civil and Industrial markets
              since 1988. Broad U.S.A. supplies non-electric central air
              conditioning powered by natural gas and waste heat with packaged
              water distribution system, 2 times more energy efficient than
              traditional central air conditioning.
            </div>
          </div>
        )}
        {id === "2" && (
          <div>
            <div className="display-5 text-center">Waste water treatment</div>
            <br />
            <img
              className="shadow"
              src="https://broadusa.com/broad/wp-content/uploads/2020/04/newsWhite-Paper-on-Waste-Wa.jpg"
              alt="img"
              style={{ width: "100%", objectFit: "cover" }}
            />
            <br />
            <br />
            <br />
            <br />
            <div>
              <p>
                There are mandatory needs and methods informed to reduce thermal
                impacts from municipal wastewater treatment plant discharges to
                surface water. The goal set for the reduction in effluent
                temperature from the Waste Water Treatment Plants is to help
                maintain appropriate temperature ranges to support their native
                and natural animals and plants.
              </p>
              <h4>Cooling Need:</h4>
              In November 2006, the Washington Department of Ecology adopted
              temperature criteria in the surface water quality standards, found
              at Chapter 173-201A, Washington Administrative Code (WAC). The
              temperature criteria limit the allowable temperature increase of
              the receiving water due to human-caused impacts, including point
              source discharges. In that event, municipalities would need to
              find ways to reduce the temperature of the treatment plant
              effluent before discharge to the receiving water.
              <br />
              <br />
              <h4>Importance of Temperature:</h4>
              Water is a finite resource and the management to ensure that the
              water quality remains sufficient to support the uses required of
              each stream, river, and lake. Improvements in wastewater treatment
              in the U.S. over the years have helped reduce the contamination of
              freshwater and marine water. Increasing understanding of aquatic
              habitats has shown that physical properties such as temperature
              and dissolved oxygen are also very important to aquatic organisms
              as are the chemical or biological pollutants. Water discharges
              from a variety of sources can add heat to the stream. These
              sources include stormwater runoff, industrial discharges,
              wastewater treatment plant effluent, and irrigation return flows.
              <br />
              <br />
              <h4>Typical Temperature Requirement at a WWT Plant:</h4>
              “A treatment plant processes 1.0 million gallons per day (mgd) and
              produces an effluent at 75F. The plant is required to attain a
              discharge temperature of 64F. A mechanical chiller would cost in
              the range of $275,000 to $660,000. Operating costs of cooling are
              estimated in the range of $55,000 to $110,000 per year.”
            </div>
          </div>
        )}
        {id === "3" && (
          <div>
            <div className="display-5 text-center">Waste water treatment</div>
            <br />
            <img
              className="shadow"
              src="https://broadusa.com/broad/wp-content/uploads/2020/04/newsNatural-Refrigerant-H2.jpg"
              alt="img"
              style={{ width: "100%", objectFit: "cover" }}
            />
            <br />
            <br />
            <br />
            <br />
            <div>
              Buildings account for most electricity consumed in the world
              today, with air conditioning systems within buildings accounting
              for over 30% of total consumption1. Compared to conventional
              electric air conditioning, natural gas thermal absorption
              technology, also called non-electric technology, is gaining favor
              by energy services providers, facilities managers, and building
              owners, because of its economic and environmental benefits.
              Utilization of natural gas-driven absorption technology helps
              lower electricity use in air conditioning improves occupant
              happiness and helps mitigate the impacts of buildings on local
              environments and climate change².
              <br />
              <br />
              <h4>Cleaner Fuel</h4>
              Rather than using conventional electric-powered air conditioning,
              an absorption chiller using cleaner natural gas as the thermal
              energy source has immediate positive environmental benefits.
              According to the United States EPA, natural gas produces 50% less
              carbon dioxide (CO2) than coal, and 32% less than oil3. What's
              more, new natural gas-powered absorption technology integrates
              seamlessly with renewable energy resources—including solar and
              bioenergy—providing the potential to further curb greenhouse gas
              emissions. For a 540,000 square-foot building, replacing electric
              chillers with natural gas absorption chillers equals removing the
              same amount of CO2 emissions as 33,000 trees absorb annually.
              <br />
              <br />
              <h4>CCHP (Combined Cooling, Heating, and Power)</h4>
              Two-thirds of the energy used to produce electricity at most power
              plants in the United States is wasted in the form of heat
              discharged to the atmosphere. By recovering this wasted heat, CCHP
              systems typically achieve total system efficiencies of 60% to 80%
              while producing both electricity and usable thermal energy3.
              Absorption technology captures and utilizes waste heat that would
              otherwise be wasted, generating cooling and heating and
              substantially reducing fuel consumption, greenhouse gas, and other
              pollutant emissions. The University of Maryland Upper Chesapeake
              Medical Center is one example demonstrating the technology, where
              absorption chillers offset approximately 34% of fuel consumption
              versus conventional electric absorption and steam production. The
              project is an Energy Star CHP Award Winner in 2016 for greatly
              reducing the emission of air pollutants, including an estimated
              4,700 tons of CO2 annually, and saving the University an estimated
              $300,000 every 5 years5.
              <br />
              <br />
              <h4>Waste Heat Recovery and Beyond</h4>
              Natural gas absorption technology has significant economic and
              environmental benefits. By recovering and recycling waste heat
              from all kinds of industrial processes, and with heat pump
              applications that utilize the technology for space and district
              heating, energy management professionals meet demands from climate
              change. With the addition of absorption heat pumps at Biomass
              heating plant at Horsens, Denmark, the complete system utilizes
              the waste heat from the flue gas out of biomass hot water boiler
              to provide heating water, dramatically decreasing the flue gas
              temperature to the atmosphere and avoiding nearly 2,400 tons of
              CO2 emission per year.
              <br />
              <br />
              <h4>Concluding Remarks</h4>
              BROA D USA—the domestic arm of the largest absorption chiller
              manufactured in the world—believes in the technology, “For
              Humanity's Future.” Natural gas absorption technology has
              demonstrated benefits in energy efficiency, economics,
              reliability, and environment, while addressing the challenges
              posed by climate change.
            </div>
          </div>
        )}
        {id === "more" && (
          <div>
            <RecentNews />
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
}
