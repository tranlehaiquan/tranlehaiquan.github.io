import { useStaticQuery, graphql } from 'gatsby';

type SiteMetadata = {
  author: {
    name: string;
    bio: string;
    photo: string;
    contacts: {
      facebook: string;
      linkedin: string;
      github: string;
      twitter: string;
      telegram: string;
      instagram: string;
      email: string;
      rss: string;
      vkontakte: string;
      line: string;
      gitlab: string;
      weibo: string;
      codepen: string;
      youtube: string;
      soundcloud: string;
      medium: string;
    };
  };
  menu: {
    label: string;
    path: string;
  }[];
  url: string;
  title: string;
  subtitle: string;
  copyright: string;
  disqusShortname: string;
};

const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                facebook
                linkedin
                github
                twitter
                telegram
                instagram
                email
                rss
                vkontakte
                line
                gitlab
                weibo
                codepen
                youtube
                soundcloud
                medium
              }
            }
            menu {
              label
              path
            }
            url
            title
            subtitle
            copyright
            disqusShortname
          }
        }
      }
    `,
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
