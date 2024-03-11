import Provider from "./Provider";

import "./globals.css";

export const metadata = {
  title: "Chatly",
  description: "A Real-time Web Messaging Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body>
          {children}
        </body>
      </Provider>
    </html>
  );
}
