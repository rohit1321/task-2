import { useRef, useState } from "react";
import "../style/AudioPlayer.css"; // Import regular CSS file
import Image from "next/image";

const AudioPlayer = () => {
    const audioRef = useRef(null);
    const progressRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // Format time in minutes and seconds
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        const current = audioRef.current.currentTime;
        setCurrentTime(current);
        const progressPercent = (current / audioRef.current.duration) * 100;
        progressRef.current.style.width = `${progressPercent}%`;
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleProgressClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const newTime = (offsetX / rect.width) * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
    };

    return (
        <div className="mx-3">
            <audio
                ref={audioRef}
                src="/pdfToAudio/song.mp3"//path for audio
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            ></audio>
            <div className="d-flex align-items-center mb-3">
                <div
                    className="progress flex-grow-1 mx-3 progressContainer"
                    onClick={handleProgressClick}
                >
                    <div
                        ref={progressRef}
                        className="progress-bar progressBar"
                    ></div>
                </div>
            </div>
            <div className="d-flex justify-content-between mx-4">
                <span className="text-muted">{formatTime(currentTime)}</span>
                <span className="text-muted">{formatTime(duration)}</span>
                </div>
            {/*  */}
            <div className="d-flex justify-content-center gap-3 mb-5 pb-5">
                <Image
                    src="/pdfToAudio/Frame 1618872876.svg"
                    className="icon-img "
                    alt="..."
                    width={25}
                    height={25}
                />
                <button onClick={togglePlayPause} >
                    {isPlaying ? (
                        <Image
                            src="/pdfToAudio/Button Plus.svg"
                            alt="Pause Icon"
                            className="control-icon"
                            width={25}
                            height={25}
                        />
                    ) : (
                        <Image
                            src="/pdfToAudio/pause-1.svg"
                            alt="Play Icon"
                            className="control-icon "
                            width={25}
                            height={25}
                        />
                    )}
                </button>
                <Image
                    src="/pdfToAudio/Frame 1618872875.svg"
                    className="icon-img "
                    alt="..."
                    width={25}
                    height={25}
                />
            </div>
            {/*  */}
        </div>
    );
};

export default AudioPlayer;
