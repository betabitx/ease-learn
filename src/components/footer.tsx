import "../styles/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const linkTo = "https://yasser.is-a.dev";
  const bacResources = "https://bacwithabou-bakr.netlify.app/";
  const borhanInstagram = "https://instagram.com/bober.byte/";
  const younesInstagram = "https://instagram.com/younes_aithamou";

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_logo">
            <h2></h2>
            <p className="description"></p>
            <p className="small_text description"></p>
          </div>
        </div>

        <p className="copyright">
          © {year}, developed by{" "}
          <a href={linkTo} target="_blank">
            Yasser Fedsi
          </a>
          . All rights reserved.
          <p className="small_text ">
            © Thanks to{" "}
            <a href={bacResources} target="_blank">
              AbuBakr BenZerka
            </a>{" "}
            for pictures.
          </p>
          <p className="small_text ">
            © Thanks to{" "}
            <a href={borhanInstagram} target="_blank">
              BorhanEddin Bouhadjar
            </a>{" "}
            for testing.
          </p>
          <p className="small_text ">
            © Thanks to{" "}
            <a href={younesInstagram} target="_blank">
              Younes Aithamou
            </a>{" "}
            for drivers.
          </p>
        </p>
      </div>
    </footer>
  );
}
