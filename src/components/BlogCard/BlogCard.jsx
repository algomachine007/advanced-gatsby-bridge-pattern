import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import ContentfulImage from 'utility-components/ContentfulImage/ContentfulImage';

import svgPropTypesShape from 'utility-components/propTypeShapes/svgPropTypesShape';
import { formatDate } from 'helpers/formatDate';
import truncateText from 'helpers/truncateText';
import styles from './BlogCard.module.scss';

const BlogCard = ({ title, mainImage, date, page }) => (
  <Link className={styles.blogCard} to={`/${page.path}`}>
    <div className={styles.image}>
      <ContentfulImage image={mainImage} className={styles.imageHeight} />
    </div>

    <div className={styles.content}>
      <time>{formatDate(date)}</time>
      <h2>{truncateText(title, 60)}</h2>
    </div>
  </Link>
);

export default BlogCard;

BlogCard.defaultProps = {
  page: {
    path: '',
  },
  title: '',
  mainImage: {},
  date: '',
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  mainImage: svgPropTypesShape.isRequired,
  page: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }),
};
