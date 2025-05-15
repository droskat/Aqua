import styles from "../app/layout.module.css";
import ClientProviders from "../components/clientProviders/clientProviders";
import Header from "../components/headers/mainHeader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={styles.mainbody}>
        <ClientProviders>
          <Header />
          <main>{children}</main>
          <footer className={styles.mainfooter}>
            <p>© 2025 My Next.js App</p>
          </footer>
        </ClientProviders>
      </body>
    </html>
  );
}