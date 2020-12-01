import React from 'react';

const TagPreview = ({ entry, widgetFor }) => {
  const body = widgetFor('body');
  const title = entry.getIn(['data', 'title']);

  return (
    <div className="tag">
      <h1 className="tag__title">{title}</h1>
      <div className="tag__body">{body}</div>
    </div>
  );
};

export default TagPreview;
