import {homeIcon, guidesIcon, blogIcon, helpIcon, surveyIcon} from './routes-icons';

const routes = [
  {
    route: ["", "home"],
    name: "home",
    moduleId: "home",
    nav: true,
    title: "Home",
    settings: { icon: homeIcon }
  },
  {
    route: "guides/content/:author?/:book?",
    name: "guides",
    moduleId: "guides/guides",
    nav: true,
    title: "Guides",
    settings: { icon: guidesIcon },
    href: "#guides/content/"
  },
  {
    route: "blog",
    name: "blog",
    moduleId: "blog/blog",
    nav: true,
    title: "Blog",
    settings: { icon: blogIcon }
  },
  {
    route: "survey",
    name: "survey",
    moduleId: "survey/survey",
    nav: true,
    title: "Survey",
    settings: { icon: surveyIcon }
  },
  {
    route: "help",
    name: "help",
    moduleId: "help/help",
    nav: true,
    title: "Help",
    settings: { icon: helpIcon }
  }
];

export default routes;
