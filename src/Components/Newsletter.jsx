import React from 'react';
import { blogPosts } from '../constants';
import Section from './Section';
import { stars, smallSphere } from '../assets';

const Newsletter = () => {
  // Get the last 5 blog posts
  const recentPosts = blogPosts.slice(-5);

  return (
    <Section id="Newsletter"  crosses className="relative bg-transparent !px-0 !py-10 ">
      <div className="relative z-10 mx-10 lg:mx-24 my-8 lg:my-24"> {/* Adjusted margin for different screen sizes */}
        <h2 className="text-4xl md:text-6xl  text-white text-center mb-8 md:mb-12">Newsletter</h2> {/* Added margin bottom for spacing */}
        <ul className="mt-2 md:mt-4 space-y-4"> {/* Adjusted top margin for spacing on small screens */}
          {recentPosts.map((post, index) => (
            <li key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-2">
              <div className="mb-2 md:mb-0 md:mr-4"> {/* Adjusted margin for spacing */}
                <h3 className="text-xl md:text-2xl font-bold text-purple-500">{post.title}</h3>
                <p className="text-white text-sm md:text-base">A blog by {post.author}</p> {/* Adjusted text size for readability */}
              </div>
              <a href={post.link} className="text-white hover:text-purple-400 transition-all">View →</a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
    </Section>
  );
};

export default Newsletter;
