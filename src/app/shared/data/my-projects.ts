import { Project } from '../../interfaces/project';

export const MyProjects: Project[] = [
  {
    id: "gifs-app",
    title: "GifsApp",
    badges: ["Angular", "TailwindCSS", "DaisyUI"],
    description: "Search for gifs with history and memory storage. Built with Angular 21.",
    githubUrl: "https://github.com/Elian1723/gifs-apps",
    projectUrl: "https://gifs-app-elian.netlify.app/",
    imageUrl: "assets/projects/gifs-app-trending.webp"
  },
  {
    id: "country-app",
    title: "CountryApp",
    badges: ["Angular", "TailwindCSS", "DaisyUI", "RxJS"],
    description: "Website to search countries by capital, country name and region with countryAPI and localStorage.",
    githubUrl: "https://github.com/Elian1723/country-app",
    projectUrl: "https://country-app-elian.netlify.app/",
    imageUrl: "assets/projects/country-app-by-region.webp"
  }
];
