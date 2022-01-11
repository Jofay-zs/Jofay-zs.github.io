import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

const Study = () => {
  const data = useStaticQuery(getStudies);
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="flex h-screen min-h-screen w-full px-2 sm:px-10"
      id="studies"
    >
      <div className="absolute">
        <div className="absolute top-10 left-0 font-extrabold text-6xl sm:text-9xl opacity-5">
          Studies
        </div>
      </div>
      <div className="w-full pt-40 h-full">
        <section className="flex flex-col justify-start items-start w-full h-full">
          <aside className="col-span-1 h-full flex flex-col w-full my-3">
            <div className="flex items-center w-full justify-between">
              <div className="font-bold text-2xl">
                {/* {data.allStrapiStudies.nodes[0].data[current].attributes.title} */}
              </div>
              <button
                className="w-10 h-10 bg-gradient-to-r from-red-500 to-fuchsia-500 bg-clip-text text-transparent text-3xl font-bold"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {isOpen ? "+" : "-"}
              </button>
            </div>
            {isOpen ? (
              <div className="bg-gray-800 grid grid-cols-2 px-10 py-5 my-2">
                {data.allStrapiStudies.nodes[0].data.map((s, index) => {
                  return (
                    <button
                      className={`${
                        current === index && "bg-gradient-to-r text-transparent"
                      } truncate text-lg font-bold w-auto hover:bg-gradient-to-r text-center from-red-500 to-fuchsia-500 bg-clip-text hover:text-transparent`}
                      onClick={() => {
                        setCurrent(index);
                        setIsOpen(false);
                      }}
                    >
                      {s.attributes.title}
                    </button>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
          </aside>
          <main
            className={`${
              isOpen ? "hidden" : ""
            } col-span-3 w-full grid grid-cols-3 gap-5 h-full`}
          >
            <section className="col-span-2 h-full">
              <StaticImage
              className="cover"
                src={
                  "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                }
              />
            </section>
            <section className="col-span-1 text-lg h-full w-full flex flex-col justify-between">
              <div>
                <div className="opacity-10 font-bold">About the study</div>
                <div>
                  {
                    data.allStrapiStudies.nodes[0].data[current].attributes
                      .description
                  }
                </div>
              </div>
              <div className="opacity-10 font-bold items-end">
                {
                  data.allStrapiStudies.nodes[0].data[current].attributes
                    .startDate
                }{" "}
                -{" "}
                {
                  data.allStrapiStudies.nodes[0].data[current].attributes
                    .endDate
                }
              </div>
            </section>
          </main>
        </section>
      </div>
    </section>
  );
};

const getStudies = graphql`
  query getStudies {
    allStrapiStudies(
      sort: { order: ASC, fields: data___attributes___publishedAt }
    ) {
      nodes {
        data {
          id
          attributes {
            description
            endDate(formatString: "Y/M/D")
            startDate(formatString: "Y/M/D")
            title
          }
        }
      }
    }
  }
`;

export default Study;
