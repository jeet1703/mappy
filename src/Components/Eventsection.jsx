import React from 'react';
import Section from './Section';
import { events } from '../constants';

const Timeline = () => {
  return (
    <Section crosses className="dark:text-white">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
      <h2 className="text-4xl md:text-6xl mb-16 text-center">Timeline</h2>
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
              <h3 className="text-3xl font-semibold">Events</h3>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
              {events.map(event => (
                <div key={event.id} className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                  <h3 className="text-xl font-semibold tracking-wide">{event.title}</h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-300">{event.date}</time>
                  <p className="mt-3">{event.description}</p>
                  <a href={event.registrationLink} className="btn-primary btn-sm mt-2 text-purple-600 hover:text-purple-900 transition-all">Read more →</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Timeline;
