import PropTypes from "prop-types";
import Slider from "react-slick";
import { useRef } from "react";
// @mui
import { useTheme, styled } from "@mui/material/styles";
import { Box } from "@mui/material";
// _mock_

// components
import Image from "@components/Common/Image";
import { CarouselDots, CarouselArrows } from "@components/Common/carousel";

const APP_BANNER_IMAGES = [
  {
    id: 1,
    image: "/images/banner/banner_principal_web_7.jpg",
    title: "banner_principal_web_7.jpg",
  },
  {
    id: 2,
    image: "/images/banner/banner_principal_web_6.jpg",
    title: "banner_principal_web_6.jpg",
  },
  {
    id: 3,
    image: "/images/banner/banner_principal_web_4.jpg",
    title: "banner_principal_web_4.jpg",
  },
  {
    id: 4,
    image: "/images/banner/banner_principal_web_1.jpg",
    title: "banner_principal_web_1.jpg",
  },
];

// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
  position: "relative",
  "& .slick-list": {
    //boxShadow: theme.customShadows.z16,
    //borderRadius: Number(theme.shape.borderRadius) * 2,
  },
}));

// ----------------------------------------------------------------------

export default function AppMainCarrousel() {
  const theme = useTheme();
  const carouselRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === "rtl"),
    ...CarouselDots({
      rounded: true,
      sx: { mt: 3 },
    }),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <RootStyle>
      <CarouselArrows
        filled
        onNext={handleNext}
        onPrevious={handlePrevious}
        sx={{
          "& .arrow": {
            "&.left": { left: 16 },
            "&.right": { right: 16 },
          },
        }}
        customIcon={null}
      >
        <Slider ref={carouselRef} {...settings}>
          {APP_BANNER_IMAGES.map((item) => (
            <CarouselItem key={item.id} item={item} />
          ))}
        </Slider>
      </CarouselArrows>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
  }),
};

function CarouselItem({ item }) {
  const { image, title } = item;

  return <Image alt={title} src={image} ratio="21/9" sx={{ width: "auto" }} />;
}
