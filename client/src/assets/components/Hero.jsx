import React from "react";
import heroBackground from "../img/illustration.png";

export default function Hero() {
  return (
    <section className="hero">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="copy">
              <div class="text-label">
                Your text here
              </div>
              <div class="text-hero-bold">
                Grow Up Your Mind In the future.
              </div>
              <div class="text-hero-regular">
                There are so many variations passages of management Your mindset about bussines in your company or agency
              </div>
              <div class="cta">
                <a href="#" class="btn btn-primary shadow-none">Explore now</a>
                <a href="#" class="btn btn-secondary shadow-none ms-3">Explore now</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          <img src={heroBackground} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}
