import React from 'react';

const InstaItem = props => {
    const isVideo = props.edge.node.is_video;
    const thumbnail_resources = props.edge.node.thumbnail_resources;
    const image = thumbnail_resources[1].src;
    const shortcode = props.edge.node.shortcode;
    const url = `https://www.instagram.com/p/${shortcode}`;
    const alt = props.edge.node.accessibility_caption;
    return (
        !isVideo &&
            <div className="insta-item">
                <a href={`${url}`}>
                    <img src={image} alt={alt}/>
                </a>
            </div>
    );
};

export default InstaItem;