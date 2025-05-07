import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Software Recruitment co.",
  description: "Software Recruitment co. webpage created by Ethan Chong",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
