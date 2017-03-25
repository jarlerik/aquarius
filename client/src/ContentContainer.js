import React from 'react';
import './ContentContainer.css';
import {Element} from'react-scroll';
import {Col, Image, Row} from 'react-bootstrap';


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
			jotka saat Aquariuksen vastaanotosta.`
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



const ContentContainer = (props) => {
	return (

		<div className="contentContainer">
			<Row>
				<Element name="ajankohtaista" className="element aqua-border-left">
					<Row>
						<Col xs={12} md={8}>
							<div><h2>{header}</h2></div>
					    	<div><p>{p1}</p></div>
					    	<div><p>{p2}</p></div>
					    </Col>
						<Col xs={12} md={4}>
							<Image src="http://placehold.it/300" responsive />
						</Col>
					</Row>
	          		
		        </Element>
		    </Row>
		    <hr/>
		    <Row>
		        <Element name="ryhmaliikunta" className="element aqua-border-right">
		        	<Row>
		        		<Col xs={12} md={4}>
							<Image src="http://placehold.it/300" responsive />
						</Col>
		        		<Col xs={12} md={8}>
			          		<div><h2>{ryhmaliikunta.header}</h2></div>
					    	<div><p>{ryhmaliikunta.text}</p></div>
					    </Col>
					</Row>
		        </Element>
		    </Row>
		    <hr/>
		    <Row>
		        <Element name="yrityspalvelut" className="element aqua-border-left">
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
							<Image src="http://placehold.it/300" responsive />
						</Col>
					</Row>
		        </Element>
		    </Row>


		</div>
	);
};

export default ContentContainer;