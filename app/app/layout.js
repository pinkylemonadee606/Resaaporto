export const metadata = {
  title: "Reza Aditia Portfolio",
  description: "Internal Communication & Operational Alignment Professional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
