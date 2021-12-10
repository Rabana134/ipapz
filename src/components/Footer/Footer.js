import React from 'react'
import  './Footer.css'
import {SocialMediaIconsReact} from 'social-media-icons-react';

export default function Footer() {
    return (
        <div className="footer-background">
        <div className="foot-title">
        <h3 className="foot-title">Join Us</h3>
        <div>
					<ul className="nobull">
							<li>
					<a href=" /">			
										<span className="footer-list">Careers</span>
											</a>
                                            
									</li>
                                    <li>
					<a href=" /">			
										<span className="footer-list">Why iPapz</span>
											</a>
                                            
									</li>
						</ul>
				</div>
        </div>
		<div className="foot-title">
		<h3 className="foot-title">More Info</h3>
        <div>
					<ul className="nobull">
							<li>
					<a href=" /">			
										<span className="footer-list">Press</span>
											</a>
                                            
									</li>
                                    <li>
					<a href=" /">			
										<span className="footer-list">Awards</span>
											</a>
                                            
									</li>
                                    <li>
					<a href=" /">			
										<span className="footer-list">News</span>
											</a>
                                            
									</li>
						</ul>
				</div>
        </div>
		<div className="foot-title">
		<h3 className="foot-title">About iPapz</h3>
        <div>
					<ul className="nobull">
							<li>
					<a href=" /">			
										<span className="footer-list">Contact Us</span>
											</a>
                                            
									</li>
                                    <li>
					<a href=" /">			
										<span className="footer-list">FAQ</span>
											</a>
                                            
									</li>
                                    <li>
					<a href=" /">			
										<span className="footer-list">Blog</span>
											</a>
                                            
									</li>
                                    <li>
					<a href=" /">			
										<span className="footer-list">Forum</span>
											</a>
                                            
									</li>
                                    <li>
					<a href=" /">			
										<span className="footer-list">Privacy policy</span>
											</a>
                                            
									</li>
						</ul>
				</div>
        <div >
							<div className="social-media">
							<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(212,175,55,1)" iconSize="5" roundness="50%" url="https://www.facebook.com/tritekconsultingltd" size="30" />
				</div>
							<div className="social-media">
							<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(212,175,55,1)" iconSize="5" roundness="50%" url="https://twitter.com/Tritek_Consult" size="30" />
				</div>
							<div className="social-media">
							<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(212,175,55,1)" iconSize="5" roundness="50%" url="https://www.instagram.com/tritekconsultingltd/" size="30" />
				</div>
							<div className="social-media">
							<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(212,175,55,1)" iconSize="5" roundness="50%" url="https://www.linkedin.com/company/tritek-consulting-limited/" size="30" />
				</div>
							<div className="social-media">
							<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="youtube" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(212,175,55,1)" iconSize="5" roundness="50%" url="https://www.linkedin.com/company/tritek-consulting-limited/" size="30" />
				</div>
					</div>
		</div>
	
        </div>
    )
}
