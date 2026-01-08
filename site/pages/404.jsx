import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { withBasePath } from "../lib/base-path.mjs";

const content = {
  es: {
    title: "Página no encontrada - Medical Open World",
    heading: "404",
    subheading: "Página no encontrada",
    message: "Lo sentimos, la página que buscas no existe o ha sido movida.",
    homeLink: "Volver al inicio",
    homePath: "/",
  },
  en: {
    title: "Page Not Found - Medical Open World",
    heading: "404",
    subheading: "Page Not Found",
    message: "Sorry, the page you are looking for does not exist or has been moved.",
    homeLink: "Back to Home",
    homePath: "/en/",
  },
};

export default function Custom404() {
  const router = useRouter();
  const [lang, setLang] = useState("es");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isEnglish = window.location.pathname.startsWith("/en");
      setLang(isEnglish ? "en" : "es");
    }
  }, []);

  const t = content[lang];

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.heading}>{t.heading}</h1>
          <h2 style={styles.subheading}>{t.subheading}</h2>
          <p style={styles.message}>{t.message}</p>
          <a href={withBasePath(t.homePath)} style={styles.link}>
            {t.homeLink}
          </a>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#1a1a2e",
    color: "#ffffff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  content: {
    maxWidth: "600px",
  },
  heading: {
    fontSize: "8rem",
    margin: "0",
    color: "#e94560",
    fontWeight: "bold",
    lineHeight: "1",
  },
  subheading: {
    fontSize: "2rem",
    margin: "20px 0",
    color: "#ffffff",
    fontWeight: "normal",
  },
  message: {
    fontSize: "1.2rem",
    margin: "20px 0 30px",
    color: "#cccccc",
    lineHeight: "1.6",
  },
  link: {
    display: "inline-block",
    padding: "15px 40px",
    backgroundColor: "#e94560",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "30px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
};
