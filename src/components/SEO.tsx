import React from "react";

export const SEO = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <script src="https://qo-op.github.io/simpa/simpa.js"></script>
    </>
  );
};
