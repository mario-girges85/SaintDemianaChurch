import React from "react";
import Mp3PlayerCard from "./Mp3PlayerCard";
import Mp3player from "./Mp3player";
import shary_efnoty from "./Al7an siami/1.mp3";
const Al7anLibrary = () => {
  const mp3Files = [
    {
      title: "لحن شاري افنوتي",
      filePath: shary_efnoty,
    },
    { title: "Song 2", filePath: "./assets/song2.mp3" },

    { title: "Song 3", filePath: "./assets/song3.mp3" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-5 mb-4 ">
      {mp3Files.map((mp3, index) => (
        <Mp3player
          key={index}
          title={mp3.title}
          artist={mp3.artist}
          src={mp3.filePath}
        />
      ))}
    </div>
  );
};

export default Al7anLibrary;
