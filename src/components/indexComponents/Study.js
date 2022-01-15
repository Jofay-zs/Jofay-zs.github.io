import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";

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
            urlCertificate
          }
        }
      }
    }
  }
`;

const Study = () => {
  const data = useStaticQuery(getStudies);
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex h-screen min-h-screen w-full" id="studies">
      <div className="absolute">
        <div className="absolute top-10 left-0 font-extrabold text-6xl sm:text-9xl opacity-5 capitalize">
          Studies
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center md:grid md:col-span-5 md:grid-cols-5 md:gap-10">
        <aside className="hidden h-full md:flex justify-center items-center col-span-2">
          <div className="bg-gray-800 grid grid-cols-1 px-10 py-5 my-2">
            {data.allStrapiStudies.nodes[0].data.map((s, index) => {
              return (
                <button
                  key={s.attributes.title}
                  className={`${
                    current === index && "bg-gradient-to-r text-transparent"
                  } truncate text-lg font-bold w-auto hover:bg-gradient-to-r from-red-500 to-fuchsia-500 bg-clip-text hover:text-transparent my-1`}
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
        </aside>
        <aside
          className={`flex flex-col w-full md:hidden justify-center items-center ${
            isOpen ? "h-full" : "h-auto"
          }`}
        >
          {isOpen ? (
            <div className="bg-gray-800 grid grid-cols-1 px-10 py-5 my-2">
              {data.allStrapiStudies.nodes[0].data.map((s, index) => {
                return (
                  <button
                    key={s.attributes.title}
                    className={`${
                      current === index && "bg-gradient-to-r text-transparent"
                    } truncate text-lg font-bold w-auto hover:bg-gradient-to-r from-red-500 to-fuchsia-500 bg-clip-text hover:text-transparent my-1`}
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
        <article
          className={`h-full w-full  text-lg justify-center col-span-3 ${
            isOpen ? "hidden" : "flex flex-col"
          }`}
        >
          <div className="font-bold text-xl mb-4 flex justify-between items-center">
            {data.allStrapiStudies.nodes[0].data[current].attributes.title}
            <button
              className="md:hidden w-10 h-10 bg-gradient-to-r from-red-500 to-fuchsia-500 bg-clip-text text-transparent text-3xl font-bold"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {isOpen ? "+" : "-"}
            </button>
          </div>
          <div>
            {
              data.allStrapiStudies.nodes[0].data[current].attributes
                .description
            }
          </div>
          <div className="font-bold mt-7 flex flex-col sm:flex-row justify-between w-full">
            <span className="opacity-10">
              {
                data.allStrapiStudies.nodes[0].data[current].attributes
                  .startDate
              }{" "}
              -{data.allStrapiStudies.nodes[0].data[current].attributes.endDate}
            </span>
            <div className="mt-2 md:mt-0">
              <a
                target="_blank"
                rel="noreferrer"
                href={`${data.allStrapiStudies.nodes[0].data[current].attributes.urlCertificate}`}
              >
                See certificate 📜
              </a>
              <div className="w-40 h-1 bg-gradient-to-r from-red-500 to-fuchsia-500"></div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Study;
