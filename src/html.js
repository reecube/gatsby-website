import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  const version = 'zXvbyMwgEG';
  const title = 'Yves Riedener';

  return (
    <html {...props.htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <link rel="apple-touch-icon" sizes="180x180" href={`/apple-touch-icon.png?v=${version}`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`/favicon-32x32.png?v=${version}`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`/favicon-16x16.png?v=${version}`} />
      <link rel="manifest" href={`/site.webmanifest?v=${version}`} />
      <link rel="mask-icon" href={`/safari-pinned-tab.svg?v=${version}`} color="#222222" />
      <link rel="shortcut icon" href={`/favicon.ico?v=${version}`} />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="application-name" content={title} />
      <meta name="msapplication-TileColor" content="#222222" />
      <meta name="theme-color" content="#ffffff" />

      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
    {props.preBodyComponents}
    <div
      key={`body`}
      id="___gatsby"
      dangerouslySetInnerHTML={{ __html: props.body }}
    />
    {props.postBodyComponents}
    </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
