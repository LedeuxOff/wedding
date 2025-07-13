import { useEffect, useState } from "react";

interface HeartProps {
  onRemove: () => void;
}

export const HeartParticle: React.FC<HeartProps> = ({ onRemove }) => {
  const [style, setStyle] = useState({
    left: Math.random() * window.innerWidth,
    animationDuration: `${3 + Math.random() * 3}s`,
    size: `${10 + Math.random() * 15}px`,
  });

  if (!style) {
    setStyle({
      left: Math.random() * window.innerWidth,
      animationDuration: `${3 + Math.random() * 3}s`,
      size: `${10 + Math.random() * 15}px`,
    });
  }

  useEffect(() => {
    const timer = setTimeout(onRemove, 5000); // удаляем через время анимации
    return () => clearTimeout(timer);
  }, [onRemove]);

  return (
    <span
      className="heart-particle"
      style={{
        position: "fixed",
        top: "100%",
        left: style.left,
        fontSize: style.size,
        pointerEvents: "none",
        color: "#ff3b30",
        opacity: 0.8,
        animation: `floatUp ${style.animationDuration} ease-out forwards`,
      }}
    >
      ❤️
    </span>
  );
};
