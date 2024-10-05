import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

interface ProductGalleryProps {
  images?: string[];
}

const ProductGallery = ({ images = [] }: ProductGalleryProps) => {
  const [active, setActive] = React.useState(images[0]);

  return (
    <Stack className="grid gap-4">
      <Stack justifyContent="center" alignItems="center">
        <Image
          alt="models"
          className="h-auto w-full max-w-full rounded-lg object-cover object-center"
          src={active}
          width={0}
          height={0}
          sizes="(max-width: 600px) 100vw, 50vw"
          style={{
            maxWidth: "90vw", // Max width of 90% of the viewport
            maxHeight: "80vh", // Max height of 80% of the viewport height
            width: "100%", // Grow to 100% width of the parent container
            height: "auto", // Maintain aspect ratio
            objectFit: "cover",
            borderRadius: 8,
          }}
        />
      </Stack>
      <Stack
        className="gap-4"
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        {images.map((image, index) => (
          <Stack key={index}>
            <Image
              onClick={() => setActive(image)}
              alt="models"
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              src={image}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "200px",
                height: "130px",
                aspectRatio: "1/1",
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default ProductGallery;
