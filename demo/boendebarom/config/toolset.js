var toolsPage_toolset = [
  {
    id: "combo-emap-bc",
    tool: "Combo",
    toolVariation: "Base",
    toolComponents: [
      "ExtApiMap",
      "BubbleChart"
    ],
    config: "Combo-eam-bc-boendebarom",
    dataSources: [
      "boendebarom",
      "kolada"
    ],
    transition: [
      "select",
      "time"
    ],
    title: "combo-emap-bc",
    hideThumbnail: false,
    image: "/assets/images/chart/combo-emap-bc.png"
  },
  {
    id: "bubbles",
    tool: "BubbleChart",
    toolVariation: "Base",
    config: "BubbleChart-boendebarom",
    dataSources: [
      "boendebarom",
      "kolada"
    ],
    transition: [
      "select",
      "time"
    ],
    title: "bubbles",
    image: "/assets/images/chart/bubble-chart.png"
  },
  {
    id: "spreadsheet",
    title: "spreadsheet",
    image: "/assets/images/chart/spreadsheet.png",
    dataSources: [
      "sg",
      "wdi",
      "fasttrack"
    ],
    tool: "Spreadsheet",
    toolVariation: "Base",
    config: "Spreadsheet-reactive",
    hideThumbnail: true
  },
  {
    id: "extapimap",
    tool: "ExtApiMap",
    toolVariation: "Base",
    config: "ExtApiMap",
    dataSources: [
      "sg",
      "wdi",
      "fasttrack"
    ],
    transition: [
      "select",
      "time"
    ],
    title: "extapimap",
    hideThumbnail: true,
    image: "/assets/images/chart/extapimap.png"
  }
];