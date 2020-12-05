import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { PAGINATION } from '../../constants';
import styles from './Pagination.module.scss';

type Props = {
  prevPagePath: string;
  nextPagePath: string;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

const Pagination: React.FC<Props> = ({ prevPagePath, nextPagePath, hasNextPage, hasPrevPage }) => {
  const prevClassName = clsx(styles['pagination__prev-link'], !hasPrevPage && styles['pagination__prev-link--disable']);

  const nextClassName = clsx(styles['pagination__next-link'], !hasNextPage && styles['pagination__next-link--disable']);

  return (
    <div className={styles['pagination']}>
      <div className={styles['pagination__prev']}>
        <Link rel="prev" to={hasPrevPage ? prevPagePath : '/'} className={prevClassName}>
          {PAGINATION.PREV_PAGE}
        </Link>
      </div>
      <div className={styles['pagination__next']}>
        <Link rel="next" to={hasNextPage ? nextPagePath : '/'} className={nextClassName}>
          {PAGINATION.NEXT_PAGE}
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
