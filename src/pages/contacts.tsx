import React from 'react';

import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const PageTemplate: React.FC = () => {
  const { title: siteTitle } = useSiteMetadata();

  return (
    <Layout detailUrl="/contact" title={`Liên hệ - ${siteTitle}`}>
      <Sidebar />
      <Page title="Liên hệ">
        <ContactForm />
      </Page>
    </Layout>
  );
};

export default PageTemplate;
