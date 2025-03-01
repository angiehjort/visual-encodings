var toolsPage_datasources = {
  boendebarom: {
    modelType: "ddfcsv",
    path: "https://github.com/open-numbers/ddf--ibfuu--boendebarometer"
  },
  kolada: {
    modelType: "ddfcsv",
    path: "https://github.com/open-numbers/ddf--kolada--dump"
  },
  billy: {
    modelType: "ddfbw",
    service: "https://big-waffle.gapminder.org",
    dataset: "billy-develop",
    name: "billy-develop"
  },
  povcalnet: {
    modelType: "ddfbw",
    service: "https://big-waffle.gapminder.org",
    dataset: "povcalnet-develop",
    name: "povcalnet-develop"
  },
  sg: {
    modelType: "ddfbw",
    service: "https://big-waffle.gapminder.org",
    dataset: "SG-develop",
    name: "SG-develop"
  },
  sg_old: {
    reader: "ddfbw",
    service: "https://big-waffle.gapminder.org",
    dataset: "SG-develop",
    translateContributionLink: "https://crowdin.com/project/systema-globalis"
  },
  pop: {
    modelType: "ddfbw",
    service: "https://big-waffle.gapminder.org",
    dataset: "population-develop",
    name: "population-develop"
  },
  wdi: {
    modelType: "ddfbw",
    service: "https://big-waffle.gapminder.org",
    dataset: "wdi-develop",
    name: "wdi-develop"
  },
  fasttrack: {
    modelType: "ddfbw",
    service: "https://big-waffle.gapminder.org",
    dataset: "fasttrackQA",
    name: "fasttrackQA"
  },
  country_flags: {
    modelType: "ddfbw",
    service: "https://big-waffle.gapminder.org",
    dataset: "country-flags",
    name: "country-flags"
  }
};