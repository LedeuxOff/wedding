// src/components/AnimatedDoggie.tsx
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import "./animatedDoggie.css";

export const AnimatedDoggie: React.FC = () => {
  const [animationData, setAnimationData] = useState(null);
  const [isBarking, setIsBarking] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Загружаем JSON анимации
  useEffect(() => {
    const loadAnimation = async () => {
      const response = await fetch("/lotties/dog.json"); // твой единственный файл
      const data = await response.json();
      setAnimationData(data);
    };

    loadAnimation();
  }, []);

  const handleClick = () => {
    setIsBarking(true);

    // Сброс через 1 секунду
    setTimeout(() => {
      setIsBarking(false);
    }, 1000);
  };

  // Отслеживаем скролл
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Скроллим вниз — показываем собаку
        setIsVisible(true);
      } else {
        // Скроллим вверх — прячем
        setIsVisible(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={`doggie-container ${isVisible ? "show" : "hide"}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Собака"
    >
      {animationData && (
        <Lottie options={defaultOptions} height={150} width={150} />
      )}
      {isBarking && <div className="bark-bubble">Гав!</div>}
    </div>
  );
};
