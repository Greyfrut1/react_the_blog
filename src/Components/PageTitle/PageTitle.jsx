import React from "react";
import striptags from "striptags";

function TitleBlog({ customStyle, object }) {
  return (
    <div style={customStyle} className="page_title">
      <svg viewBox="0 0 70 15">
        <text className="page_title__text" x={0} y={13}>
          {striptags(object?.data?.[0]?.body?.value)}
        </text>
      </svg>
    </div>
  );
}
export default TitleBlog;
