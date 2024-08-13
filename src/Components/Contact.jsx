  import React from 'react';
  import Section from './Section';
  import Button from './Button';

  const ContactUs = () => (
    <Section crosses className="bg-cover bg-center  object-contain max-w-full !px-0 py-10">
      <div id="Contact"  className="container mx-auto">
        <div className="bg-black bg-opacity-25 p-10 rounded-lg text-white  mx-auto my-10 md:p-20 md:w-5xl ">
          <h2 className="text-center text-3xl font-bold mb-4">CONTACT US</h2>
          <p className="text-center mb-8">
            If you have any questions or would like to get in touch with our club, please contact us at 
            <a href="mailto:mappycrew@gmail.com" className="text-purple-600"> mappycrew@gmail</a>
          </p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="p-3 w-full bg-gray-800 rounded border border-gray-700 mb-4 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="p-3 w-full bg-gray-800 rounded border border-gray-700 mb-4 focus:outline-none h-32"
            ></textarea>
            <Button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-semibold  transition duration-300"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );

  export default ContactUs;
