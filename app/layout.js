// layout.js is a reserved word in NextJS and will be used as a layout component.
// layout.js may be used in other route components

import './globals.css'

// metadata is a reserved word in NextJS, that represent metadata data. 
// This is added by NextJS to the head of the document automatically.
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

// wraps children that represents the content component (page.js)
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
