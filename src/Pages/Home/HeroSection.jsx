import { Link } from "react-scroll";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Title</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Heading</span>{" "}
            <br />
            Heading
          </h1>
          <p className="hero--section-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem magni, ipsum quo voluptate quaerat officiis porro maiores fugit illo ut minus quibusdam neque explicabo doloribus. Ipsa pariatur iusto dolores?
          </p>
        </div>
        
        <button className="btn btn-primary"><Link to="Contact">Button text</Link></button>
      </div>
      <div className="hero--section--img">
        <img src="./img/img3.avif" alt="Hero Section" />
      </div>
    </section>
  );
}
