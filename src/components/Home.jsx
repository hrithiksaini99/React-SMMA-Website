import React from 'react'
import vg from '../assets/2.webp'
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Sociofy</h1>
          <p>Creative ideas that will help your brand soar</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We help businesses of all sizes maximize their online presence and
            reach their target audience through social media marketing. With
            years of experience and a team of experts, we know how to
            effectively promote your brand and drive results.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Our social media marketing agency was founded by a group of
            experienced professionals who saw a need for businesses to have
            access to high-quality, effective social media marketing services.
            We have a diverse team of experts with a range of skills and
            expertise, including content creation, strategy development, paid
            advertising, data analysis, and more. Our mission is to help
            businesses of all sizes and industries succeed on social media. We
            understand the importance of having a strong online presence and the
            role that social media plays in connecting businesses with their
            customers. That's why we offer a variety of services designed to
            help businesses grow and thrive on social media. We believe that
            effective social media marketing requires a tailored approach that
            takes into account the unique needs and goals of each business.
            That's why we take the time to get to know our clients and their
            businesses, and we work closely with them to develop a customized
            strategy that meets their specific needs. We pride ourselves on
            staying up-to-date with the latest social media trends and
            techniques, and we are always looking for ways to improve and
            innovate our services. We are dedicated to providing top-notch
            service and delivering measurable results for our clients.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: '0.3s',
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: '0.5s',
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: '0.7s',
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: '1s',
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home
