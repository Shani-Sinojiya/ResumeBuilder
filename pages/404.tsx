import Head from "next/head";
import { useRouter } from "next/router";
import style from "../styles/404.module.css";

const error404 = () => {
  const router = useRouter();
  return (
    <section className={style.page_404}>
      <Head>
        <title>404 - Oops Page Not Found | MeSume</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className={style.four_zero_four_bg}>
                <h1 className="h1">404</h1>
              </div>
              <div className={style.contant_box_404}>
                <h3 className="text-3xl">Look like you're lost</h3>
                <p>the page you are looking for not avaible!</p>
                <button
                  className={`${style.link_404} rounded-lg`}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/");
                  }}
                >
                  Go to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default error404;
