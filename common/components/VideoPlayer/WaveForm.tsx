import styles from "./video-player.module.css";

interface WaveformProps {
  isPlaying: boolean;
}

export const Waveform = ({ isPlaying }: WaveformProps) => (
  <svg
    className={isPlaying ? styles.animatedWaveform : ""}
    fill="none"
    height="14"
    viewBox="0 0 14 14"
    width="14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.37383 2.04175V11.9584" stroke="#9096A2" strokeLinecap="round" />
    <path d="M2.04102 5.54175V8.45841" stroke="#9096A2" strokeLinecap="round" />
    <path d="M6.99883 4.37508V9.62508" stroke="#9096A2" strokeLinecap="round" />
    <path d="M9.62435 3.20841V10.7917" stroke="#9096A2" strokeLinecap="round" />
    <path d="M11.9577 5.54175V8.45841" stroke="#9096A2" strokeLinecap="round" />
  </svg>
);
