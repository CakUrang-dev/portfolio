import Head from "next/head";
import Footer from "../components/Footer";

export default function Layout(props) {
  return (
    <div className={props.className}>
      <Head>
        <title>{props.title}</title>
      </Head>

      {props.children}
      <Footer />
    </div>
  );
}
