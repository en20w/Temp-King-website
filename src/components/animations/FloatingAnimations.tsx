
import React from 'react';

const FloatingAnimations = () => {
  return (
    <style jsx global>{`
      @keyframes float-1 {
        0%, 100% {
          transform: translateY(0px) rotate(0deg);
        }
        25% {
          transform: translateY(-10px) rotate(90deg);
        }
        50% {
          transform: translateY(-20px) rotate(180deg);
        }
        75% {
          transform: translateY(-10px) rotate(270deg);
        }
      }

      @keyframes float-2 {
        0%, 100% {
          transform: translateY(0px) rotate(0deg);
        }
        33% {
          transform: translateY(-15px) rotate(120deg);
        }
        66% {
          transform: translateY(-25px) rotate(240deg);
        }
      }

      @keyframes float-3 {
        0%, 100% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-18px) rotate(180deg);
        }
      }

      .animate-float-1 {
        animation: float-1 6s ease-in-out infinite;
      }

      .animate-float-2 {
        animation: float-2 8s ease-in-out infinite;
      }

      .animate-float-3 {
        animation: float-3 7s ease-in-out infinite;
      }
    `}</style>
  );
};

export default FloatingAnimations;
