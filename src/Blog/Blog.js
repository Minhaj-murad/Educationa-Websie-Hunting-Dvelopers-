import React from 'react';
import img1 from '../pic/murad2.jpg'
import img2 from '../pic/murad1.jpg'
import img3 from '../pic/murad3.jpg'

const Blog = () => {
    return (
      <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points=" 8,5 8,1 16,1 16,5"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="9,15 1,15 1,5 23,5 23,15 15,15"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="22,18 22,23 2,23 2,18"
                strokeLinejoin="round"
              />
              <rect
                x="9"
                y="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="6"
                height="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Welcome to the
              <br className="hidden md:block" />
              Blog of{' '}
              <span className="inline-block text-deep-purple-accent-400">
                Minhaj Murad
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div>
            <h1
              
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              See Below 
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={img3}
              alt=""
            />
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={img1}
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={img2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mb-10 border-t border-b divide-y">
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase ">
                <a
                  href="/"
                  className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  aria-label="Category"
                >
                  Topic-1
                </a>
                <p className="text-gray-600">React Router</p>
              </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-extrabold leading-none sm:text-4xl xl:text-3xl">
                  What is the purpose of react router?
                  </p>
                </a>
              </div>
              <p className="text-gray-700">
              React's default routing library is called React Router. It allows for altering the browser URL and keeping the UI in sync with the URL while enabling movement between views of different components in a React application.React Router is fundamentally a state container for the current URL or location. It maintains track of the location and displays several "Routes" when it changes, and it also provides tools for you to alter the location using "Links" and the history API.
              </p>
            </div>
          </div>
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  aria-label="Category"
                >
                  Topic-2
                </a>
                <p className="text-gray-600 ">Context API</p>
              </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-3xl">
                  How does Context API work?
                  </p>
                </a>
              </div>
              <p className="text-gray-700">
              React 16.3 introduces the built-in API Context. Instead of using a series of props, data may be sent directly from a parent component to its child components further down the component tree.Using the React Context API, a React app may generate globally accessible variables. In place of "prop drilling," in which props are passed down from generation to generation, this method might be used instead. One of the benefits of adopting Redux's context for state management is that it makes the system more lightweight and simpler to use.
              </p>
            </div>
          </div>
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  aria-label="Category"
                >
                  Topic-3
                </a>
                <p className="text-gray-600">useRef Hook</p>
              </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-3xl">
                  What is useRef hook and how does it work?
                  </p>
                </a>
              </div>
              <p className="text-gray-700">
              A built-in React hook called useRef(initialValue) takes one parameter as the initial value and returns a reference. UseRef produces a mutable ref object with the supplied argument initialized to its.current property ( initialValue ). The returned object will remain persistent for the whole component lifespan. We are able to maintain values across renderings thanks to the useRef Hook. It may be used to hold a changeable value that, when altered, doesn't need a new rendering. It may be used to directly access a DOM element.
              </p>
            </div>
          </div>
        </div>
        
      </div>
      </div>
    );
  };

export default Blog;