import api from "./api.js"
import auth from "./auth.js"
import ui from "./ui.js"

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm"
import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7.9.0/+esm'

window.d3 = d3;

// Initialize Supabase client
const supabaseUrl = 'https://fsvnwrazlbazcjldiqaq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdm53cmF6bGJhemNqbGRpcWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2MDIxODEsImV4cCI6MjAzODE3ODE4MX0.2A1LHbmTXlvzYR3fIt8hrJnoub1jYnuTY-P2QcMKRPc';
const supabase = createClient(supabaseUrl, supabaseKey);

auth(supabase)
const myApi = api(supabase)
await ui(myApi, d3)

window.myApi = myApi;