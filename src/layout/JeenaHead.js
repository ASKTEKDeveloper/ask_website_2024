import Head from "next/head";

const JeenaHead = () => {
  return (
    <Head>
      {/* Required meta tags */}
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="ASK Technology provides innovative IT solutions and services, including ERP software, mobile app development, and digital marketing. Transform your business with our cutting-edge technology."
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {/* Title */}
      <title>ASK Technology - IT Solutions & Services</title>

      {/* Favicon */}
      <link
        rel="shortcut icon"
        href="/assets/images/favicon.png"
        type="image/x-icon"
      />
      <link
        rel="icon"
        href="/assets/images/favicon-light.png"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        href="/assets/images/favicon-dark.png"
        media="(prefers-color-scheme: dark)"
      />

      {/* OpenGraph Tags */}
      <meta
        property="og:title"
        content="ASK Technology - IT Solutions & Services"
      />
      <meta
        property="og:description"
        content="ASK Technology provides innovative IT solutions and services, including ERP software, mobile app development, and digital marketing. Transform your business with our cutting-edge technology."
      />
      <meta
        property="og:image"
        content="https://yourwebsite.com/og-image.jpg"
      />
      <meta property="og:url" content="https://yourwebsite.com/" />
      <meta property="og:type" content="website" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://yourwebsite.com/" />

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* External CSS */}
      <link rel="stylesheet" href="/assets/css/flaticon.min.css" />
      <link rel="stylesheet" href="/assets/css/fontawesome-5.14.0.min.css" />
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
      <link rel="stylesheet" href="/assets/css/nice-select.min.css" />
      <link rel="stylesheet" href="/assets/css/animate.min.css" />
      <link rel="stylesheet" href="/assets/css/slick.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </Head>
  );
};

export default JeenaHead;
