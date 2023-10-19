import HeroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Project Library</h1>
          <p>
            This is a platform where I showcase my mini projects. These projects
            represent my journey in learning various technologies. Check out my
            practical experiments and technical achievements, all in one place –
            straightforward and accessible
          </p>
        </div>
        <div className="img-container">
          <img className="img" src={HeroImg} alt="hero image" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
