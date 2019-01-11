/* eslint-disable */
const hostname = window.location.hostname;
let SITE_URL;

if (hostname === 'localhost') {
  SITE_URL = 'http://localhost:3000';
} else {
  SITE_URL = 'https://floatingdots.com';
}

export default function resolveProductionUrl(document) {
  const id = document._id;

  if (document._type === 'projects') {
    return `${SITE_URL}/preview/projects/${id}`;
  }
  if (document._type === 'blog') {
    return `${SITE_URL}/preview/blog/${id}`;
  }
  return null;
}
