import React from "react";
import { Container } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";
// import RecentNews from "../components/RecentNews";

export default function Article() {
	const [isMobile, setIsMobile] = React.useState(true);
	const { id } = useParams();

	React.useEffect(() => {
		setIsMobile(window.innerWidth < 768);
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<NavbarComp />
			<Container style={{ marginTop: "10rem" }}>
				{id === "1" && (
					<div>
						<img
							src="http://en.broad.com/Storage/uploads/201512/20151231095859_7753.jpg"
							alt="article"
							style={{ width: "100%" }}
						/>
						<img
							src="http://en.broad.com/Storage/uploads/201512/20151231095905_2666.jpg"
							alt="article"
							style={{ width: "100%" }}
						/>
						<img
							src="http://en.broad.com/Storage/uploads/201512/20151231095910_1494.jpg"
							alt="article"
							style={{ width: "100%" }}
						/>
					</div>
				)}
				{id === "2" && (
					<div>
						<div className="display-5 text-center">Absorption Chillers</div>
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
								There are mandatory needs and methods informed to reduce thermal impacts from municipal wastewater
								treatment plant discharges to surface water. The goal set for the reduction in effluent temperature from
								the Waste Water Treatment Plants is to help maintain appropriate temperature ranges to support their
								native and natural animals and plants.
							</p>
							<h4>Cooling Need:</h4>
							<p>
								In November 2006, the Washington Department of Ecology adopted temperature criteria in the surface water
								quality standards, found at Chapter 173-201A, Washington Administrative Code (WAC). The temperature
								criteria limit the allowable temperature increase of the receiving water due to human-caused impacts,
								including point source discharges. In that event, municipalities would need to find ways to reduce the
								temperature of the treatment plant effluent before discharge to the receiving water.
								<br />
								<br />
							</p>
							<h4>Importance of Temperature:</h4>
							<p>
								Water is a finite resource and the management to ensure that the water quality remains sufficient to
								support the uses required of each stream, river, and lake. Improvements in wastewater treatment in the
								U.S. over the years have helped reduce the contamination of freshwater and marine water. Increasing
								understanding of aquatic habitats has shown that physical properties such as temperature and dissolved
								oxygen are also very important to aquatic organisms as are the chemical or biological pollutants. Water
								discharges from a variety of sources can add heat to the stream. These sources include stormwater
								runoff, industrial discharges, wastewater treatment plant effluent, and irrigation return flows.
								<br />
								<br />
							</p>
							<h4>Typical Temperature Requirement at a WWT Plant:</h4>
							<p>
								“A treatment plant processes 1.0 million gallons per day (mgd) and produces an effluent at 75F. The
								plant is required to attain a discharge temperature of 64F. A mechanical chiller would cost in the range
								of $275,000 to $660,000. Operating costs of cooling are estimated in the range of $55,000 to $110,000
								per year.”
							</p>
						</div>
					</div>
				)}
				{id === "3" && (
					<div>
						<div className="display-5 text-center">Environment Friendly</div>
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
							<p>
								Buildings account for most electricity consumed in the world today, with Air Conditioning systems within
								buildings accounting for over 30% of total consumption1. Compared to conventional electric Air
								Conditioning, natural gas thermal absorption technology, also called non-electric technology, is gaining
								favor by energy services providers, facilities managers, and building owners, because of its economic
								and environmental benefits. Utilization of natural gas-driven absorption technology helps lower
								electricity use in Air Conditioning improves occupant happiness and helps mitigate the impacts of
								buildings on local environments and climate change².
								<br />
								<br />
							</p>
							<h4>Cleaner Fuel</h4>
							<p>
								Rather than using conventional electric-powered Air Conditioning, an absorption chiller using cleaner
								natural gas as the thermal energy source has immediate positive environmental benefits. According to the
								United States EPA, natural gas produces 50% less carbon dioxide (CO2) than coal, and 32% less than oil3.
								What's more, new natural gas-powered absorption technology integrates seamlessly with renewable energy
								resources—including solar and bioenergy—providing the potential to further curb greenhouse gas
								emissions. For a 540,000 square-foot building, replacing electric chillers with natural gas absorption
								chillers equals removing the same amount of CO2 emissions as 33,000 trees absorb annually.
								<br />
								<br />
							</p>
							<h4>CCHP (Combined Cooling, Heating, and Power)</h4>
							<p>
								Two-thirds of the energy used to produce electricity at most power plants in the United States is wasted
								in the form of heat discharged to the atmosphere. By recovering this wasted heat, CCHP systems typically
								achieve total system efficiencies of 60% to 80% while producing both electricity and usable thermal
								energy3. Absorption technology captures and utilizes waste heat that would otherwise be wasted,
								generating cooling and heating and substantially reducing fuel consumption, greenhouse gas, and other
								pollutant emissions. The University of Maryland Upper Chesapeake Medical Center is one example
								demonstrating the technology, where absorption chillers offset approximately 34% of fuel consumption
								versus conventional electric absorption and steam production. The project is an Energy Star CHP Award
								Winner in 2016 for greatly reducing the emission of air pollutants, including an estimated 4,700 tons of
								CO2 annually, and saving the University an estimated $300,000 every 5 years5.
								<br />
								<br />
							</p>
							<h4>Waste Heat Recovery and Beyond</h4>
							<p>
								Natural gas absorption technology has significant economic and environmental benefits. By recovering and
								recycling waste heat from all kinds of industrial processes, and with heat pump applications that
								utilize the technology for space and district heating, energy management professionals meet demands from
								climate change. With the addition of absorption heat pumps at Biomass heating plant at Horsens, Denmark,
								the complete system utilizes the waste heat from the flue gas out of biomass hot water boiler to provide
								heating water, dramatically decreasing the flue gas temperature to the atmosphere and avoiding nearly
								2,400 tons of CO2 emission per year.
								<br />
								<br />
							</p>
							<h4>Concluding Remarks</h4>
							<p>
								BROA D USA—the domestic arm of the largest absorption chiller manufactured in the world—believes in the
								technology, “For Humanity's Future.” Natural gas absorption technology has demonstrated benefits in
								energy efficiency, economics, reliability, and environment, while addressing the challenges posed by
								climate change.
							</p>
						</div>
					</div>
				)}
				{id === "4" && (
					<div>
						<div className="display-5 text-center">The World's Top 25 Eco-Innovators</div>
						<br />
						<img
							className="shadow"
							src="https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(68)(134).jpg"
							alt="img"
							style={{ width: "100%", objectFit: "cover" }}
						/>
						<div>
							<br />
							<br />
							<h4>1. Elon Musk CEO, Tesla Motors</h4>
							<p>
								The 42-year-old co-founder of the luxury electric-car maker is perhaps Wall Street's favorite innovator
								since Steve Jobs. Over the past year his now- profitable company's stock rocketed some 275%. And Musk's
								popular, all-electric Model S, a five-seater with a $69,900 sticker price, has put the cool into
								electric cars. A Model X crossover utility vehicle is in the works. Tesla TSLA -1.47% , based in Palo
								Alto, is expanding into Europe and Musk hopes to start selling his EVs in China in a few years. In the
								meantime, he plans to build a $5 billion lithium-ion battery plant -- the world's largest -- in
								California, hoping to bring the price of batteries down. As if electric cars weren't enough to keep him
								busy, Musk, who helped build PayPal and founded space transport company SpaceX, is also the chairman of
								the fast-growing residential solarpower installer, SolarCity (see No. 3), run by his cousins.
							</p>
							<h4>2. Tony Fadell CEO, Nest</h4>
							<p>
								The product design star, 45, who helped create the iPod while at Apple, has put the smart into "smart
								grid" at Nest, which he founded four years ago. The company's innovative thermostats use intelligent
								automation to learn your habits and adjust the heating and cooling in your home accordingly--saving
								money and conserving resources in the process. In January, Google GOOG -0.28% agreed to buy Nest for
								$3.2 billion, a strong endorsement by the search giant of Fadell's vision of energy efficiency.
							</p>
							<h4>3. Lyndon and Peter Rive CEO and CTO, SolarCity</h4>
							<p>
								The Rive brothers -- Lyndon, 37, and Peter, 40 -- have seen shares of their fast-growing solar company
								soar more than 100% over the past year. SolarCity SCTY-0.87% , with sales growing at a 30% annual rate,
								is a pioneer in solar-leasing programs. In December the company unveiled an energy storage system for
								businesses using battery technology from Tesla, which happens to be run by the Rive brothers' cousin and
								SolarCity's chairman, Elon Musk.
							</p>
							<h4>4. David Crane CEO, NRG Energy</h4>
							<p>
								The leader of the $11 billion NRG NRG -0.58% is rolling out a "home energy" program featuring a Dean
								Kamen-designed Stirling engine, which converts natural gas and other fuels to heat, hot water, or
								electricity. When combined with solar, the system -- which should move out of beta later this year --
								could allow homeowners to live off the grid. Crane, 55, has also started to sell a "solar canopy," a
								gazebo-like structure that can bring both shade and solar power to your backyard pool, car park, or
								yard.
							</p>
							<h4>5. Lisa Jackson VP of environmental initiatives, Apple</h4>
							<p>
								The former head of the U.S. Environmental Protection Agency, who reports directly to CEO Tim Cook, is
								working to transform the computer giant into an environmental leader. Jackson, 52, is overseeing the
								company's effort to run 100% of its facilities on renewable power. She is also working to address the
								problem of electronic waste. As of late April, every Apple AAPL 0.59% retail store will now take back
								any Apple products for free and recycle them.
							</p>
							<h4>6. Michael Bloomberg, Tom Steyer, and Hank Paulson</h4>
							<p>
								Former N.Y.C. mayor, hedge fund titan, ex-treasury secretary This power trio joined forces in the past
								year to produce a report called "Risky Business," due this summer, that will detail the risks that
								climate change poses to corporations. Former New York mayor and mega-billionaire Bloomberg, 72, also
								gets points for a $50 million donation to the Sierra Club (a four-year gift, which kicked off in 2011)
								to support its campaign to shut down coal plants in the U.S. Steyer, 56, the retired billionaire founder
								of $20 billion hedge fund Farallon Capital Management, has become active in green politics. He has
								pledged to raise $50 million (he will kick in another $50 million of his own money) to combat
								climate-change-denying politicians in the upcoming midterm elections. And through his Paulson Institute,
								former Goldman Sachs CEO and ex- Treasury Secretary Paulson, 68, is leading efforts in China to help
								design more sustainable cities.
							</p>
							<h4>7. Dan Yates and Alex Laskey CEO, President, Opower</h4>
							<p>
								Yates, 36, and Laskey, 37, co-founded the software company, which collects energy-use data on millions
								of homes around the world and partners with 93 utilities in eight countries. It went public OPWR in
								April and is now valued at $1 billion. Opower's big idea: Tell homeowners how much energy their
								neighbors are using to motivate them to use less.
							</p>
							<h4>8. Zhang Yue Chairman, BROAD Group</h4>
							<p>
								As chairman of China's BROAD Group, Zhang has become a billionaire selling energy-efficient cooling
								systems to commercial buildings. He figures that China's urbanization drive can't be stopped, but it can
								be made more sustainable. His Sky City project, if built, will stand 838 meters (2,750 feet) tall, 10
								meters higher than the current record holder, the Burj Khalifa in Dubai. (The project has been plagued
								by bureaucratic delays.) Zhang says he can construct Sky City, which he broke ground on last summer in
								the city of Changsha in southern China, by the end of 2014. (The Burj Khalifa took five years to build.)
								Why so quickly? Because his building is prefab. Zhang has already built a 30-story prefab hotel in 15
								days, in the process greatly reducing material waste and travel back and forth from the construction
								site. Sky City will include apartments, offices, stores, restaurants, and even schools so that residents
								can live, work, and play in the tower without battling -- or adding to -- the smog outside. It could be
								the world's tallest symbol of sustainable thinking.
							</p>
							<h4>9. Bill McKibben President, 350.org</h4>
							<p>
								The author and environmental activist, 53, has led the fight against the Keystone XL pipeline project in
								the U.S. And through the nonprofit he founded, 350.org, he has inspired divestment campaigns at more
								than 350 colleges and universities, urging them to drop investments in oil and other fossil-fuel
								companies. Since 2008, McKibben and 350.org have helped coordinate over 20,000 climate demonstrations in
								every country except North Korea.
							</p>
							<h4>10. Ellen MacArthur Founder, Ellen MacArthur Foundation</h4>
							<p>
								Nine years ago yachtswoman Ellen MacArthur achieved what at the time was the fastest solo
								circumnavigation of the globe, sailing more than 26,000 miles in just over 71 days. After retiring from
								racing in 2009, MacArthur, now 37, created a foundation to promote her vision of a circular economy,
								where everything is reused or put safely back to earth. She has signed up 100 companies -- such as
								Cisco, Philips, and Unilever -- to share best practices and spread the word.
							</p>
							<h4>11. Greg Abel CEO, MidAmerican Energy Holdings</h4>
							<p>
								Few people realize that Warren Buffett is one of the nation's biggest investors in green energy. His
								point man is Abel, 51, whose utility holding company is 89.8% owned by Berkshire Hathaway BRKA . When a
								$1.9 billion wind-farm expansion is finished in 2015, 39% of MidAmerican's energy will come from wind
								turbines.
							</p>
							<h4>12. Gina McCarthy Head of U.S. EPA</h4>
							<p>
								With Congress stalled on climate legislation, McCarthy, 60, is taking the point on global warming for
								the Obama administration. That means cracking down on Big Coal. Emissions regulations about to be put in
								place will effectively keep new coal plants from being built. McCarthy is pushing new emissions rules
								that would likely accelerate the closing of existing plants. In April she told the Daily Show's Jon
								Stewart that climate change is "the biggest public health challenge that we face."
							</p>
							<h4>13. Frans van Houten CEO, Philips</h4>
							<p>
								A leader in the LED lighting revolution, the 54-year-old head of the Dutch electronics giant has already
								built a $3.9 billion business out of the new technology. In addition to selling LEDs the traditional
								way, Philips PHG leases entire "Lighting as a Service" LED systems. The idea addresses a flaw in the LED
								business model: How do you make money when your product lasts 15 years? Plus, Philips can come back and
								sell customers new, more efficient technology as it comes to market.
							</p>
							<h4>14. James Cameron Movie director</h4>
							<p>
								In April the Avatar and Titanic director debuted a Showtime documentary series called Years of Living
								Dangerously that takes a hard look at the science behind the very real threats posed by climate change.
								Employing his power to wow, Cameron, 59, shot footage everywhere from Greenland to Indonesia to the
								drought- stricken American West, and recruited celebrity correspondents ranging from Arnold
								Schwarzenegger to Matt Damon to President Obama.
							</p>
							<h4>15. Tom Siebel CEO, C3 Energy</h4>
							<p>
								Siebel, 61, the billionaire entrepreneur who founded software giant Siebel Systems, is back with
								big-data startup C3 Energy. The company, which has invested $150 million in its technology, crunches
								petabytes of data -- 6 billion transactions an hour -- from utilities, buildings, weather services, and
								other sources. Customers of utilities that hire C3 can perform energy audits and make adjustments in
								real time, saving money and reducing carbon emissions.
							</p>
							<h4>16. Boudewijn Poelmann CEO, Novamedia</h4>
							<p>
								Based in the Netherlands, Poelmann's company runs five charitable lotteries ac ross Europe, all of which
								give about half their proceeds to charity. Taken together, they handed out $760 million last year,
								making the group the world's second-largest private donor (the Gates Foundation was the first). Poelmann
								created the format in 1989 with the Dutch National Postcode Lottery. In 2013, it alone gave $420 million
								to 95 charities in fields such as conservation and environmental protection.
							</p>
							<h4>17. Nancy Pfund Managing partner, DBL Investors</h4>
							<p>
								Pfund, 58, is perhaps the most successful venture capitalist with the lowest profile. As the founder of
								San Francisco's DBL, she champions eco-friendly companies that also appeal to Wall Street. Pfund was an
								early investor in both Tesla Motors and SolarCity, and saw both stocks take off in 2013.
							</p>
							<h4>18. Michael Farkas CEO, Car Charging Group</h4>
							<p>
								Many operators of electric-car charging stations have hit hard times. That's music to the ears of the
								42- year-old Farkas. His Car Charging Group has been rolling up the industry. Over the past year he's
								bought four competitors, making his company the largest operator of EV charging infrastructure in the
								U.S. In his latest deal Farkas acquired the Blink Network assets of the bankrupt former industry leader,
								ECOtality, for pennies on the dollar. It's too soon to tell if his bold expansion plan will pay off, but
								give him points for chutzpah.
							</p>
							<h4>19. Jay Whitacre Founder, Aquion Energy</h4>
							<p>
								The Carnegie Mellon engineering professor, 42, invented a new type of long-life saltwater battery that
								is both low-cost and nontoxic. The technology can be used by utilities to store electricity from sources
								like solar and wind -- balancing out the power grid when, say, the wind stops blowing. Whitacre's
								company, Aquion Energy, has raised over $100 million from investors such as Bill Gates and VC powerhouse
								Kleiner Perkins and is shipping products to customers such as industrial giant Siemens.
							</p>
							<h4>20. Nat Simons President, Sea Change Foundation</h4>
							<p>
								The son of legendary hedge fund manager and Renaissance Technologies founder Jim Simons, he manages
								billions himself as leader of San Francisco's Meritage Group. Simons, 47, is also a leading
								philanthropist focused on climate change. His Sea Change Foundation donated $41 million to the cause in
								2013. And he recently created a clean-tech venture fund through his family office, Elan Management.
								Called Prelude Ventures, it will invest in clean energy.
							</p>
							<h4>21. Coert Zachariasse Real estate developer</h4>
							<p>
								An economist by training, Zachariasse, 47, is the real estate developer behind the Park 2020 project,
								outside Amsterdam in the Netherlands. So far he's completed half the project -- six office buildings
								totaling 600,000 square feet -- including an office for FIFPro, the international soccer players union,
								and a new headquarters for Plantronic. Zachariasse's buildings generate more energy than they use, have
								rooftop farms, and are constructed of recyclable materials.
							</p>
							<h4>22. Anders Runevad CEO, Vestas</h4>
							<p>
								Earlier this year Danish wind-power giant Vestas unveiled the world's largest wind turbine -- a
								305-foot- tall behemoth that can generate eight megawatts of electricity. For 54-year-old CEO Runevad,
								who joined last fall from Ericsson, it's a fun chapter in a big comeback story for the company. Over the
								past year its shares are up some 400%. Now Vestas is mapping earth's wind corridors to determine where
								in the developing world people can benefit most from new deployment of turbines.
							</p>
							<h4>23. Joel Dobberpuhl CEO, Jetstream Capital</h4>
							<p>
								After 20 years as a mutual fund and hedge fund manager in Nashville, Dobberpuhl, 47, recently retired
								from running other people's money and decided to focus on clean-tech investing through his family
								office. A part-owner of the Nashville Predators hockey franchise, he's made a power play already in 2014
								by pledging $26 million through his foundation to the Nature Conservancy in March and leading a $70
								million round of funding in April for solar installer Sungevity.
							</p>
							<h4>24. Wang Chuanfu Chairman, BYD</h4>
							<p>
								The Chinese battery innovator is getting traction for his electric vehicles. In March, Wang, 48,
								received an order from the city of Dalian for 1,200 electric buses and from Nanjing for another 1,000.
								Next stop: the U.S. Los Angeles last year placed a small order of 25 buses, and recent testing by New
								York City's transit authority found that BYD's buses can run for an impressive 30 or so hours between
								charges. A big U.S. order would no doubt please BYD investor Warren Buffett.
							</p>
							<h4>25. Richard Kauffman Green Czar, New York State</h4>
							<p>
								Appointed in 2013 by New York Gov. Andrew Cuomo to oversee the state's energy policy, the 59-year-old
								Kauffman, a onetime partner at Goldman Sachs and exec at Morgan Stanley, is putting together a $1
								billion "green bank" to catalyze more private investment in renewables across the state.
							</p>
						</div>
						<br />
					</div>
				)}
				{id === "more" && (
					<div>
						<div className="display-5 text-center mb-5">Articles</div>
						<div className="row" style={{ marginInline: isMobile ? 0 : "5rem" }}>
							<div className="col-md-4">
								<div className="card mb-2" style={{ height: "560px" }}>
									<div className="card-body">
										<img
											src="https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
											alt=""
											style={{
												width: "100%",
												height: "16rem",
												objectFit: "cover",
											}}
										/>
										<h4
											style={{
												marginBlock: "1rem",
												fontWeight: "600",
											}}>
											Sustainablility in Action
										</h4>
										<p>
											Use as a basis for class discussion rather than to illustrate either effective or ineffective
											handling of an administrative situation. A real approach to sustainable development for higher
											life quality and lower impact on the environment.
										</p>
										<a
											href="http://en.broad.com/Storage/article/d86c3db4c155464b9fe10dbf82db7c7f.pdf"
											className="btn btn-primary">
											Know more
										</a>
									</div>
								</div>
							</div>

							<div className="col-md-4">
								<div className="card mb-2" style={{ height: "560px" }}>
									<div className="card-body">
										<img
											src="https://m.economictimes.com/thumb/msid-69127844,width-1200,height-900,resizemode-4,imgsize-347903/construction-site-generators-types-features-of-generators-used-at-construction-sites.jpg"
											alt=""
											style={{
												width: "100%",
												height: "16rem",
												objectFit: "cover",
											}}
										/>
										<h4
											style={{
												marginBlock: "1rem",
												fontWeight: "600",
											}}>
											Rethink Conventinal Construction{" "}
										</h4>
										<p>
											Traditional construction practices can be costly, inefficient, and detrimental on the environment,
											In this article, Zhang Yue, CEO, BROAD group reflectes how industry can change.
										</p>
										<Link to="/article/1" className="btn btn-primary">
											Know more
										</Link>
									</div>
								</div>
							</div>

							<div className="col-md-4">
								<div className="card mb-2" style={{ height: "560px" }}>
									<div className="card-body">
										<img
											src="https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(68)(134).jpg"
											alt=""
											style={{
												width: "100%",
												height: "16rem",
												objectFit: "cover",
											}}
										/>
										<h4
											style={{
												marginBlock: "1rem",
												fontWeight: "600",
											}}>
											World's Top 25 eco Innovators{" "}
										</h4>
										<p>
											Fortune presents our inaugural list of the World's Top 25 Eco-Innovators. To identify them, we
											surveyed dozens of experts in the sustainability world. Here's the report article.
										</p>
										<Link to="/article/4" className="btn btn-primary">
											Know more
										</Link>
									</div>
								</div>
							</div>

							<div className="col-md-4">
								<div className="card mb-2" style={{ height: "560px" }}>
									<div className="card-body">
										<img
											src="https://broadusa.com/broad/wp-content/uploads/2020/04/newsWhite-Paper-on-Waste-Wa.jpg"
											alt=""
											style={{
												width: "100%",
												height: "16rem",
												objectFit: "cover",
											}}
										/>
										<h4
											style={{
												marginBlock: "1rem",
												fontWeight: "600",
											}}>
											Absorption Chillers
										</h4>
										<p>
											There are mandatory needs and methods informed to reduce thermal impacts from municipal wastewater
											treatment plant discharges to surface water. The goal set for the reduction in effluent
											temperature from the Waste Water Treatment Plants
										</p>
										<Link to="/article/2" className="btn btn-primary">
											Read more
										</Link>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="card mb-2" style={{ height: "560px" }}>
									<div className="card-body">
										<img
											src="https://broadusa.com/broad/wp-content/uploads/2020/04/newsNatural-Refrigerant-H2.jpg"
											alt=""
											style={{
												width: "100%",
												height: "16rem",
												objectFit: "cover",
											}}
										/>
										<h4
											style={{
												marginBlock: "1rem",
												fontWeight: "600",
											}}>
											Environment Friendly
										</h4>
										<p>
											Buildings account for most electricity consumed in the world today, with Air Conditioning systems
											within buildings accounting for over 30% of total consumption1.
										</p>
										<Link to="/article/3" className="btn btn-primary">
											Read more
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</Container>
			<Footer />
		</div>
	);
}