import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div
      className={markdownStyles["markdown-body"]}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
