import React from "react";

type Props = {
  embedId: string;
};

const YouTubeEmbed = ({ embedId }: Props) => {
  // IDからクエリパラメータを分離
  const cleanEmbedId = embedId.split("?")[0];

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        height: 0,
        overflow: "hidden",
        maxWidth: "100%",
        background: "#000",
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${cleanEmbedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default YouTubeEmbed;
