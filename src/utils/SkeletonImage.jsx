import { useEffect, useState } from "react";

const shimmerStyle = {
  background: "linear-gradient(90deg, #e5e7eb 25%, #d1d5db 50%, #e5e7eb 75%)",
  backgroundSize: "200% 100%",
  animation: "shimmer 1.5s infinite",
};

const styleTag = `
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
`;

function SkeletonImage({ src, alt = "", className = "", placeholder }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <>
      <style>{styleTag}</style>

      <div
        className={`relative overflow-hidden ${className}`}
        style={{ position: "relative" }}
      >
        <img
          src={loaded ? src : placeholder}
          alt={alt}
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {!loaded && (
          <div
            style={shimmerStyle}
            className="absolute inset-0 z-10 h-full w-full"
          />
        )}
      </div>
    </>
  );
}

export default SkeletonImage;
