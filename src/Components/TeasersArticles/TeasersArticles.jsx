import React from "react";
import striptags from "striptags";

function TeasersArticles({ firstTeaserArticle, teasersArticles }) {
  const rootAdress = "http://91.107.217.207";

  return (
    <div className="teasers_articles">
      <a
        href={rootAdress + firstTeaserArticle?.[0]?.view_node}
        className="teasers_articles__link_first_article"
      >
        <div className="teasers_articles__first_article">
          <div className="teasers_articles__first_article__container1">
            <img
              src={rootAdress + firstTeaserArticle?.[0]?.field_image_1}
              alt="alt"
            ></img>
          </div>
          <div className="teasers_articles__first_article__container2">
            <div className="teasers_articles__first_article__date">
              {firstTeaserArticle?.[0]?.field_date}
            </div>
            <h3 className="teasers_articles__first_article__title">
              {firstTeaserArticle?.[0]?.title_1}
            </h3>
            <p className="teasers_articles__first_article__body">
              {striptags(firstTeaserArticle?.[0]?.body)}
            </p>
          </div>
        </div>
      </a>
      <div className="teasers_articles__other_articles">
        {teasersArticles.map((item, key) => (
          <a
            href={rootAdress + item.view_node}
            className="teasers_articles__other_articles__link"
            key={key}
          >
            <div className="teasers_articles__other_articles__block">
              <div className="teasers_articles__other_articles__container1">
                <img src={rootAdress + item.field_image_1} alt="alt"></img>
              </div>
              <div className="teasers_articles__other_articles__container2">
                <div className="teasers_articles__other_articles__date">
                  {item.field_date}
                </div>
                <h3 className="teasers_articles__other_articles__title">
                  {item.title_1}
                </h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default TeasersArticles;
