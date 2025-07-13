import { useEffect, useState } from "react";
import { HeartParticle } from "./heart-particle";

export const HeartParticles = () => {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => [...prev, Date.now()]);
    }, 300); // каждые 300 мс создаём новое сердечко

    return () => clearInterval(interval);
  }, []);

  const removeParticle = (id: number) => {
    setParticles((prev) => prev.filter((p) => p !== id));
  };

  return (
    <>
      {particles.map((id) => (
        <HeartParticle key={id} onRemove={() => removeParticle(id)} />
      ))}
    </>
  );
};
