import React from "react";
import striptags from "striptags";

function StaticBlock({ object, styleClass }) {
  const rootAdress = "http://91.107.217.207";

  return (
    <div className={"static_block " + styleClass + "_block"}>
      <div
        className={
          "static_block__container1 " + styleClass + "_block__container1"
        }
      >
        <h2 className={"static_block__title " + styleClass + "_block__title"}>
          {object?.data?.field_title}
        </h2>
        <p className={"static_block__body " + styleClass + "_block__body"}>
          {striptags(object?.data?.body?.processed)}
        </p>
        <a
          href={object?.data?.field_link?.uri}
          className={"static_block__link " + styleClass + "_block__link"}
        >
          {object?.data?.field_link?.title}
        </a>
      </div>
      <div
        className={
          "static_block__container2 " + styleClass + "_block__container2"
        }
      >
        <img
          className={"static_block__img " + styleClass + "_block__img"}
          src={rootAdress + object?.data?.field_image?.uri?.url}
          alt="alt"
        ></img>
      </div>
    </div>
  );
}

export default StaticBlock;
