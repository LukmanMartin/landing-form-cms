import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Asegúrate de importar los estilos de AOS desde la ubicación correcta

import './Info.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const Info = () => {
  


    return (
      <div>
      <header>
        <h2><a href="#">Life is a party!</a></h2>
        <nav >
          <ul className="nav-list">
            <li><a href="#">Tours</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
      <div className="background-image">
  <img src="/smile.jpg" alt="Background" className="background-img" />
</div>

  <div className="hero-content-area">
    <h1>Life is a party!</h1>
    <h3>Unmissable Adventure Tours With Your Friends</h3>
    <a href="#" className="btn">Contact Us Now</a>
  </div>
</section>


      <section className="destinations">
        <h3 className="title">Some of our destinations:</h3>
        <p>Tired of the beach alone? Are the plains too plain? Come along with us on one of our unusual adventures with your friends. Here are some pictures from people who have had elevated experiences with us.</p>
        <hr />

        <ul className="grid">
          <li className="small image-1"></li>
          <li className="large image-2"></li>
          <li className="large image-3"></li>
          <li className="small image-4"></li>
        </ul>
      </section>

      <section className="packages">
        <h3 className="title">Tour Packages</h3>
        <p>We offer a variety of group (minimum 5 people) packages. Whether you've spent some summers together or this might be your first adventure, we've got the perfect vacation for you.</p>
        <hr />

        <ul className="grid">
          <li>
            <i className="fa fa-compass fa-4x"></i>
            <h4>Guided Trips</h4>
            <p>Looking for the complete experience? Take a tour with one of our experts. They'll show you secrets that you're likely to miss otherwise.</p>
          </li>
          <li>
            <i className="fa fa-camera-retro fa-4x"></i>
            <h4>Photo Trips</h4>
            <p>Want to experience nature's beauty without all of that annoying exercise? Take a photo tour on one of our <em>Life is a party!</em> buses.</p>
          </li>
          <li>
            <i className="fa fa-bicycle fa-4x"></i>
            <h4>Biking Trips</h4>
            <p>If bicycles are more your speed, consider taking a tour through one of our mountain or city bike paths. We'll provide the bikes, and lunch too!</p>
          </li>
          <li>
            <i className="fa fa-flag-checkered fa-4x"></i>
            <h4>Racing Trips</h4>
            <p>Got a competitive spirit? Sign up for one of our challenge-based marathons! Try to reach the summit before any other group.</p>
          </li>
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="title">Testimonials from our adventurers:</h3>
        <hr />
        <p className="quote">Wow! This tour made me realize how much I love being outside with my friends. After going on one of these tours, I can safely say that beer pong is my favorite game all time, also the cultural programs were really interesting!</p>
        <p className="author">- Albert Herter</p>
        <p className="quote">Wow, this really blew my mind. We had so much fun at the beach, and also some hidden secrets revealed. Come on, I'm living in this city for 5 years. Amazing!</p>
        <p className="author">- Sharon Rosenberg</p>
        <p className="quote">If you want to understand your friends better, head to the mountains. I mean, seriously. It's like sitting next to a campfire and just talk in the sunset, woah. You know? It's like that.</p>
        <p className="author">- Lukman Otunba Martin</p>
      </section>



      <footer>
        <p>Images courtesy of <a href="http://unsplash.com/">unsplash</a>.</p>
        <p>Why are you even reading this?! There's never anything interesting in the footer!</p>
        <ul>
          <li><a href="#"><i className="fa fa-twitter-square fa-2x"></i></a></li>
          <li><a href="#"><i className="fa fa-facebook-square fa-2x"></i></a></li>
          <li><a href="#"><i className="fa fa-snapchat-square fa-2x"></i></a></li>
        </ul>
      </footer>
    </div>
  );
};
  export default Info;  

