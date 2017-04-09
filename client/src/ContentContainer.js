import React from 'react';
import './ContentContainer.css';
import {Element} from'react-scroll';
import {Col, Image, Row, Button, Table} from 'react-bootstrap';
import {utils} from 'react-bootstrap'
import yrityspalvelutImg from './images/yrityspalvelut.jpg';
import moment from 'moment';

utils.bootstrapUtils.addStyle(Button, 'custom');



const header = "Tie hyvään mieleen ja kuntoon";

const p1 = `Meillä voit kuntoilla valoisissa tiloissa, joista avautuu upea

merinäköala. Käytettävissäsi ovat Technogymin huippumodernit

laitteet, mm. Selection Line sekä Kinesis, missä voit treenata

lihasvoimaa, tasapainoa sekä liikkuvuutta – kaikkea yhtä aikaa!

Olet myös tervetullut kokeilemaan erilaisia Les Millsin tunteja

sekä meidän muita jumppia.`

const p2 = `Kuntoilun jälkeen voit rentoutua viihtyisässä saunassa.

Hyvä treeni virkistää sekä mielesi, että kehosi ja olet täynnä

energiaa!`

const ryhmaliikunta = {
	header: `Ryhmäliikunta`,
	text: `Ryhmäliikunta on hauskaa ja liikkeet oppii nopeasti.
			Tunnit sopivat kaikille: miehille ja naisille aloittelijoista
			edistyneisiin.
			Tunnit kestävät 30-70 minuuttia. Liiku monipuolisesti
			yhdistellen erilaisia tunteja.
			Voit varata paikan etukäteen tunneille osoitteessa
			aquarius.bypolar.fi
			Nettivarauksia varten tarvitset tunnuksen ja salasanan,
			jotka saat Aquariuksen vastaanotosta.`,

	exercises : {
		header: 'Ryhmäliikuntatuntimme',
		exerciseTypes: [
			{
				name: 'BodyBalance®',
				description: `LesMills Bodybalance on joogaan, taichiin ja pilatekseen perustuva
					harjoittelumuoto. Tunnilla tehdään erilaisia kehon tasapainoa, liikkuvuutta
					ja rentoutumista edistäviä liikkeitä. Harjoituksen aikana ei käytetä kenkiä
					tai sukkia.`
			},
			{
				name: 'BodyCombat®',
				description: `BodyCombat on tunti, missä on paljon voimaa ja energiaa. Käytät
					tekniikoita eri taistelulajeista kuten karate, teakwondo, capoeira,
					nyrkkeily, muay thai ja tai chi.`
			},
			{
				name: 'BodyPump®',
				description: `Yksinkertaista, mutta haastavaa musiikin tahtiin tehtävää
					voimaharjoittelua koko vartalolle. Välineenä on levytanko painoineen.
					Vastuksen voit helposti säätää omaan kuntotasoosi sopivaksi.`
			},
			{
				name: 'BodyVive®',
				description: `BodyVive on cross-training tunti, jossa keskitytään nostamaan sykettä,
					vahvistamaan lihaksia ja parantamaan keskivartalon hallintaa.`
			},
			{
				name: 'CxWorx®',
				description: `Tämän tehokkaan core-treenin liikkeet kehittävät funktionaalista voimaa
					sekä vahvistavat vatsa- ja pakaralihaksia. CX30 on puolituntia kestävä
					harjoitus, joka haastaa sekä vartalon että keskittymiskyvyn.`
			},
			{
				name: 'Fatburning bike',
				description: `Tehokasta kestävyysharjoittelua spinningpyörällä. Tavoitteena on edistää
					rasvanpolttoa ja haasta kehoa ja mieltä. Hiki kyllä tulee!`
			},
			{
				name: 'Fatburn',
				description: `Monipuolinen tunti, mikä sisältää sykkeennostoja ja lihaskuntoa. Liikkeet
					tehdään sekä kehonpainolla, että myös step-laudan, käsipainojen, tangon
					ja kahvakuulan avulla. Helppo ja hauska tunti.`
			},
			{
				name: 'Flex and Stretch',
				description: `Kehonhuolto, missä tehdään erilaisia aktiivisia liikkeitä ja venytyksiä, joilla
					parannetaan kehon liikkuvuutta ja hyvinvointia.`
			},
			{
				name: 'Grit Plyo®',
				description: `Cardio tehdään ilman välineitä. Tunnilla hyödynnetään kehon omaa painoa
					kestävyyskunnon parantamiseksi erittäin intensiivisillä harjoituksilla.
					Korkea energiakulutus.`
			},
			{
				name: 'Grit Strength®',
				description: `Maksimoi lihasvoimasi! Käytetään harjoitteluvastuksina levytankoa, -
					painoja ja step-lautaa. Grit Strength on harjoitus, jonka tulokset huomaat
					lihaskunnossasi nopeasti.`
			},
			{
				name: 'Kahvakuula',
				description: `Tehokas lihaskuntopainotteinen tunti. Harjoittelulla kehitetään
					lihaskunnon lisäksi kehonhallintaa, tasapainoa, kestävyyttä ja liikkuvuutta.
					Sopii kaiken kuntoisille. Kahvakuulan avulla säästät aikaa ja vaivaa, mutta
					et tingi tehosta.`
			},
			{
				name: 'Kinesis',
				description: `Tapa harjoittaa niin kehoa kuin mieltä vapaiden ja luonnollisten liikkeiden
					kautta. Harjoitat samaan aikaan voimaa, tasapainoa ja notkeutta. Kaikki
					harjoitukset yhdessä kokonaisuudessa.`
			},
			{
				name: 'Kinesis 65 +',
				description: `Helppoa ja hauskaa liikuntaa. 60 + kiertoharjoittelutunti.`
			},
			{
				name: 'Roller',
				description: `Roller - kehonhuoltotunnilla suoritetaan monipuolisia kehonhuoltoon
					tähtääviä liikkeitä rullaa (foam roller) apuna käyttäen. Tunnilla
					vahvistetaan lihaksia ja lisätään liikkuvuutta aktiivisilla venytyksillä ja
					rentoutetaan lihaksia sekä lihaskalvoja erilaisilla rullauksilla.`
			},

		]
	}
};


const yrityspalvelut = {

	header: {
			text: `Tervetuloa viettämään liikunta- ja virkistyspäivää
				Aquarius Sporting Clubille! Räätälöimme yrityksellesi
				yksilölliset liikunta- ja virkistyspäivät meren rannalla.`
	},

	paragraphs: [
		
		{
			text: `Päivään voi kuulua erilasia ryhmäliikuntamuotoja, esim. Kinesis,
				BodyVive, Kahvakuula tai Terveselkä jumppa. Muihin vaihtoehtoihin voit
				tutustua ryhmäliikunta sivuilla tai toivoa terveysliikuntapainotteista
				ohjelmaa, mikä on suunniteltu erityisesti teitä varten.`
		},

		{
			text: `Teidän on mahdollisuus käyttää myös InBody mittauslaitetta kehon
				koostumuksen selvittämiseen. InBodylla mitataan vaivattomasti mm.
				solun sisäiset- ja ulkoiset nesteet, proteiinimassa, mineraalit, rasvamassa,
				painoindeksi sekä kehon lihastasapaino.`
		},
		{
			text: `Liikunnan jälkeen voitte rentoutua saunassa. Tarjoamme tarvittaessa
				myös kokoustilat yrityksesi käyttöön ja tarjoilusta vastaa alakerrassa
				Ravintola Sågen.`
		},
		{
			text: `Lisätietoja ja tarjouspyynnöt: aquarius@aquariussporting.fi
				Meillä käy maksuvälineenä myös useat henkilöstöetuina käytettävät kortit
				ja setelit, joten työntekijöiden on halutessaan vaivatonta jatkaa
				liikuntaharrastusta.`
		}
	]
};

const pt = {
	content: `Personal Trainer kuuntelee sinun tavoitteita sekä
	toiveita ja muokkaa treenejä tarpeittesi mukaan.
	Tapaamme tarpeesi mukaan yhdestä useampaan
	kertaan, jotta lähtötasostasi riippumatta kehityt ja
	saavutat tavoitteesi. Voimme keskittyä esim. oikeaan
	tekniikkaan, motivaation löytämiseen, lajia tukevaan
	harjoitteluun, ravitsemukseen tai uusiin
	treenimuotoihin.`
}

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

moment.locale('fi');
const date = moment().format('LL');



const ContentContainer = (props) => {
	return (
		<div className="contentContainer">
			<Row className="Content-element">
				<Element name="ajankohtaista">
					<div id="ajankohtaista-element-begin">
						<div id="ajankohtaista-element-wrapper">
							<div style={{paddingTop: '5%'}}>
								<div><h2>{header}</h2></div>
								<Row style={{marginBottom: '50px'}}>
									<Col xs={12} md={12}>
								    	<div><p className="ingress">{p1}</p></div>
								    	<div><p className="ingress">{p2}</p></div>
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
		        		<h1 className="Image-container-element-header">{ryhmaliikunta.header}</h1>
		        		<div className="Image-container-element-content">
		        			<p className="ingress" >{ryhmaliikunta.text}</p>
		        			<Button bsSize="large" bsStyle="custom">Varaa tunti</Button>
		        		</div>
		        	</div>
		        </Element>
		    </Row>
		    <Row className="Content-element">
		        <Element name="harjoitukset" className="element harjoitukset-content">
		        	<Row>
		          		<div><h3>{ryhmaliikunta.exercises.header}</h3></div>
				    	<div>
				    		{
				    			ryhmaliikunta.exercises.exerciseTypes.map((exercise) =>  {
				    				return (
				    					<Col xs={6} md={4}>
				    						<div className="exercise exercise-border-top">
					    						<p className="exercise-name">{exercise.name}</p>
					    						<p className="exercice-description" >{exercise.description}</p>
					    					</div>
				    					</Col>
				    					);
				    			})
				    		}
				    	</div>
					</Row>
		        </Element>
		    </Row>
		    <Row className="Content-element">
		        <Element className="Image-container" id="personal-trainer-element" name="personal_training">
		        	<div className="Image-container-element">
		        		<h1 className="Image-container-element-header">{`Personal trainer`}</h1>
		        		<div className="Image-container-element-content">
		        			<p className="ingress">{pt.content}</p>
		        		</div>
		        	</div>
		        </Element>
		        <div id="personal-trainer-content">
		        		{/*TODO: hae datasta */}
		        	<Row>
		        		<Col xs={12} md={6}>
		        			<div className="personal-trainer-service">
				        		<h2>{`PT-treenit`}</h2>
				        		<p>{`Harjoittele turvallisesti, kehity ja saavuta tavoitteesi Personal Trainerin kanssa.`}</p>
				        		<ul>
				        			<li>{`Alkuhaastattelu (lähtötilanne & tavoitteet)`}</li>
				        			<li>{`Henkilökohtainen treeniohjelma`}</li>
				        			<li>{`Tarvittaessa InBody tai ravitsemusneuvonta 30 €`}</li>

				        		</ul>
				        		<p>{`1 x 60 €`}</p>
				        		<p>{`3 x 170 € - vuosijäsen 155 €`}</p>
				        		<p>{`5 x 270 € - vuosijäsen 250 €`}</p>
				        	</div>
			        	</Col>
			        	<Col xs={12} md={6}>
			        		<div className="personal-trainer-service">
				        		<h2>{`PT-Duo`}</h2>
				        		<p>{`Treenaa yhdessä Personal Trainerin ja kaverin kanssa. Harjoittelua esim. vapailla painoilla, laitteissa tai kahvakuulalla.`}</p>
				        		<ul>
				        			<li>{`Tarvittaessa InBody tai ravitsemusneuvonta 30 €`}</li>
				        		</ul>
				        		<p>{`1 x 40 € - vuosijäsen 30 € / henkilö`}</p>
				        	</div>
			        	</Col>
			        </Row>
	        	</div>
		    </Row>
		    <Row className="Content-element">
		        <Element className="Image-container" id="yrityspalvelut-element" name="yrityspalvelut">
		        	<div className="Image-container-element">
		        		<div><h2>{yrityspalvelut.header.text}</h2></div>
		        	</div>
		        </Element>
		        <div id="yrityspalvelut-content">
			        <Row>
		        		<Col xs={12} md={6}>
					    	<div className="yrityspavelut-content-item">
					    		<p>{yrityspalvelut.paragraphs[0].text}</p>
					    	</div>
					    </Col>
					    <Col xs={12} md={6}>
					    	<div className="yrityspavelut-content-item">
					    		<p>{yrityspalvelut.paragraphs[1].text}</p>
					    	</div>
					    </Col>
					</Row>
					<Row>
		        		<Col xs={12} md={6}>
					    	<div className="yrityspavelut-content-item">
					    		<p>{yrityspalvelut.paragraphs[2].text}</p>
					    	</div>
					    </Col>
					    <Col xs={12} md={6}>
					    	<div className="yrityspavelut-content-item">
					    		<p>{yrityspalvelut.paragraphs[3].text}</p>
					    	</div>
					    </Col>
					</Row>
				</div>
		    </Row>
		{/*map API key: AIzaSyAHr67-kdbUxIDsDgmRY9mv4yD2KG51sFs*/}
		    <Row className="Content-element footer">
		        <Element name="yhteystiedot-hinnasto">
		    		<div>
			            <div style={{textAlign: 'center'}}>
			              <h3>{`Aquarius sporting club`}</h3>
			            </div>
			            <div>
			            		<Table striped bordered condensed hover>
								    <thead>
								      <tr>
								        <th style={{textAlign: 'center'}}>Vuosijäsenyys</th>
								        <th></th>
								        <th>Opiskelija / eläkeläinen</th>
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
								      		+ liittymismaksu 20€
								      	</td>
								      	<td>
								      	</td>
								      	<td>
								      	</td>
								      </tr>
								      <tr style={{textAlign: 'center'}}>
								      	<td>
								      		<span style={{fontWeight: 'bold'}}>Muut</span>
								      	</td>
								      	<td>
								      	</td>
								      	<td>
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
			            	</div>
			            <Col xs={12} md={6}>
			            	<div style={{textAlign: 'center'}}>
			            		<h4 style={{textTransform: 'uppercase'}}>{`Hinnasto`}</h4>
			            	</div>
			            	<div>
			            		<h4 style={{textTransform: 'uppercase', textAlign: 'center'}}>{`Avoinna`}</h4>
			            		<Row>
				            		<Col xs={6}>
				            			{`Maanantai - torstai`}
				            		</Col>
				            		<Col xs={6}>
				            			<span style={{fontWeight: 'bold'}}>{`07:00 - 21:00`}</span>
				            		</Col>
				            	</Row>
				            	<Row>
				            		<Col xs={6}>
				            			{`Perjantai`}
				            		</Col>
				            		<Col xs={6}>
				            			<span style={{fontWeight: 'bold'}}>{`07:00 - 20:00`}</span>
				            		</Col>
				            	</Row>
				            	<Row>
				            		<Col xs={6}>
				            			{`Lauantai`}
				            		</Col>
				            		<Col xs={6}>
				            			<span style={{fontWeight: 'bold'}}>{`09:00 - 18:00`}</span>
				            		</Col>
				            	</Row>
				            	<Row>
				            		<Col xs={6}>
				            			{`Sunnutai`}
				            		</Col>
				            		<Col xs={6}>
				            			<span style={{fontWeight: 'bold'}}>{`14:00 - 20:00`}</span>
				            		</Col>
				            	</Row>
			            	</div>
			            </Col>
			            <Col style={{borderLeft: '3px solid #666666'}} xs={12} md={6}>
			            	<div style={{textAlign: 'center'}}>
			            		<h4 style={{textTransform: 'uppercase'}}>{`Yhteystiedot`}</h4>
			            		<Row style={{marginBottom: '10px'}}>
			            			<Col xs={2}>
			            				<i className="fa fa-map-marker fa-2x" />
			            			</Col>
			            			<Col xs={10}>
			            				<p style={{textAlign: 'start'}}>{`Kauppakeskus Strand Rantatie 3, 2 krs 10210 Inkoo`}</p>
			            			</Col>
			            		</Row>
			            		<Row>
			            			<Col xs={2}>
			            				<i className="fa fa-phone fa-2x" />
			            			</Col>
			            			<Col xs={10}>
			            				<p  style={{textAlign: 'start'}}>{`(09) 2230 9402`}</p>
			            			</Col>
			            		</Row>
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