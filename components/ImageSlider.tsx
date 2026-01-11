"use client";

import { Box, Image } from "@mantine/core";

// All images from /public/images
const images = [
  "/images/apple.jpeg",
  "/images/berries.jpeg",
  "/images/chocolate.jpeg",
  "/images/flower.jpeg",
  "/images/flowercut.jpeg",
  "/images/flowercut2.jpeg",
  "/images/flowers3.jpeg",
  "/images/flowers3side.jpeg",
  "/images/mango.jpeg",
  "/images/paint.jpeg",
  "/images/paint2.jpeg",
  "/images/choco2.jpeg",
  "/images/choco3.jpeg",
];

// Split images into two rows
const topRowImages = images.slice(0, 6);
const bottomRowImages = images.slice(6);

interface SliderRowProps {
  images: string[];
  direction: "left" | "right";
  duration?: number;
}

function SliderRow({ images, direction, duration = 30 }: SliderRowProps) {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  const animationStyle =
    direction === "left"
      ? {
          animation: `slideLeft ${duration}s linear infinite`,
        }
      : {
          animation: `slideRight ${duration}s linear infinite`,
        };

  return (
    <Box
      style={{
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Box
        className={
          direction === "left" ? "slider-row-left" : "slider-row-right"
        }
        style={{
          display: "flex",
          gap: "16px",
          width: "fit-content",
          ...animationStyle,
        }}
      >
        {duplicatedImages.map((src, index) => (
          <Box
            key={`${src}-${index}`}
            style={{
              flexShrink: 0,
              width: "280px",
              height: "200px",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              w="100%"
              h="100%"
              fit="cover"
              style={{
                transition: "transform 0.3s ease",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export function ImageSlider() {
  return (
    <>
      <style>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>

      <Box py={{ base: 40, md: 60 }}>
        {/* Top row - slides left */}
        <Box mb="md">
          <SliderRow images={topRowImages} direction="left" duration={35} />
        </Box>

        {/* Bottom row - slides right */}
        <Box>
          <SliderRow images={bottomRowImages} direction="right" duration={30} />
        </Box>
      </Box>
    </>
  );
}
