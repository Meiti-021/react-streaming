import { IconLink, IconQuote } from "../utils/icons";
import Audio from "../components/Audio";
import VideoJS from "../components/Videojs";
const musicData = {
  image:
    "https://images.mubicdn.net/images/film/89573/cache-122457-1649194960/image-w1280.jpg?size=800x",
  file: "https://ts2.tarafdari.com/contents/user356177/content-sound/una_mattina.mp3",
  name: "Una Mattina",
  title: "Ludovico Einaudi",
};
export const blogs = [
  {
    id: "blog-1",
    title: "The Most Anticipated Movies",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "JENNY WILSON",
    date: "FEBRUARY 2, 2019",
    categories: "Trailers",
    tags: "Action ,Comedies ,comedy ,Drama ,Dramas ,Historical ,Horror Movie ,Movie ,Trailers ,Mystery ,Rumors ,thrill ,Thriller ,Trailers ,Tv ,Rumors TV ,Series",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-2",
    title: "Everything You Need to Know About",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "Action",
    tags: "Action ,Comedies ,comedy ,Drama ,Dramas ,Historical ,Horror Movie ,Movie",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          <a href="#" className="block text-light-red">
            <IconLink className="h-20 w-20" />
          </a>
        </p>
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-3",
    title: "My streaming Black Pearl",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "thrill",
    tags: "thrill ,Thriller ,Trailers ,Tv ,Rumors TV ,Series",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <div className="">
          <Audio {...musicData} />
        </div>
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-4",
    title: "What Personal Information About Users",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "MOVIE",
    tags: "HORRORMOVIE ,MOVIE ,TRAILERS",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <VideoJS
          options={{
            autoplay: false,
            controls: true,
            responsive: true,
            fluid: false,
            sources: [
              {
                src: "https://archive.org/download/GameOfThronesSeason1Trailer/Game%20of%20Thrones%20Season%201%20Trailer.mp4",
                type: "video/mp4",
              },
            ],

            poster:
              "https://e3.365dm.com/21/04/768x432/skynews-house-of-the-dragon_5357594.jpg?20210427114904",
            aspectRatio: "16:9",
          }}
        />
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-5",
    title: "Cookies and Web Beacons",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "Tv",
    tags: "Tv ,Rumors TV ,Series",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <div className="flex flex-col gap-5 px-5 items-center py-10 border-l-2 border-light-red rounded-md my-5 bg-dark-gray">
          <p className="text-[rgba(255,255,255,0.1)] relative -bottom-5">
            <IconQuote className="w-20 h-20" />
          </p>
          <p className="italic text-gray text-center text-lg">
            “ Movies can and do have tremendous influence in shaping young lives
            in the realm of entertainment towards the ideals and objectives of
            normal adulthood. ”
          </p>
          <p className="text-sm items-center px-5 justify-center gap-1 py-2 flex border-l-3 w-fit pl-1 border-light-red bg-gradient-to-r from-dark-red to-dark-gray italic ">
            Walt Disney
          </p>
        </div>
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-6",
    title: "Birds Of Prey Star Says She’s Definitely Open To A Ghost Return",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "Action",
    tags: "Comedies ,comedy ,Drama ,Dramas ,Historical ,Horror Movie ,Movie",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="h-auto grid grid-cols-2 md:grid-cols-3 gap-5 mb-5">
          <img
            src="/assets/blogs/blog-1.webp"
            alt=""
            className="w-full h-full object-cover block"
          />
          <img
            src="/assets/blogs/blog-2.webp"
            alt=""
            className="w-full h-full object-cover block"
          />
          <img
            src="/assets/blogs/blog-3.webp"
            alt=""
            className="w-full h-full object-cover block"
          />
          <img
            src="/assets/blogs/blog-4.webp"
            alt=""
            className="w-full h-full object-cover block"
          />
          <img
            src="/assets/blogs/blog-5.webp"
            alt=""
            className="w-full h-full object-cover block"
          />
          <img
            src="/assets/blogs/blog-8.webp"
            alt=""
            className="w-full h-full object-cover block"
          />
        </div>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-7",
    title: "Saturday Night Live’ Re-Enacts Biden and Harris’ Victory Speeches",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "Horror Movie ",
    tags: "Movie ,Trailers ,Mystery ,Rumors ",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-8",
    title: "Gillian Anderson Shares the Photos From The Crown",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "Comedies ",
    tags: "comedy ,Drama ,Dramas ,Historical ,Horror Movie ,Movie",
    body: <>hi</>,
  },
  {
    id: "blog-9",
    title: "Chick Fight’ Felt Right For Malin Akerman",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "Tv",
    tags: "Tv ,Rumors TV ,Series",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-10",
    title: "Why Amy Adams Always Dreamed of Working",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "HISTORICAL",
    tags: "HISTORICAL, MOVIE, MOVIE TRAILERS",
    body: <>hi</>,
  },
  {
    id: "blog-11",
    title: "The Most Anticipated TV Shows",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "comedy",
    tags: "Drama ,Dramas ,Historical ,Horror Movie ,Movie",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-12",
    title: "Why you should watch Cairo Station?",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "Tv",
    tags: "Tv ,Rumors TV ,Series",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-13",
    title: "Everything You Need to Know About ‘sea’ Season 3, Explained",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "Action",
    tags: "Comedies ,comedy ,Drama ,Dramas",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-14",
    title: "Introduces Jodie And More With Sweet Easter Egg",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "Tv",
    tags: "Tv ,Rumors TV ,Serie",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-15",
    title: "Saturday Night Live’ Re-Enacts Biden and Harris’ Victory Speeches",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "Tv Comedies",
    tags: "Action, Historical, thrills, Tv Series",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-16",
    title: "Gillian Anderson Shares the Royal Behind-the-Scenes Photos",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "Tv Rumors",
    tags: "Rumors, Tv Rumors, Tv Series",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-17",
    title: "Birds Of Prey Star Says She’s Definitely Open To A Ghost Return",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "Tv Series",
    tags: "Action, Horror, Movie, Tv Series",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-18",
    title: "Scarlett Drops Out Of Playing a Transgender Man Following Backlash",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "Tv Series",
    tags: "Action, Thriller, Tv Series",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-19",
    title: "First Glass Photos Bring Unbreakable and Split Villians Together",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "Tv Rumors",
    tags: "Action, Historical, Tv Rumors",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-20",
    title: "NHRA at Bristol: Courtney Force earns 7th No. 1 spot of 2018;",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "comedy",
    tags: "Drama ,Dramas ,Historical ,Horror Movie ,Movie",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-21",
    title: "Federer wins maiden Stuttgart title",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "Dramas",
    tags: "Horror, Dramas, Movie",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-22",
    title: "Record-setting Griefer or Villain?",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "Tv Series",
    tags: "Action, Thriller, Tv Series",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-23",
    title: "GTA VI – Rumors & Facts",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "Historical",
    tags: "Historical, Movie, Movie Trailers",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
  {
    id: "blog-24",
    title: "Thorin Used Anti-glay Slur",
    subtitle:
      "Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.",
    author: "Mahdi Dehgani",
    date: "FEBRUARY 2, 2019",
    categories: "Dramas",
    tags: "Comedies, Movies, Tv Series",
    body: (
      <div className="text-gray flex flex-col gap-5">
        <p>
          Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis.
          Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae
          imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo
          ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.
        </p>
        <p>
          Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean
          ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus.
          Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.
        </p>
        <div className="rounded border-l-3 border-light-red bg-slate-500 text-white py-5 px-10">
          <p>
            \”Simon Doe has his tongue planted in his cheek as he describes the
            fictional skills of his advancing agent.\”
          </p>
          <p className="text-light-red italic">Steve Kowalsky</p>
        </div>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
        <p>
          Nisi habitasse viverra praesent a maecenas odio erat tristique
          praesent elementum rutrum maecenas blandit nec curabitur donec, turpis
          varius etiam felis ultrices sit, per inceptos dapibus fames donec
          praesent quisque commodo primis proin leo nisl lacinia dictumst justo
          sagittis luctus vestibulum sed quisque.
        </p>
        <p>
          Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo.
        </p>
      </div>
    ),
  },
];
