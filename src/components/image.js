import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Image({ image, desktopImage, styles, alt, className }) {
  return (
    <picture>
      {desktopImage && (
        <>
          <source media="(min-width: 480px)" srcSet={desktopImage.srcSet} />
          <source
            media="(min-width: 480px)"
            srcSet={desktopImage.srcSetWebp}
            type="image/webp"
          />
        </>
      )}
      <source srcSet={image.srcWebp} type="image/webp" />
      <img
        className={className}
        src={image.src}
        srcSet={image.srcSet}
        loading="lazy"
        css={styles}
        alt={alt}
      />
    </picture>
  );
}

const imageShape = PropTypes.shape({
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  srcWebp: PropTypes.string,
  srcSetWebp: PropTypes.string,
  className: PropTypes.string,
});

Image.propTypes = {
  image: imageShape.isRequired,
  desktopImage: imageShape,
};
export default Image
