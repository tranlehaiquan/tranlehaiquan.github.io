import CMS from 'netlify-cms-app';
import PagePreview from './preview-templates/page-preview';
import PostPreview from './preview-templates/post-preview';
import NotePreview from './preview-templates/note-preview';

import styles from './content.css';

CMS.registerPreviewStyle(styles);
CMS.registerPreviewTemplate('pages', PagePreview);
CMS.registerPreviewTemplate('posts', PostPreview);
CMS.registerPreviewTemplate('notes', NotePreview);
