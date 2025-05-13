import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

interface ProductGalleryProps {
  images?: string[];
}

const ProductGallery = ({ images = [] }: ProductGalleryProps) => {
  const [active, setActive] = React.useState(images[0]);
  const [hoverPosition, setHoverPosition] = React.useState({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = React.useState(0); // State to track the active thumbnail index

  // Function to update the hover position
  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100; // Calculate relative X position as a percentage
    const y = ((e.clientY - top) / height) * 100; // Calculate relative Y position as a percentage
    setHoverPosition({ x, y });
  };

  return (
    <Stack
      direction={{ xs: "column", lg: "row" }} // Set the layout direction to horizontal (row)
      spacing={2} // Add spacing between the thumbnails and large image
      alignItems={{ xs: "center", md: "flex-start" }}
    >
      {/* Thumbnail images on the left */}
      <Stack
        className="gap-4"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {images.map((image, index) => (
          <Stack key={index}>
            {/* Switch active image on hover */}
            <Image
              alt="models"
              className="cursor-pointer object-cover object-center"
              src={image}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                minWidth: "100px",
                width: "100px", // Thumbnail width
                height: "150px", // Thumbnail height
                objectFit: "cover",
                border:
                  activeIndex === index
                    ? "3px solid black"
                    : "3px solid transparent", // Apply border based on activeIndex
              }}
              onMouseEnter={() => {
                setActive(image);
                setActiveIndex(index); // Set active index on hover
              }}
            />
          </Stack>
        ))}
      </Stack>

      {/* Large image on the right */}
      <Stack justifyContent="center" alignItems="center" width="100%">
        <Box
          className="relative w-full max-w-[600px] min-w-[300px] aspect-[4/5] overflow-hidden group"
          onMouseMove={handleMouseMove}
        >
          <Image
            alt="models"
            className="object-cover object-center w-full h-full transform transition-transform duration-300 ease-in-out group-hover:scale-[3] cursor-zoom-in"
            src={active}
            width={0}
            height={0}
            sizes="(max-width: 600px) 100vw, 50vw"
            style={{
              transformOrigin: `${hoverPosition.x}% ${hoverPosition.y}%`,
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default ProductGallery;
