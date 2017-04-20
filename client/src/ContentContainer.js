import React from 'react';
import './ContentContainer.css';
import {Element} from'react-scroll';
import {Col, Image, Row, Button, Table} from 'react-bootstrap';
import {utils} from 'react-bootstrap'
import yrityspalvelutImg from './images/yrityspalvelut.jpg';
import ticket1Img from './images/ticket1.png';
import ticket2Img from './images/ticket2.png';
import ticket3Img from './images/ticket3.png';
import ticket4Img from './images/ticket4.png';
import ticket5Img from './images/ticket5.png';
import ticket6Img from './images/ticket6.png';
import ticket7Img from './images/ticket7.png';
import ticket8Img from './images/ticket8.png';
import moment from 'moment';

//content
import news from './data/news.js'
import groupExercise from './data/groupExercise.js';
import personalTrainer from './data/personalTrainer.js';
import enterpriseService from './data/enterpriseService.js';

utils.bootstrapUtils.addStyle(Button, 'custom');

const posts = [
  {
    header: 'Inbody 35 €',
    body: 'Inbody kehon koostumusanalyysi mittaa mm. lihasmassan, lihastasapainon, proteiini- ja rasvamassan, rasvaprosentin, mineraalit, kehon nesteet sekä BMI.'
  },
  {
    header: 'Iyengar jooga keväällä',
    body: 'Lauantaina 22.4 klo. 12.30-14.30'
  },
  {
    header: 'Sauna on lämmin sinulle',
    body: 'Ma-To 9-11.30 & 16-20.30 Pe 9-11.30 & 16-19.30 La 10-17.30 Su 15-19.30'
  }
];





const ContentContainer = (props) => {
	moment.locale(props.locale);
	const date = moment().format('LL');
	return (
		<div className="contentContainer">
			<Row className="Content-element">
				<Element name="ajankohtaista">
					<div id="ajankohtaista-element-begin">
						<div id="ajankohtaista-element-wrapper">
							<div style={{paddingTop: '5%'}}>
								<div><h2>{news[props.locale].header}</h2></div>
								<Row style={{marginBottom: '50px'}}>
									<Col xs={12} md={12}>
								    	<div><p className="ingress">{news[props.locale].p1}</p></div>
								    	<div><p className="ingress">{news[props.locale].p2}</p></div>
								    </Col>
								</Row>
							</div>
						</div>
					</div>
					<div className="ajankohtaista-element">
		          		<Row>
		          			<Col xs={12} md={8} lg={8}>
				          		<div className="post-item-list">
				          			<Row>
				                        {posts.map((post) => {
				                            return (
				                              	<Col xs={12} md={6} lg={6}>
					                              	<div className="post-item">
					                                	<Row>
						                                  <Col xs={12} className="flex-8">
						                                    <p  style={{color: '#5ba5b2'}} className="post-header">{post.header}</p>
						                                  </Col>
						                                  <Col xs={6} className="flex-2">
						                                    
						                                  </Col>
					                                	</Row>
						                                <div className="post-item-content">
						                                  <Row>
						                                    <Col xs={12} md={12}>
						                                      <p style={{color: '#848484'}}>{post.body}</p>
						                                    </Col>
						                                  </Row>
						                                  <Row>
						                                  	<Col xs={6} style={{color: '#ccc'}}>
						                                  		<p>{`Johanna`}</p>
						                                  	</Col>
						                                  	<Col xs={6}  style={{margin: 'auto 0', color: '#ccc'}}>
						                                  		<p>{date}</p>
						                                  	</Col>
						                                  </Row>
						                                </div>
						                            </div>
				                              	</Col>
				                            );
				                          })
				                        }
				                    </Row>
			                     </div>
			                </Col>

		                     <Col xs={12} md={3} lg={3}>
								<div class="fb-like-box fb_iframe_widget" data-href="https://www.facebook.com/aquariussporting" data-width="306" data-show-faces="true" data-stream="true" data-header="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=&amp;container_width=310&amp;header=true&amp;href=https%3A%2F%2Fwww.facebook.com%2Faquariussporting&amp;locale=fi_FI&amp;sdk=joey&amp;show_faces=true&amp;stream=true&amp;width=306">
									
										<iframe name="f3d9bbdd3d41fe8" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:like_box Facebook Social Plugin" src="https://www.facebook.com/plugins/like_box.php?app_id=&amp;channel=http%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2F1FegrZjPbq3.js%3Fversion%3D42%23cb%3Df749e3b0a8094c%26domain%3Dwww.aquariussporting.fi%26origin%3Dhttp%253A%252F%252Fwww.aquariussporting.fi%252Ff36784c8d998ee8%26relation%3Dparent.parent&amp;container_width=310&amp;header=true&amp;href=https%3A%2F%2Fwww.facebook.com%2Faquariussporting&amp;locale=fi_FI&amp;sdk=joey&amp;show_faces=true&amp;stream=true&amp;width=306" style={{border: 'none', visibility: 'visible', width: '306px', height: '540px'}}>
										</iframe>
								</div>
							</Col>
		                </Row>
			        </div>
			    </Element>
		    </Row>
		    <Row className="Content-element">
		        <Element id="ryhmaliikunta-element" name="ryhmaliikunta" className="Image-container">
		        	<div className="Image-container-element">
		        		<h1 className="Image-container-element-header">{groupExercise[props.locale].header}</h1>
		        		<div className="Image-container-element-content">
		        			<p className="ingress" >{groupExercise[props.locale].text}</p>
		        			<a target="_blank" href="http://aquarius.bypolar.fi">
		        				<Button bsSize="large" bsStyle="custom">{groupExercise[props.locale].button}</Button>
		        			</a>
		        		</div>
		        	</div>
		        </Element>
		    </Row>
		    <Row className="Content-element">
		        <div className="element harjoitukset-content">
		        	<Row>
		          		<div><h3>{groupExercise.exercises.header[props.locale]}</h3></div>
				    	<div>
				    		{
				    			groupExercise.exercises.exerciseTypes.map((exercise) =>  {
				    				return (
				    					<Col xs={6} md={4}>
				    						<div className="exercise exercise-border-top">
					    						<p className="exercise-name">{exercise[props.locale].name}</p>
					    						<p className="exercice-description" >{exercise[props.locale].description}</p>
					    					</div>
				    					</Col>
				    					);
				    			})
				    		}
				    	</div>
					</Row>
		        </div>
		    </Row>
		    <Row className="Content-element">
		        <Element className="Image-container" id="personal-trainer-element" name="personal_training">
		        	<div className="Image-container-element">
		        		<h1 className="Image-container-element-header">{`Personal trainer`}</h1>
		        		<div className="Image-container-element-content">
		        			<p className="ingress">{personalTrainer.pt[props.locale].content}</p>
		        		</div>
		        	</div>
		        </Element>
		        <div id="personal-trainer-content">
		        	<Row>
		        		<Col xs={12} md={6}>
		        			<div className="personal-trainer-service">
				        		<h2>{personalTrainer.pt[props.locale].h2}</h2>
				        		<p>{personalTrainer.pt[props.locale].p}</p>
				        		<ul>
				        			<li>{personalTrainer.pt[props.locale].li1}</li>
				        			<li>{personalTrainer.pt[props.locale].li2}</li>
				        			<li>{personalTrainer.pt[props.locale].li3}</li>

				        		</ul>
				        		<p>{personalTrainer.pt[props.locale].price1}</p>
				        		<p>{personalTrainer.pt[props.locale].price2}</p>
				        		<p>{personalTrainer.pt[props.locale].price3}</p>
				        	</div>
			        	</Col>
			        	<Col xs={12} md={6}>
			        		<div className="personal-trainer-service">
				        		<h2>{personalTrainer.duo[props.locale].h2}</h2>
				        		<p>{personalTrainer.duo[props.locale].p}</p>
				        		<ul>
				        			<li>{personalTrainer.duo[props.locale].li}</li>
				        		</ul>
				        		<p>{personalTrainer.duo[props.locale].price}</p>
				        	</div>
			        	</Col>
			        </Row>
	        	</div>
		    </Row>
		    <Row className="Content-element">
		        <Element className="Image-container" id="yrityspalvelut-element" name="yrityspalvelut">
		        	<div className="Image-container-element">
		        		<div>
		        			<h1 className="Image-container-element-header" >{enterpriseService[props.locale].header.h1}</h1>
		        			<p className="ingress">{enterpriseService[props.locale].header.text}</p>
		        		</div>
		        	</div>
		        	
		        </Element>
		        <div id="yrityspalvelut-content">
			        <Row>
		        		<Col xs={12} md={6}>
					    	<div className="yrityspavelut-content-item ">
					    		<p>{enterpriseService[props.locale].paragraphs[0].text}</p>
					    	</div>
					    </Col>
					    <Col xs={12} md={6}>
					    	<div className="yrityspavelut-content-item">
					    		<p>{enterpriseService[props.locale].paragraphs[1].text}</p>
					    	</div>
					    </Col>
					</Row>
					<Row>
		        		<Col xs={12} md={6}>
					    	<div className="yrityspavelut-content-item">
					    		<p>{enterpriseService[props.locale].paragraphs[2].text}</p>
					    	</div>
					    </Col>
					    <Col xs={12} md={6}>
					    	<div className="yrityspavelut-content-item">
					    		<p>{enterpriseService[props.locale].paragraphs[3].text}</p>
					    	</div>
					    </Col>
					</Row>
				</div>
		    </Row>
		{/*map API key: AIzaSyAHr67-kdbUxIDsDgmRY9mv4yD2KG51sFs*/}
		    <Row className="Content-element footer">
		        <Element name="yhteystiedot-hinnasto">
		    		<div>
			            <div>
			            	<div style={{textAlign: 'center'}}>
			            		<h4 style={{textTransform: 'uppercase'}}>{`Hinnasto`}</h4>
			            	</div>
			            	<Table striped bordered condensed hover>
							    <thead>
							      <tr>
							        <th className="first-row" style={{textAlign: 'center'}}>Vuosijäsenyys</th>
							        <th className="first-row"></th>
							        <th className="first-row"></th>
							      </tr>
							    </thead>
							    <tbody>
							      <tr>
							        <td>VIP - kuntosali ja liikuntaryhmät. Sisältää kaksi henkilökohtaista harjoitusohjelmaa vuodessa</td>
							        <td>65€/kk</td>
							        <td></td>
							      </tr>
							      <tr>
							        <td>Liikuntaryhmät</td>
							        <td>55€/kk</td>
							        <td></td>
							      </tr>
							      <tr>
							        <td>Kuntosali. Sisältää kaksi henkilökohtaista harjoitusohjelmaa vuodessa</td>
							        <td>45€/kk</td>
							        <td></td>
							      </tr>
							      <tr>
							      	<td>
							      		Liittymismaksu
							      	</td>
							      	<td>
							      		20€
							      	</td>
							      	<td>
							      	</td>
							      </tr>
							      <tr></tr>
							      <tr className="table-split" style={{textAlign: 'center'}}>
							      	<td className="first-row">
							      		<span style={{fontWeight: 'bold'}}>Muut</span>
							      	</td>
							      	<td className="first-row">
							      	</td>
							      	<td className="first-row">
							      	Opiskelija / eläkeläinen
							      	</td>
							      </tr>
							      <tr>
							      	<td>Kuukausikortti kuntosali <span style={{fontWeight: 'bold'}}>JA</span> liikuntaryhmät</td>
							      	<td>80€/kk</td>
							      	<td></td>
							      </tr>
							       <tr>
							      	<td>Kuukausikortti kuntosali <span style={{fontWeight: 'bold'}}>TAI</span> liikuntaryhmät</td>
							      	<td>65€/kk</td>
							      	<td>60€/kk</td>
							      </tr>
							       <tr>
							      	<td>Päiväpassi</td>
							      	<td>15€</td>
							      	<td>10€</td>
							      </tr>
							      <tr>
							      	<td>10 x kortti, henkilökohtainen, 6 kk</td>
							      	<td>100€</td>
							      	<td>80€</td>
							      </tr>
							       <tr>
							      	<td>Inbody</td>
							      	<td>35€</td>
							      	<td></td>
							      </tr>
							    </tbody>
							</Table>
							<div className="ticket-container">
								<div>
									<h5>{`Maksuvälineinä käy myös: Ticket Duo, Ticket Virike, Virikeseteli, Smartum, ePassi ja Tyky Kuntoseteli.`}</h5>
								</div>
								<div>
									<div className="ticketImage"><Image responsive src={ticket1Img} /></div>
								
								
									<div className="ticketImage"><Image responsive src={ticket2Img} /></div>
								
								
									<div className="ticketImage"><Image responsive src={ticket3Img} /></div>
								
								
									<div className="ticketImage"><Image responsive src={ticket4Img} /></div>
								
									<div className="ticketImage"><Image responsive src={ticket5Img} /></div>
								
								
									<div className="ticketImage"><Image responsive src={ticket6Img} /></div>
								
								
									<div className="ticketImage"><Image responsive src={ticket7Img} /></div>
								
		
									<div className="ticketImage"><Image responsive src={ticket8Img} /></div>
									
								</div>
								<div>
									<p>{`Pidätämme oikeudet muutoksiin.`}</p>
								</div>
							</div>
			            </div>
			            <Col xs={12} md={6}>
			            	<div>
			            		<h4 style={{textTransform: 'uppercase', textAlign: 'center'}}>{`Avoinna`}</h4>
			            		<Row className="open-at">
				            		<Col xs={6}>
				            			{`Maanantai - torstai`}
				            		</Col>
				            		<Col xs={6}>
				            			<span style={{fontWeight: 'bold'}}>{`07:00 - 21:00`}</span>
				            		</Col>
				            	</Row>
				            	<Row className="open-at">
				            		<Col xs={6}>
				            			{`Perjantai`}
				            		</Col>
				            		<Col xs={6}>
				            			<span style={{fontWeight: 'bold'}}>{`07:00 - 20:00`}</span>
				            		</Col>
				            	</Row>
				            	<Row className="open-at">
				            		<Col xs={6}>
				            			{`Lauantai`}
				            		</Col>
				            		<Col xs={6}>
				            			<span style={{fontWeight: 'bold'}}>{`09:00 - 18:00`}</span>
				            		</Col>
				            	</Row>
				            	<Row className="open-at">
				            		<Col xs={6}>
				            			{`Sunnuntai`}
				            		</Col>
				            		<Col xs={6}>
				            			<span style={{fontWeight: 'bold'}}>{`14:00 - 20:00`}</span>
				            		</Col>
				            	</Row>
			            	</div>
			            </Col>
			            <Col style={{borderLeft: '3px solid #666666'}} xs={12} md={6}>
			            	<div className="yhteystiedot" style={{textAlign: 'center'}}>
			            		<h4 style={{textTransform: 'uppercase'}}>{`Yhteystiedot`}</h4>
			            		<div className="contact-item flex" style={{marginBottom: '10px'}}>
			            			<div className="flex-1 flex-center">
			            				<span className="fa-stack fa-lg">
										  <i className="fa fa-circle fa-stack-2x"/>
										  <i className="fa fa-map-marker fa-stack-1x fa-inverse"/>
										</span>
			            			</div>
			            			<div className="flex flex-5">
			            				<p style={{textAlign: 'start'}}>{`Kauppakeskus Strand 2krs, Rantatie 3, 10210 Inkoo`}</p>
			            			</div>
			            		</div>
			            		<div className="contact-item flex">
			            			<div className="flex-1 flex-center">
			            				<span className="fa-stack fa-lg">
										  <i className="fa fa-circle fa-stack-2x"/>
										  <i className="fa fa-phone fa-stack-1x fa-inverse"/>
										</span>
			            			</div>
			            			<div className="flex flex-5">
			            				<p  style={{textAlign: 'start'}}>{`(09) 2230 9402`}</p>
			            			</div>
			            		</div>
			            		<div className="contact-item flex">
			            			<div className="flex-1 flex-center">
			            				<span className="fa-stack fa-lg">
										  <i className="fa fa-circle fa-stack-2x"/>
										  <i className="fa fa-envelope fa-stack-1x fa-inverse"/>
										</span>
			            			</div>
			            			<div className="flex flex-5">
			            				<p  style={{textAlign: 'start'}}>{` aquarius[at]aquariussporting.fi`}</p>
			            			</div>
			            		</div>
			            	</div>
			            	<div style={{boxShadow: '0px 0px 10px 5px #dcd4d4', marginTop: '10px'}}>
			            		<iframe height="250" frameborder="0" style={{border: '0', width: '100%'}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJmdm2GWqYjUYRwNgrVXo47Bo&key=AIzaSyAHr67-kdbUxIDsDgmRY9mv4yD2KG51sFs" allowfullscreen></iframe>
			            	</div>
			            </Col>
		          	</div>
		        </Element>
		    </Row>
		</div>
	);
};

export default ContentContainer;