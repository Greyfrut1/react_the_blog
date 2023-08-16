import React from "react";
import striptags from "striptags";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LatestArticles({ objects }) {
  const rootAdress = "http://91.107.217.207";

  const extractHref = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const link = doc.querySelector("a");
    return link ? link.getAttribute("href") : "";
  };

  return (
    <div className="latest_articles">
      <h3 className="latest_articles__title">Artikel Terbaru</h3>
      <div className="latest_articles__content">
        {objects.map((item, index) => (
          <div className="latest_articles__card" key={index}>
            <div className="latest_articles__link">
              <img
                className="latest_articles__img"
                src={rootAdress + item.field_image_1}
              ></img>
              <div
                className="latest_articles__date"
                dangerouslySetInnerHTML={{ __html: item.field_date }}
              ></div>
              <div className="latest_articles__content__title">
                <a href={rootAdress + extractHref(item.title)}>
                  {striptags(item.title)}
                </a>
              </div>
              <div>
                <div className="latest_articles__body" key={index}>
                  {striptags(item.body)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestArticles;
