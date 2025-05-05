import { useEffect, useRef, useState } from "react";

function ZoomImage({ src, alt }) {
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const zoomRef = useRef(null);

  // zoom position information based on cursor hover or tap
  const updatePosition = (clientX, clientY, target) => {
    const { left, top, width, height } = target.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  // zoom in hover for desktop
  const handleMouseMove = (e) => {
    if (zoom) {
      updatePosition(e.clientX, e.clientY, e.currentTarget);
    }
  };

  // close zoom when clicked outside img, this is only for mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (zoom && zoomRef.current && !zoomRef.current.contains(e.target)) {
        setZoom(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [zoom]);

  // Toggle zoom state on click
  const handleZoomToggle = (e) => {
    setZoom((prevZoom) => !prevZoom);
    if (!zoom) {
      updatePosition(e.clientX, e.clientY, e.currentTarget);
    }
  };

  return (
    <div
      ref={zoomRef}
      className={`relative mx-auto mb-8 flex w-full flex-col items-center overflow-hidden md:w-[85%] ${
        zoom ? "cursor-zoom-out" : "cursor-zoom-in"
      }`}
      onClick={handleZoomToggle}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        className="w-full rounded-custom border border-grayText/25 object-cover transition-transform duration-300"
      />

      {/* zoom in overlay image */}
      {zoom && (
        <div
          className="pointer-events-none absolute inset-0 rounded-custom border border-grayText/40 bg-bigzoom bg-no-repeat md:bg-normalzoom transition-transform duration-300"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: `${position.x}% ${position.y}%`,
          }}
        />
      )}
    </div>
  );
}

export default ZoomImage;