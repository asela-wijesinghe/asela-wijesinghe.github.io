import * as React from 'react';
import Masonry from 'react-masonry-component';
import {Link} from "react-router-dom";

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Gallery extends React.Component {

    render() {
        const renderCard =function (element) {
            return (
                <center>
                    <img src={element.src} className="project-image" />
                    <div class="text-container">
                        <h4 className="title"><b>{element.title}</b></h4>
                        <p className="sub-title">{element.role}</p>
                        <div className="tag-container">
                            {element.techs.map(tech => <p className="tag">{tech}</p>)}
                        </div>
                    </div>
                    
                </center>
                );
        };


        const childElements = this.props.elements.map(function (element) {
            return (

                <div class="grid-card">
                    
                    {(element.linkID) ? <Link to={"/blog/"+element.linkID} className="not-link">
                        {renderCard(element)} </Link>: renderCard(element) }
                  
                </div>

            );
        });

        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        );
    }
}

export default Gallery;