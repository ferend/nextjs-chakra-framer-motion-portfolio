import { Global } from "@emotion/react";

const Fonts = () => (
  <>
    <Global
      styles={`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');

        /* Set the global font color */
        body {
          color: #ffffff; /* Replace with your desired font color */
        }
      `}
    />
  </>
);

export default Fonts;
