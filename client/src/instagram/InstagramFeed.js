import React from 'react';
import InstaItem from './InstaItem';
const InstagramFeed = props => {

    const { edges } = props;
    return (
        <div className="instagramFeed" style={{ textAlign: "center"}}>
            <hr/>
            <a className="follow-instagram" href="https://www.instagram.com/aquariussportingclubinkoo">
                <i className="fa fa-instagram fa-3x" />
            </a>
            <div className="insta-container" >
        
            { edges && edges.map((edge, index) => {
                return (
                    <InstaItem edge={edge}/>
                )
            })}
        </div>
        </div>
        
    );
};

export default InstagramFeed;