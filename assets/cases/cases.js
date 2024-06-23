const newTab = "⧉";

export default function CASES() {return [
    {
        text: "For municipal statistics",
        title: "Case: Södertörnsmodellen (Södertörn model) — 2018",
        description: "The Södertörn model is an open tool that makes it easier to highlight differences, similarities and trends between different areas in the municipalities of Södertörn area. The tool shows facts about ecological, economic and social sustainability.",
        linktext: "Live version " + newTab,
        link: "./demo/sodertornsmodellen/",
        image: "./assets/cases/sodertorn.jpg",
        gif: "./assets/cases/sodertorn.gif",
        iframe: "https://www.youtube.com/embed/0mElY3bN-Sg?si=Lu_6pNDo8M7Pxh9X"
    },{
        text: "For census results and policy analysis",
        title: "Case: Migration between provinces in South Africa — 2016",
        description: "Made as part of a presentation for Community survey (small census) of 2016 in collaboration with Stats SA through Gapminder",
        linktext: "Expand the live version " + newTab,
        link: "./demo/migration/index.html",
        image: "./assets/cases/migration.jpg",
        gif: "./assets/cases/migration.gif",
        iframe: "./demo/migration/index.html?embedded=true"
    },{
        text: "For interactive teaching",
        title: "Case: Income mountains — ongoing since 2015",
        description: "Custom education tool made for Gapminder",
        linktext: "Expand the live version " + newTab,
        link: "https://www.gapminder.org/tools/#$model$markers$billy$encoding$selected$data$;;;;;;&chart-type=mountain&url=v1",
        image: "./assets/cases/mountains.jpg",
        gif: "./assets/cases/mountains.gif",
        iframe: "https://www.gapminder.org/tools/?embedded=true#$model$markers$billy$encoding$selected$data$;;;;;;&chart-type=mountain&url=v1"
    },{
        text: "For more complex data and stories",
        title: "Case: Södertörnsmodellen (Södertörn model) — 2018",
        description: 'Notice how in many localities of Stockholm area women become more educated (more of red color), but men get paid more (longer lines). The gender difference grows in two ways, not just one.',
        linktext: "Live version " + newTab,
        link: "./demo/sodertornsmodellen/?tool=barchart-ds",
        image: "./assets/cases/educationpyramid.jpg",
        gif: "./assets/cases/educationpyramid.gif",
        video: "./assets/cases/educationpyramid-large.mp4"
    },{
        text: "For data journalism",
        title: "Case: Data availability about UN Targets — 2020",
        description: "Chart featured at 7:20 in the above video, which was presented to the world leaders at the UN SDG Moments event on September 18, 2020.<br/><br/>When the UN talks about their new goals, it’s easy to assume it’s just more of the same. But in one important aspect the SDGs are radically different from all the UN’s previous ideas of progress. Previously each UN organization had their own goals and timelines as if their subject matter was dissociated form everything else. Extreme poverty was an economic problem. Children’s schooling was an education problem. Electricity was an infrastructure problem. But the SDGs help us realize that these goals are all about the same sustainable future. Children in poverty can’t do their homework if they don’t have electricity. It’s all related and when we think of one thing at a time we get an illusion of conflict between different goals. Wading through the data and figuring out how far we have come (if at all) since 2015 is not simple or obvious. That is why the UN asked Ola to summarize the progress across all the SDGs.",
        linktext: "Expand the live version " + newTab,
        link: "./demo/sdg-data-availability/",
        image: "./assets/cases/sdgdata.jpg",
        gif: "./assets/cases/sdgdata.gif",
        iframe: "https://www.youtube.com/embed/v7WUpgPZzpI?si=dzjT6W-yH3dgaHBg?cc_load_policy=1&cc_lang_pref=en"
    },{
        text: "For sustainable cities",
        title: "Case: Boendebarometer (The Housing Gauge) — 2024",
        description: "",
        linktext: "Live version " + newTab,
        link: "./demo/boendebarom/",
        image: "./assets/cases/city.jpg",
        gif: "./assets/cases/city.gif",
        video: "./assets/cases/city-large.mp4"
    }
]};