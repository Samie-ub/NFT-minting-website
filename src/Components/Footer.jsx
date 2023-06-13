import Link from "next/link";
import React from "react";


const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__title">Need more information?</div>
			<div className="footer__contact">
				<div className="contact__title">Contact us</div>
				<Link href="/">
					<img className="contact__logo cursor" src="svgs/logo.svg"/>
				</Link>
			</div>
			<a className="footer__mail" href="mailto:hello@diamondfoot.io">hello@diamondfoot.io</a><br/><br/>
			<div className="footer__contact">
				<div className="contact__title">
					<a href="/termsofservice">Terms of Service</a>
				</div>
			</div>
			<a className="footer__mail">©2022 DFT All rights reserved.</a>

			{/* <div className="footer__copy-right"></div> */}
		</div>
	);
};

export default Footer;
