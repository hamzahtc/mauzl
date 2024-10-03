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
      <Stack>
        <Image
          alt="models"
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            minWidth: "300px",
            aspectRatio: "1/1",
            height: "600px",
            objectFit: "cover",
            borderRadius: 8,
          }}
        />
      </Stack>
      <Stack className="gap-4" direction="row" justifyContent="center">
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
