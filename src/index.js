import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import * as splitting from "https://cdn.jsdelivr.net/npm/splitting/+esm"
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm"

import UserLogin from "./auth/user-login.js";
import Portfolio from "./portfolio.js"
import SendFiles from "./sendfiles.js";
import Faq from "./faq.js";
import Bubbles from "./bubbles.js";
import CASES from "./../assets/cases/cases.js"

window.d3 = d3;
window.splitting = splitting;

const S_ID = "ljbyyhiaaezetjldooim";
const S_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqYnl5aGlhYWV6ZXRqbGRvb2ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwODE2MzQsImV4cCI6MjAyNTY1NzYzNH0.bO6QvpF45pe42nwuWTEnJc6c6R5MDlJhtJHPqjDKnLQ";

const sURL = `https://${S_ID}.supabase.co`;
const supabase = createClient(sURL, S_KEY);


new Faq(".ve-faq .ve-question .ve-header");
new Portfolio(".ve-portfolio .ve-grid", CASES);
new SendFiles(".ve-startproject-outer-overlay", supabase);
new UserLogin(".app-user-login", supabase);

d3.csv("./assets/data/basic.csv", (d) => {
    return {
        time: d3.utcParse("%Y")(d.time), 
        GDP: +d.GDP,
        LEX: +d.LEX,
        POP: +d.POP,
        geo: d.geo, 
        region: d.world_region,
        category: d.category
    }
}).then((data) => {
    data = data
        .filter(f => f.GDP > 0 && f.LEX > 0 && f.POP > 0 && f.region && f.geo && f.category !== "global" && f.category !== "region")
        .sort((b,a) => a.POP - b.POP);
    new Bubbles({data})
})
