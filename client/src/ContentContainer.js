import React from 'react';
import './ContentContainer.css';
import {Element} from'react-scroll';


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

const ContentContainer = (props) => {
	return (

		<div className="contentContainer">
	    	<div><h2>{header}</h2></div>
	    	<div><p>{p1}</p></div>
	    	<div><p>{p2}</p></div>
	    	<Element name="test1" className="element">
			  test 1
			</Element>
		</div>
	);
};

export default ContentContainer;