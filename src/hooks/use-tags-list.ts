import { useStaticQuery, graphql } from 'gatsby';

type Tag = {
  fieldValue: string;
  totalCount: number;
};

const useTagsList = (): Tag[] => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query TagsListQuery {
        allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  );

  return allMarkdownRemark.group;
};

export default useTagsList;
