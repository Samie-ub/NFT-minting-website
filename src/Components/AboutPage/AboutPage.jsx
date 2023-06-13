import {Grid, Typography} from '@material-ui/core'
import React, {useState, useRef} from 'react'
import {useRouter} from "next/router";


function AboutPage() {

	const router = useRouter();

	const [coord, setCoord] = useState({x: 0, y: 0})
	const [coord2, setCoord2] = useState({x: 0, y: 0})

	const title1 = useRef(null)
	const title2 = useRef(null)

	const handleMouseMove = event => {
		setCoord({
			x: event.clientX,
			y: event.clientY,
		})
	}

	const handleMouseMove2 = event => {
		setCoord2({
			x: event.clientX,
			y: event.clientY,
		})
	}

	const handleLink = (link, bgColor) => {
		router.push(link);

	};


	return (
		<div>
			<div className="about_us">

				<h1 className="aboutUs__heading">WE ARE DIAMONDFOOTED</h1>

				<Grid container>
					<Grid item sm={5} md={5} lg={5}>
					</Grid>
					<Grid item sm={7} md={6} lg={5}>

						<h6 className="content__description" data-aos="fade-up" data-aos-delay="500">
							The Diamondfoot team is a group of passionate crypto and NFT enthusiasts who notoriously diamond-handed
							several projects, contributing significantly to these projects. The team's philosophy allowed them to
							navigate the highs and lows of each crypto and NFT project with perseverance and conviction. <br/> <br/>

							Diamondfoot came into existence in 2018 after one team member shared an idea for an autonomous
							organization he had been designing in his closet for over 7 years. For him, he had a “eureka” moment in
							2015 to conceptualize Spring village (The end goal for this project) after being introduced to Bitcoin and
							blockchains. <br/><br/>
							Fast forward to present-day, and the team have a shared long-term vision: To build a sustainable city
							online
							that produces sustainable offline communities and prioritizes the well-being of community members
						</h6>
					</Grid>
				</Grid>


			</div>

			<div className="grid_wrapper">
				<Grid container className="secondGrid">
					<Grid item lg={12}>
						<h1 className="content_title">
							MAKING A CLEAR
							STATEMENT<br/>
							WITH DFT NFTS
						</h1>
					</Grid>
					<Grid item sm={7} md={6} lg={5}>
						<div className="content_container">
							<h6 className="content__description " data-aos="fade-up" data-aos-delay="500">
								The #cryptofam has come a long way. New faces and great ideas permeate the community. Now that community
								一 built from scratch by the community, for the community (and some far-sighted VCs) 一 has been
								penetrated by centralized businesses.
							</h6>
							<h6 className="content__description " data-aos="fade-up" data-aos-delay="500">
								These businesses threaten the space, ignoring the fundamental values held dear by many who sacrificed
								their time and effort to build what ultimately made crypto and NFT Art viable for mainstream adoption.
								If the community doesn't rise, the fabric of decentralization will cease to exist.
							</h6>
						</div>

					</Grid>

					<Grid item sm={5} md={5} lg={5}>
						<div className="flex_container flex_container_go">
							<h1 ref={title1} className='project_go' data-aos="fade-up" data-aos-delay="500"
							    onMouseMove={handleMouseMove} onClick={() => handleLink("/projects")}>
								<span><span className='project_go_plus'>+</span> GO TO OUR <br/> PROJECT</span>
							</h1>
							<img src="web/aboutus-shoe.jpg" className="hover_image"
							     style={{transform: `translate3d(${coord.x}px, ${coord.y}px, 0)`}} alt=""/>
						</div>
					</Grid>

				</Grid>
				<Grid container className="secondGrid">
					<Grid item sm={7} md={6} lg={5}>
						<div className="content_container">
							<h6 className="content__description " data-aos="fade-up" data-aos-delay="500">
								The DFT project is rising to that occasion. The purpose of DFT is to state a clear and permanent message to all, including
								community members of the upcoming NFT Marketplace and Diamond DAO: We built it together, we own it together.
							</h6>
							<h6 className="content__description " data-aos="fade-up" data-aos-delay="500">
								This belief forms the foundation for the project. It is also the reason the team is introducing exciting royalty programs for
								minters.
							</h6>
							<h6 className="content__description " data-aos="fade-up" data-aos-delay="500">
								Meritocracy, fairness, and meaningfulness are values held dear by the Diamondfoot team. There are plans to expand
								beyond the online space and into the real world, with the goal being to help millions spend their time within a fair and
								meritocratic framework.
							</h6>
							<h6 className="content__description " data-aos="fade-up" data-aos-delay="500">
								The roadmap provides an overview, including plans for Spring village.
							</h6>
							<h6 className="content__description " data-aos="fade-up" data-aos-delay="500">
								To all current and future community members: <br/>
								We look forward to building meaningful interactions with each and every one of you towards a meaningful future.
							</h6>
						</div>

					</Grid>

					<Grid item sm={5} md={5} lg={5}>
						<div className="flex_container">

							<h1 className='project_go' data-aos="fade-up" ref={title2} onMouseMove={handleMouseMove2} onClick={() => handleLink("/mintingprocess")}>
								<span><span className='project_go_plus'>+</span> GET MINTPASS <br/>NOW</span>
							</h1>
							<img src="web/aboutus-shoe1.jpg" className="hover_image"
							     style={{transform: `translate3d(${coord2.x}px, ${coord2.y}px, 0)`}} alt=""/>

						</div>
					</Grid>

				</Grid>
			</div>

		</div>

	)
}

export default AboutPage