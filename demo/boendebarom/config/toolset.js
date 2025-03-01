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
      "boendebarom",
      "kolada"
    ],
    tool: "Spreadsheet",
    toolVariation: "Base",
    config: "Spreadsheet-boendebarom",
    hideThumbnail: true
  },
  {
    id: "extapimap",
    tool: "ExtApiMap",
    toolVariation: "Base",
    config: "ExtApiMap-boendebarom",
    dataSources: [
      "boendebarom",
      "kolada"
    ],
    transition: [
      "select",
      "time"
    ],
    title: "extapimap",
    hideThumbnail: false,
    image: "/assets/images/chart/extapimap.png"
  }
];