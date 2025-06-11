// src/app/head.tsx
export default function Head() {
  return (
    <>
      <title>Rithika Murali • Software Engineer Portfolio</title>
      <meta
        name="description"
        content="Rithika Murali’s portfolio—Full-Stack Developer specializing in React, Node.js, Python, and Azure."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Social */}
      <meta property="og:title" content="Rithika Murali • Software Engineer" />
      <meta
        property="og:description"
        content="Building scalable web applications with React, Node.js & Python."
      />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:url" content="https://your-domain.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
