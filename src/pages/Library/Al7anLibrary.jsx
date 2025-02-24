import React from "react";
import Mp3PlayerCard from "./Mp3PlayerCard";

const Al7anLibrary = () => {
  const mp3Files = [
    {
      title: "لحن شاري افنوتي",
      artist: "Artist 1",
      filePath: "/src/assets/Al7an/1.mp3",
    },
    { title: "Song 2", artist: "Artist 2", filePath: "/assets/song2.mp3" },
    { title: "Song 3", artist: "Artist 3", filePath: "/assets/song3.mp3" },
    { title: "Song 3", artist: "Artist 3", filePath: "/assets/song3.mp3" },
    { title: "Song 3", artist: "Artist 3", filePath: "/assets/song3.mp3" },
    { title: "Song 3", artist: "Artist 3", filePath: "/assets/song3.mp3" },
    { title: "Song 3", artist: "Artist 3", filePath: "/assets/song3.mp3" },
    { title: "Song 3", artist: "Artist 3", filePath: "/assets/song3.mp3" },
    { title: "Song 3", artist: "Artist 3", filePath: "/assets/song3.mp3" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-32 mb-4 ">
      {mp3Files.map((mp3, index) => (
        <Mp3PlayerCard
          key={index}
          title={mp3.title}
          artist={mp3.artist}
          filePath={mp3.filePath}
        />
      ))}
    </div>
  );
};

export default Al7anLibrary;
