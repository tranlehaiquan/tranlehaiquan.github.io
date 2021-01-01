import React from 'react';
import Layout from '../../components/Layout';

import classes from './you.module.scss';

function ForYou() {
  return (
    <div className={classes.root}>
      <Layout title="Đôi lời">
        <blockquote className={classes.quote}>
          <p>
            I wish you will be happy and successful. <br />
            For the one who goes with you always loving you. <br />
            Thank you so much for everything.
          </p>
        </blockquote>
      </Layout>
    </div>
  );
}

export default ForYou;
