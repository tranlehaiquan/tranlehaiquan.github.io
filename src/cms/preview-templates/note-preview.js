// @flow strict
import React from 'react';
import type { Entry, WidgetFor } from '../../types';

type Props = {
  entry: Entry,
  widgetFor: WidgetFor
};

const TagPreview = ({ entry, widgetFor }: Props) => {
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
