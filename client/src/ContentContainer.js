import React from 'react';
import './ContentContainer.css';
import {Element} from'react-scroll';
import {Col, Image, Row, Button, ResponsiveEmbed} from 'react-bootstrap';
import {utils} from 'react-bootstrap'
import yrityspalvelutImg from './images/yrityspalvelut.jpg';
import ryhmaliikuntaImg from './images/ryhmaliikunta.jpg';
import personalTrainerImg from './images/personal_trainer.jpg';

utils.bootstrapUtils.addStyle(Button, 'custom');



const header = "Tie hyvään mieleen ja kuntoon kulkee Aquariuksen kautta!";

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



const ContentContainer = (props) => {
	return (

		<div className="contentContainer">
			<Row className="Content-element">
				<Element name="ajankohtaista" className="element aqua-border-left">
					<Row>
						<Col xs={12} md={8}>
							<div><h2>{header}</h2></div>
					    	<div><p>{p1}</p></div>
					    	<div><p>{p2}</p></div>
					    </Col>
						<Col xs={12} md={4}>
							<div class="fb-like-box fb_iframe_widget" data-href="https://www.facebook.com/aquariussporting" data-width="306" data-show-faces="true" data-stream="true" data-header="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=&amp;container_width=310&amp;header=true&amp;href=https%3A%2F%2Fwww.facebook.com%2Faquariussporting&amp;locale=fi_FI&amp;sdk=joey&amp;show_faces=true&amp;stream=true&amp;width=306">
								<span style={{verticalAlign: 'bottom', width: '306px', height: '540px'}}>
									<iframe name="f3d9bbdd3d41fe8" width="306px" height="1000px" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:like_box Facebook Social Plugin" src="https://www.facebook.com/plugins/like_box.php?app_id=&amp;channel=http%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2F1FegrZjPbq3.js%3Fversion%3D42%23cb%3Df749e3b0a8094c%26domain%3Dwww.aquariussporting.fi%26origin%3Dhttp%253A%252F%252Fwww.aquariussporting.fi%252Ff36784c8d998ee8%26relation%3Dparent.parent&amp;container_width=310&amp;header=true&amp;href=https%3A%2F%2Fwww.facebook.com%2Faquariussporting&amp;locale=fi_FI&amp;sdk=joey&amp;show_faces=true&amp;stream=true&amp;width=306" style={{border: 'none', visibility: 'visible', width: '306px', height: '540px'}}>
									</iframe>
								</span>
							</div>
						</Col>
					</Row>
	          		
		        </Element>
		    </Row>
		    <Row className="Content-element">
		        <Element id="ryhmaliikunta-element" name="ryhmaliikunta" className="Image-container">
		        	<div className="Image-container-element">
		        		<h1 className="Image-container-element-header">{ryhmaliikunta.header}</h1>
		        		<div className="Image-container-element-content">
		        			<p>{ryhmaliikunta.text}</p>
		        			<Button bsSize="large" bsStyle="custom">Varaa tunti</Button>
		        		</div>
		        	</div>
		        </Element>
		    </Row>
		    <Row className="Content-element">
		        <Element name="harjoitukset" className="element">
		        	<Row>
		          		<div><h3>{ryhmaliikunta.exercises.header}</h3></div>
				    	<div>
				    		{
				    			ryhmaliikunta.exercises.exerciseTypes.map((exercise) =>  {
				    				return (
				    					<Col xs={12} md={3}>
				    						<div className="exercise aqua-border-top">
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
		        <Element className="Image-container" name="aikataulut">
		        	<Image src="http://placehold.it/1900x800" responsive />
		        	<div className="Image-container-element">
		        		<h1 className="Image-container-element-header">{`Aikataulut`}</h1>
		        	</div>
		        </Element>
		    </Row>

		    <Row className="Content-element">
		        <Element className="Image-container" id="personal-trainer-element" name="personal_training">
		        	<div className="Image-container-element">
		        		<h1 className="Image-container-element-header">{`Personal trainer`}</h1>
		        		<div className="Image-container-element-content">
		        			<p>{pt.content}</p>
		        		</div>
		        	</div>
		        </Element>
		    </Row>


		    

		    <Row className="Content-element">
		        <Element name="-" className="element aqua-border-left">
		        	<Row>
		        		<Col xs={12} md={8}>
			          		<div><h2>{yrityspalvelut.header.text}</h2></div>
					    	<div>
					    		{
					    			yrityspalvelut && yrityspalvelut.paragraphs.map((paragraph) => {
					    				return (<p>{paragraph.text}</p>);
					    			})
					    		}
					    	</div>
					    </Col>
					    <Col xs={12} md={4}>
							<Image src={yrityspalvelutImg} responsive />
						</Col>
					</Row>
		        </Element>
		    </Row>

		    <Row className="Content-element">
		        <Element name="yhteystiedot-hinnasto" className="element aqua-border-right">
		        	<Row>
		        		<Col xs={12} md={4}>
							<Image src="http://placehold.it/300" responsive />
						</Col>
						<Col xs={12} md={8}>
			          		<div><h2>{`Yhteystiedot ja hinnasto`}</h2></div>
					    	<div><p>{`Yhteystiedot ja hinnasto content`}</p></div>
					    </Col>
					</Row>
		        </Element>
		    </Row>

		</div>
	);
};

export default ContentContainer;