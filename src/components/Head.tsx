import { Helmet } from 'react-helmet';

type HeadProps = {
  title: string;
  image: string;
  url: string;
  description: string;
};

export default function Head(MetaData: HeadProps) {
  const { title, image, url, description } = MetaData;
  return (
    <Helmet>
      <title>Développeur React / Typescript </title>
      <meta property="og:title" content={title} />
      <meta property="og:locale" content="fr_FRANCE" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}
