import React from "react";
import striptags from "striptags";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BottomBlock({ content1, content2, content3, banner }) {
  const rootAdress = "http://91.107.217.207";

  const extractHref = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const link = doc.querySelector("a");
    return link ? link.getAttribute("href") : "";
  };

  return (
    <div className="bottom_block">
      <div className="bottom_block__articles">
        <h3 className="bottom_block__articles_title">Artikel Lainnya</h3>
        <div className="bottom_block__articles_container">
          {content1.map((item, key) => (
            <div className="bottom_block__article" key={key}>
              <div className="bottom_block__article__link">
                <div className="bottom_block__article__container1">
                  <div
                    className="bottom_block__article__date"
                    dangerouslySetInnerHTML={{ __html: item.field_date }}
                  ></div>
                  <div className="bottom_block__article__title">
                    <a href={rootAdress + extractHref(item.title)}>
                      {striptags(item.title)}
                    </a>
                  </div>
                  <div>
                    <div className="bottom_block__article__body" key={key}>
                      {striptags(item.body)}
                    </div>
                  </div>
                </div>
                <img
                  className="bottom_block__article__img"
                  src={rootAdress + item.field_image_1}
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom_block__sidebar">
        <div className="bottom_block__sidebar__archives">
          <h3 className="bottom_block__sidebar__archives__title">Arsip 2021</h3>
          <div>
            {content2.map((item, key) => (
              <div key={key} className="bottom_block__sidebar__archives__card">
                <div className="bottom_block__sidebar__archives__card__date">
                  {item.field_date}
                </div>
                <div className="bottom_block__sidebar__archives__card__title">
                  <a href={rootAdress + extractHref(item.title)}>
                    {striptags(item.title)}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom_block__sidebar__bunner">
          <img
            className="bottom_block__sidebar__bunner_img"
            alt="alt"
            src={rootAdress + banner?.data?.field_image?.uri?.url}
          ></img>
        </div>
        <div className="bottom_block__sidebar__testimonials">
          <h3 className="bottom_block__sidebar__testimonials__title">
            Testimonial{" "}
          </h3>
          {content3.map((item, key) => (
            <div
              key={key}
              className="bottom_block__sidebar__testimonials__card"
            >
              <img
                className="bottom_block__sidebar__testimonials__img"
                src={rootAdress + item.field_image_1}
                alt="alt"
              ></img>
              <div className="bottom_block__sidebar__testimonials__container">
                <div
                  className="bottom_block__sidebar__testimonials__body"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                ></div>
                <div className="bottom_block__sidebar__testimonials__card_title">
                  <a href={rootAdress + extractHref(item.title)}>
                    {striptags(item.title)}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BottomBlock;
