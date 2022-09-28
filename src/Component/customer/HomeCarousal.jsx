import React from "react";

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBCarouselElement,
} from "mdb-react-ui-kit";

export default function HomeCarousal() {
  return (
    <MDBCarousel showControls className="my-1 ">
      <MDBCarouselInner>
        <MDBCarouselItem className="active ">
          <MDBCarouselElement
            className="carousalimage1"
            style={{ height: "500px", width: "100%" }}
          />
          <MDBCarouselCaption className="text-dark">
            <h3 className="display-6">Vehicle Accessories E-store</h3>
            <p>
             For your safety and comfort
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        {/* <MDBCarouselItem>
          <MDBCarouselElement
            className="carousalimage3 "
            style={{ height: "500px", width: "100%" }}
          />
          <MDBCarouselCaption className="text-dark">
            <h3 className="display-4">First slide label</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
              corrupti, cum repellat alias consectetur ipsam, omnis fuga facilis
              quos deserunt adipisci mollitia aut velit amet, dolor veniam
              maxime? Delectus, facilis.
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement
            className="carousalimage2"
            style={{ height: "500px", width: "100%" }}
          />
          <MDBCarouselCaption className="text-dark">
            <h3 className="display-4">First slide label</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
              corrupti, cum repellat alias consectetur ipsam, omnis fuga facilis
              quos deserunt adipisci mollitia aut velit amet, dolor veniam
              maxime? Delectus, facilis.
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem> */}
      </MDBCarouselInner>
    </MDBCarousel>
  );
}
