import React from "react";
import striptags from "striptags";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderBlock({ objects, title, styleClass }) {
  const rootAdress = "http://91.107.217.207";
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const extractHref = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const link = doc.querySelector("a");
    return link ? link.getAttribute("href") : "";
  };
  return (
    <div className={"slider_block " + styleClass + "_block"}>
      <h3 className={"slider_block__title " + styleClass + "_block__title"}>
        {title}
      </h3>
      <div>
        <Slider {...settings}>
          {objects.map((item, index) => (
            <div
              className={"slider_block__card " + styleClass + "_block__card"}
              key={index}
            >
              <div
                className={
                  "slider_block__card_inside " +
                  styleClass +
                  "_block__card_inside"
                }
              >
                <img
                  className={
                    "slider_block__card__img " +
                    styleClass +
                    "_block__card__img"
                  }
                  src={rootAdress + item.field_image_1}
                ></img>
                <div
                  className={
                    "slider_block__card__date " +
                    styleClass +
                    "_block__card__date"
                  }
                  dangerouslySetInnerHTML={{ __html: item.field_date }}
                ></div>
                <div
                  className={
                    "slider_block__card__title " +
                    styleClass +
                    "_block__card__title"
                  }
                >
                  <a href={rootAdress + extractHref(item.title)}>
                    {striptags(item.title)}
                  </a>
                </div>
                {item.body && (
                  <div>
                    <div
                      className={
                        "slider_block__card__body " +
                        styleClass +
                        "_block__card__body"
                      }
                      key={index}
                    >
                      {striptags(item.body)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderBlock;
