import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { StaticImage } from "gatsby-plugin-image";

const Post = ({ postDescription, postTitle, postDate, postBody }) => {
  return (
    <article className="w-full h-full px-3 py-2 flex justify-center items-center">
      <div className="relative top-0 left-0 w-full h-full">
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-gray-500/25 via-red-500/25 to-fuchsia-500/25 rounded-2xl"></div>
        <div className="w-full h-full flex flex-col sm:grid sm:grid-cols-4 bg-gray-100/10 p-5 rounded-2xl">
          <section className="z-10 flex justify-center items-center">
            <StaticImage
              className="bg-cover rounded-md mb-4"
              alt="An image"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F632%2F1*5QD8DKhOjRe-gcYjozlLNQ.png&f=1&nofb=1"
            />
          </section>
          <section className="col-span-3 flex flex-col justify-center z-10 px-3">
            <div className="font-bold text-xl mb-2 text-center">{postTitle}</div>
            <div className="">{postDescription}</div>
            <div className="text-gray-400 absolute -top-6 right-4">{postDate}</div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default Post;
