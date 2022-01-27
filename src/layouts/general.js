import React from "react";
// import Navbar from "../components/navbar";
import { graphql, useStaticQuery } from "gatsby";
import Contact from "../components/contact";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Hexagon } from "../images/svg";

const General = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <div className="w-auto h-auto min-h-screen min-w-screen max-w-screen bg-main text-gray-100">
      <title>{pageTitle ? pageTitle : data.site.siteMetadata.title}</title>
      {/* <Navbar /> */}
      <Contact />
      <Parallax pages={4}>
        <ParallaxLayer>
          <div className="z-20">{children}</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.2}
          style={{ pointerEvents: "none" }}
          className="-z-10"
        >
          <Hexagon styles="absolute right-20 -top-20 fill-transparent stroke-fuchsia-500 w-56 h-56 opacity-25" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
          speed={1}
          style={{ pointerEvents: "none" }}
          className="-z-10"
        >
          <Hexagon styles="absolute left-96 fill-transparent stroke-fuchsia-500 w-24 h-24 opacity-25" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.7}
          style={{ pointerEvents: "none" }}
          className="-z-10"
        >
          <Hexagon styles="absolute right-96 fill-transparent stroke-red-500 w-56 h-56 opacity-25" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.5}
          speed={1}
          style={{ pointerEvents: "none" }}
          className="-z-10"
        >
          <Hexagon styles="absolute left-20  fill-transparent stroke-fuchsia-500 w-48 h-48 opacity-25" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.9}
          speed={1.4}
          style={{ pointerEvents: "none" }}
          className="-z-10"
        >
          <Hexagon styles="absolute left-20  fill-transparent stroke-red-500 w-32 h-32 opacity-25" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.9}
          speed={0.6}
          style={{ pointerEvents: "none" }}
          className="-z-10"
        >
          <Hexagon styles="absolute right-52  fill-transparent stroke-red-500 w-16 h-16 opacity-25" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ pointerEvents: "none" }}
          className="-z-10"
        >
          <Hexagon styles="absolute left-52 fill-transparent stroke-fuchsia-500 w-24 h-24 opacity-25" />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default General;
