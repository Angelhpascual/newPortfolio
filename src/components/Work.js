import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Work = () => {
  return (
    <div
      className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mx-auto"
      id="work"
    >
      <div className="rounded overflow-hidden shadow-lg">
        <LazyLoadImage
          className="w-full"
          src="/assets/works/kballadev.png"
          alt="Angular-Comic"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Kballa.dev</div>
          <p className="text-gray-700 text-base">
            The Kballa.dev web site using bootstrap and Jquery. This is the
            corporative site for my start-up. We were selected by Telefónica and
            their startup program call Ceuta: Open Future, that helps to
            accomplish the dream of being a real company.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #HTML
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Bootstrap
          </span>
        </div>
      </div>
      <div className="rounded overflow-hidden shadow-lg">
        <LazyLoadImage
          className="w-full"
          src="/assets/works/planet-express.png"
          alt="Angular-Comic"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Planet-Express</div>
          <p className="text-gray-700 text-base">
            This i the first appliacation from my start-up "Kballa.dev", I am a
            part of a team that try to relate words in every investigation
            documents using React, Nextjs, Google-Cloud, rabbitmq, Postgresql,
            using crawlers and D3.js to show the Netgraph with nodes and links.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #react
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #material-ui
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Firebase
          </span>
        </div>
      </div>
      <div className="rounded overflow-hidden shadow-lg">
        <LazyLoadImage
          className="w-full"
          src="/assets/works/arbnb.png"
          alt="Mountain"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Airbnb Clone</div>
          <p className="text-gray-700 text-base">
            A Airbnb clone made with react, material-ui and Firebase
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #react
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #clone
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #material-ui
          </span>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-lg">
        <LazyLoadImage
          className="w-full"
          src="/assets/works/gatsby.png"
          alt="Gatsby"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Hotel Gatsby</div>
          <p className="text-gray-700 text-base">
            A hotel single page made with Gatsby and material-ui. Using graphQL
            queries and learning how to server side rendering works
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #gatsby
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #material-ui
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #quarentine
          </span>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-lg">
        <LazyLoadImage
          className="w-full"
          src="/assets/works/breakingbad.png"
          alt="Angular-Comic"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Forest</div>
          <p className="text-gray-700 text-base">
            A simple app thta shows a random quote from Breaking Bad, using the
            Breaking Bad API REST.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #react
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #material-ui
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #graphql
          </span>
        </div>
      </div>
      <div className="rounded overflow-hidden shadow-lg">
        <LazyLoadImage
          className="w-full"
          src="/assets/works/covid.png"
          alt="Angular-Comic"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Covid-19 Tracker</div>
          <p className="text-gray-700 text-base">
            A Covid-19 tracker using react, chartjs and material-ui.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #react
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #chartjs
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #material-ui
          </span>
        </div>
      </div>
      <div className="rounded overflow-hidden shadow-lg">
        <LazyLoadImage
          className="w-full"
          src="/assets/works/imagefinder.png"
          alt="Angular-Comic"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Image Finder</div>
          <p className="text-gray-700 text-base">
            A simple image finder application.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #react
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #skeleton
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #freepikAPI
          </span>
        </div>
      </div>
      <div className="rounded overflow-hidden shadow-lg">
        <LazyLoadImage
          className="w-full"
          src="/assets/works/lyrics.png"
          alt="Angular-Comic"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Lyrics Finder</div>
          <p className="text-gray-700 text-base">
            Simple lyric finder using react.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #react
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #skeleton
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #APIcalls
          </span>
        </div>
      </div>
      <div className="rounded overflow-hidden shadow-lg">
        <LazyLoadImage
          className="w-full"
          src="/assets/works/netflix.png"
          alt="Angular-Comic"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Netflix Clone</div>
          <p className="text-gray-700 text-base">
            A Netflix clone using themoviedb API
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #react
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #material-ui
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #reactplayer
          </span>
        </div>
      </div>
      <div className="rounded overflow-hidden shadow-lg">
        <LazyLoadImage
          className="w-full"
          src="/assets/works/twitter.png"
          alt="Angular-Comic"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Twitter Clone</div>
          <p className="text-gray-700 text-base">A Twitter clone</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #react
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #material-ui
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #twitterReact
          </span>
        </div>
      </div>
      <div className="rounded overflow-hidden shadow-lg">
        <LazyLoadImage
          className="w-full"
          src="/assets/works/weather.png"
          alt="Angular-Comic"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Weather App</div>
          <p className="text-gray-700 text-base">
            A weather app that shows your local weather.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #react
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #skeleton
          </span>
        </div>
      </div>
      <div className="rounded overflow-hidden shadow-lg">
        <LazyLoadImage
          className="w-full"
          src="/assets/works/whatsapp.png"
          alt="Angular-Comic"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Whatsapp Clone</div>
          <p className="text-gray-700 text-base">
            A Whatsapp clone with react.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #react
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #material-ui
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Firebase
          </span>
        </div>
      </div>
    </div>
  );
};

export default Work;
