"use client";

import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { SimpleGrid, Card, Image, Modal } from "@mantine/core";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export function ProductImageGallery({
  images,
  productName,
}: ProductImageGalleryProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  return (
    <>
      {/* Image Lightbox Modal */}
      <Modal
        opened={opened}
        onClose={close}
        size="xl"
        centered
        padding={0}
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
          body: {
            padding: 0,
          },
        }}
      >
        <Image
          src={selectedImage}
          alt={productName}
          radius="md"
          onClick={close}
          style={{ cursor: "pointer" }}
        />
      </Modal>

      {/* Image Grid */}
      <SimpleGrid
        cols={{
          base: 1,
          sm: images.length === 1 ? 1 : 2,
        }}
        spacing="md"
      >
        {images.map((image, index) => (
          <Card
            key={index}
            radius="lg"
            p={0}
            style={{
              overflow: "hidden",
              border: "1px solid #e9ecef",
              cursor: "pointer",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onClick={() => {
              setSelectedImage(image);
              open();
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Image
              src={image}
              alt={`${productName} - Image ${index + 1}`}
              style={{
                aspectRatio: "4/3",
                objectFit: "cover",
              }}
            />
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}
