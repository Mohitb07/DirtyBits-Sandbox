import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    import("tw-elements/dist/js/index.min.js");
  }
  return <Component {...pageProps} />;
}

export default MyApp;
