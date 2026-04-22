import { Project } from '../../interfaces/project';

export const MyProjects: Project[] = [
  {
    id: "gifs-app",
    title: "GifsApp",
    badges: ["HTML", "CSS", "JavaScript", "TypeScript", "Angular", "TailwindCSS", "Flowbite"],
    description: {
      en: 'Search for gifs with history and memory storage. Built with Angular 21.',
      es: 'Busca gifs con historial y almacenamiento local. Desarrollado con Angular 21.'
    },
    githubUrl: "https://github.com/elianbarrios/gifs-apps",
    projectUrl: "https://gifs-app-elian.netlify.app/",
    imageUrl: "assets/projects/gifs-app-trending.webp"
  },
  {
    id: "country-app",
    title: "CountryApp",
    badges: ["HTML", "CSS", "JavaScript", "TypeScript", "Angular", "TailwindCSS", "DaisyUI", "RxJS"],
    description: {
      en: 'Website to search countries by capital, country name and region with countryAPI and localStorage.',
      es: 'Sitio web para buscar países por capital, nombre y región usando countryAPI y localStorage.'
    },
    githubUrl: "https://github.com/elianbarrios/country-app",
    projectUrl: "https://country-app-elian.netlify.app/",
    imageUrl: "assets/projects/country-app-by-region.webp"
  }
];
