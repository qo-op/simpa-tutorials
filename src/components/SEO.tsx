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
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <script src="https://qo-op.github.io/simpa/simpa.js"></script>
    </>
  );
};
