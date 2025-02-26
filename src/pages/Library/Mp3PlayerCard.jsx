import { useRef, useState, useEffect } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

const formatTime = (seconds) => {
  if (isNaN(seconds) || seconds < 0) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
};

const MP3PlayerCard = ({ filePath, title }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(null);
  const [isLoopActive, setIsLoopActive] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnd = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnd);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  useEffect(() => {
    if (isLoopActive && audioRef.current) {
      if (endTime !== null && audioRef.current.currentTime >= endTime) {
        audioRef.current.currentTime = startTime;
      }
    }
  }, [currentTime, isLoopActive, startTime, endTime]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSpeedChange = (newSpeed) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = newSpeed;
      setSpeed(newSpeed);
    }
  };

  const resetLoop = () => {
    setIsLoopActive(false);
    setStartTime(0);
    setEndTime(null);
  };

  return (
    <div className="bg-gray-900 text-white p-3 rounded-lg w-64 shadow-md flex flex-col items-center">
      <h2 className="font-main text-md font-semibold mb-2">{title}</h2>
      <audio ref={audioRef} src={filePath} />

      <button
        onClick={togglePlay}
        className="bg-blue-600 p-2 rounded-full shadow-lg hover:bg-blue-800"
      >
        {isPlaying ? (
          <PauseIcon className="w-5 h-5 text-white" />
        ) : (
          <PlayIcon className="w-5 h-5 text-white" />
        )}
      </button>

      <div className="w-full mt-3">
        <input
          type="range"
          min={0}
          max={duration || 100}
          value={currentTime}
          onChange={(e) => {
            if (audioRef.current) {
              audioRef.current.currentTime = Number(e.target.value);
              setCurrentTime(Number(e.target.value));
            }
          }}
          className="w-full cursor-pointer"
        />
        <div className="flex justify-between text-xs mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex justify-between items-center w-full mt-2 text-xs">
        <div className="flex items-center gap-1">
          <label>Start:</label>
          <input
            type="number"
            min={0}
            max={duration || 100}
            value={startTime}
            onChange={(e) => setStartTime(Number(e.target.value))}
            className="bg-gray-800 p-1 rounded w-12 text-center"
          />
        </div>
        <div className="flex items-center gap-1">
          <label>End:</label>
          <input
            type="number"
            min={startTime + 1}
            max={duration || 100}
            value={endTime || ""}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value > startTime) {
                setEndTime(value);
                setIsLoopActive(true);
              }
            }}
            className="bg-gray-800 p-1 rounded w-12 text-center"
          />
        </div>
      </div>

      <button
        onClick={resetLoop}
        className="bg-red-600 text-white px-2 py-1 rounded shadow-md hover:bg-red-800 mt-3 text-xs"
      >
        Reset Loop
      </button>

      <div className="mt-3">
        <label className="mr-2 text-xs">Speed:</label>
        <select
          value={speed}
          onChange={(e) => handleSpeedChange(Number(e.target.value))}
          className="bg-gray-800 p-1 rounded text-xs"
        >
          {[0.5, 1, 1.5, 2].map((s) => (
            <option key={s} value={s}>
              {s}x
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MP3PlayerCard;
