<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Jagruti Shete | Data and Business Analyst</title>
<meta name="description" content="Portfolio of Jagruti Shete, a London-based business and data analyst building Power BI dashboards, SQL reporting and requirements analysis for banking, insurance and procurement clients.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Public+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    --paper: #eef2f6;
    --card: #ffffff;
    --ink: #14213d;
    --muted: #4d5b73;
    --line: #cfd8e3;
    --teal: #0e7c86;
    --amber: #e3a008;
    --powerbi: #c58b00;
    --radius: 6px;
    --head: "Bricolage Grotesque", "Segoe UI", system-ui, sans-serif;
    --body: "Public Sans", "Segoe UI", system-ui, sans-serif;
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    background: var(--paper);
    color: var(--ink);
    font-family: var(--body);
    font-size: 1.0625rem;
    line-height: 1.6;
  }
  a { color: var(--teal); text-underline-offset: 3px; }
  a:focus-visible, button:focus-visible {
    outline: 3px solid var(--amber);
    outline-offset: 3px;
  }
  .wrap { max-width: 1040px; margin: 0 auto; padding: 0 1.5rem; }
  h1, h2, h3 { font-family: var(--head); line-height: 1.1; margin: 0; letter-spacing: -0.015em; }

  /* Navigation */
  nav { border-bottom: 1px solid var(--line); background: var(--paper); position: sticky; top: 0; z-index: 5; }
  nav .wrap { display: flex; justify-content: space-between; align-items: center; padding-top: .8rem; padding-bottom: .8rem; gap: 1rem; flex-wrap: wrap; }
  nav strong { font-family: var(--head); font-size: 1.1rem; }
  nav ul { list-style: none; display: flex; gap: 1.25rem; margin: 0; padding: 0; flex-wrap: wrap; }
  nav a { color: var(--ink); text-decoration: none; font-weight: 500; font-size: .95rem; }
  nav a:hover { color: var(--teal); text-decoration: underline; }

  /* Hero */
  .hero { padding: 4.5rem 0 3rem; }
  .hero-grid { display: grid; grid-template-columns: 1fr 280px; gap: 3rem; align-items: center; }
  .hero-grid.no-photo { grid-template-columns: 1fr; }
  .portrait { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: var(--radius); border: 1px solid var(--line); background: #dde5ee; display: block; }
  @media (max-width: 760px) {
    .hero-grid { grid-template-columns: 1fr; gap: 2rem; }
    .portrait { max-width: 220px; }
  }
  .hero h1 { font-size: clamp(2.6rem, 7vw, 5rem); font-weight: 700; max-width: 14ch; }
  .hero p.lead { font-size: 1.25rem; max-width: 56ch; margin: 1.5rem 0 0; color: var(--muted); }
  .hero .proof { margin: 1.25rem 0 0; max-width: 56ch; font-weight: 600; border-left: 4px solid var(--amber); padding-left: .9rem; }
  .hero .actions { display: flex; gap: .75rem; margin-top: 2rem; flex-wrap: wrap; }
  .btn {
    display: inline-block; padding: .7rem 1.2rem; border-radius: var(--radius);
    font-weight: 600; text-decoration: none; border: 2px solid var(--ink);
  }
  .btn.primary { background: var(--ink); color: #fff; }
  .btn.primary:hover { background: var(--teal); border-color: var(--teal); }
  .btn.ghost { color: var(--ink); background: transparent; }
  .btn.ghost:hover { background: var(--ink); color: #fff; }

  section { padding: 3.5rem 0; border-top: 1px solid var(--line); }
  section > .wrap > h2 { font-size: clamp(1.8rem, 4vw, 2.5rem); margin-bottom: .6rem; }
  .intro { color: var(--muted); max-width: 60ch; margin: 0 0 2rem; }

  /* Career chart: the one memorable element */
  .chart {
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    padding: 1.5rem 1.5rem 1rem;
  }
  .axis { position: relative; height: 1.6rem; margin-bottom: .5rem; border-bottom: 1px solid var(--line); }
  .axis span { position: absolute; transform: translateX(-50%); font-size: .8rem; color: var(--muted); bottom: .2rem; }
  .row { margin: 1.1rem 0 1.6rem; }
  .row .meta { display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; font-size: .95rem; margin-bottom: .35rem; }
  .row .meta b { font-weight: 600; }
  .row .meta span { color: var(--muted); }
  .track { position: relative; height: 22px; background: repeating-linear-gradient(90deg, transparent 0, transparent calc(12.5% - 1px), var(--line) calc(12.5% - 1px), var(--line) 12.5%); }
  .bar {
    position: absolute; top: 0; bottom: 0; border-radius: 3px;
    background: var(--teal);
    transform-origin: left center;
    animation: grow .9s ease-out both;
  }
  .bar.study { background: var(--amber); }
  .bar.earlier { background: #6b7a93; }
  .row .tools { margin: .45rem 0 0; font-size: .9rem; color: var(--muted); }
  .row .did { margin: .3rem 0 0; font-size: .95rem; max-width: 68ch; }
  .legend { display: flex; gap: 1.2rem; flex-wrap: wrap; font-size: .85rem; color: var(--muted); margin: .5rem 0 .75rem; }
  .legend i { display: inline-block; width: 12px; height: 12px; border-radius: 2px; margin-right: .4rem; vertical-align: -1px; }
  @keyframes grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }

  /* Projects */
  .projects { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 1.25rem; }
  .project { background: var(--card); border: 1px solid var(--line); border-radius: var(--radius); display: flex; flex-direction: column; overflow: hidden; }
  .project .shot {
    aspect-ratio: 16 / 9; display: grid; place-items: center; text-align: center; padding: 1rem;
    background: #dde5ee; color: var(--muted); font-size: .9rem; border-bottom: 1px solid var(--line);
  }
  .project .shot img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .project .body { padding: 1.25rem; display: flex; flex-direction: column; gap: .6rem; flex: 1; }
  .project h3 { font-size: 1.3rem; }
  .project .tag { align-self: flex-start; font-size: .8rem; font-weight: 600; padding: .15rem .55rem; border-radius: 99px; color: #fff; }
  .tag.powerbi { background: #8a6100; }
  .project dl { margin: 0; font-size: .95rem; }
  .project dt { font-weight: 600; margin-top: .5rem; }
  .project dd { margin: 0; color: var(--muted); }
  .project .links { margin-top: auto; padding-top: .8rem; display: flex; gap: 1rem; flex-wrap: wrap; font-weight: 600; font-size: .95rem; }

  /* Skills */
  .skills { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 2rem 2.5rem; }
  .skills h3 { font-size: 1.15rem; margin-bottom: .5rem; padding-bottom: .4rem; border-bottom: 2px solid var(--ink); }
  .skills ul { margin: 0; padding: 0; list-style: none; }
  .skills li { padding: .25rem 0; }

  /* Approach */
  .approach { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
  .approach p { margin: .35rem 0 0; color: var(--muted); }
  .approach h3 { font-size: 1.2rem; }

  footer { border-top: 1px solid var(--line); padding: 3rem 0 4rem; }
  footer p { margin: .3rem 0; }
  footer .links { display: flex; gap: 1.5rem; flex-wrap: wrap; margin-top: 1rem; font-weight: 600; }

  @media (max-width: 600px) {
    .hero { padding-top: 3rem; }
    .chart { padding: 1rem; }
    .axis span:nth-child(even) { display: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .bar { animation: none; }
  }
</style>
</head>
<body>

<nav aria-label="Main">
  <div class="wrap">
    <strong>Jagruti Shete</strong>
    <ul>
      <li><a href="#career">Career</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#approach">Approach</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>

<header class="hero">
  <div class="wrap">
    <div class="hero-grid">
      <div>
        <h1>I turn messy data into decisions people can act on.</h1>
        <p class="lead">I'm Jagruti, a business and data analyst in London with 5+ years of experience delivering dashboards, SQL reporting and requirements analysis for banking, insurance and procurement clients. I'm completing an MSc in Business Analytics.</p>
        <p class="proof">Microsoft Certified Power BI Data Analyst (PL-300). 12+ dashboards built for banking and insurance clients, and 8 enterprise procurement clients supported.</p>
        <div class="actions">
          <a class="btn primary" href="#projects">See my dashboards</a>
          <a class="btn ghost" href="#contact">Get in touch</a>
        </div>
      </div>
      <!-- EDIT ME: save your photo as images/jagruti.jpg (portrait, ideally 800 x 1000 px). If the file is missing, the photo space disappears automatically. -->
      <img class="portrait" src="images/jagruti.jpg" alt="Photo of Jagruti Shete" onerror="this.parentNode.classList.add('no-photo');this.remove()">
    </div>
  </div>
</header>

<section id="career">
  <div class="wrap">
    <h2>My career, charted</h2>
    <p class="intro">Each bar is a role or course of study, drawn to scale. Hover over a bar to see the dates.</p>
    <div class="chart" role="img" aria-label="Timeline of roles from 2019 to 2027: Axis Bank, Kinesso India, GEP Worldwide, and MSc Business Analytics at University of Greenwich.">
      <div class="legend" aria-hidden="true">
        <span><i style="background:#6b7a93"></i>Banking</span>
        <span><i style="background:var(--teal)"></i>Analytics roles</span>
        <span><i style="background:var(--amber)"></i>Study</span>
      </div>
      <div class="axis" id="axis" aria-hidden="true"></div>
      <div id="rows"></div>
    </div>
  </div>
</section>

<section id="projects">
  <div class="wrap">
    <h2>Dashboards and analysis</h2>
    <p class="intro">Each project starts with a business question and ends with a finding.</p>

    <!--
      EDIT ME: replace each project below with your real work.
      1. Put a screenshot in an "images" folder and set the <img src="images/your-file.png"> below.
      2. Replace the "#" in the links with your Power BI link, and your GitHub repo link.
      3. Delete the .shot placeholder text once you add an image.
    -->
    <div class="projects">

      <article class="project">
        <div class="shot">
          <!-- <img src="images/spend-analysis.png" alt="Dashboard showing spend by category and supplier"> -->
          Screenshot goes here
        </div>
        <div class="body">
          <span class="tag powerbi">Power BI</span>
          <h3>Agricultural waste and sustainability analytics</h3>
          <dl>
            <dt>Question</dt>
            <dd>How much agricultural waste is being used, and where could utilisation improve?</dd>
            <dt>Finding</dt>
            <dd>A regression model predicts fibre production with an R-squared of 0.85 on test data, and the dashboard shows where waste utilisation falls short.</dd>
            <dt>Data and tools</dt>
            <dd>5,000+ records, analysed with SQL and Python and presented in Power BI.</dd>
          </dl>
          <div class="links">
            <a href="#">Live dashboard</a>
            <a href="#">Code and notes</a>
          </div>
        </div>
      </article>

      <article class="project">
        <div class="shot">
          <!-- <img src="images/tender-trends.png" alt="Power BI report of public sector tenders over time"> -->
          Screenshot goes here
        </div>
        <div class="body">
          <span class="tag powerbi">Power BI</span>
          <h3>UK public tender trends</h3>
          <dl>
            <dt>Question</dt>
            <dd>Which sectors and regions are publishing the most contract opportunities?</dd>
            <dt>Finding</dt>
            <dd>Add your headline insight here.</dd>
            <dt>Data</dt>
            <dd>UK government contract notices (Contracts Finder or Find a Tender).</dd>
          </dl>
          <div class="links">
            <a href="#">Live report</a>
            <a href="#">Code and notes</a>
          </div>
        </div>
      </article>

      <article class="project">
        <div class="shot">
          <!-- <img src="images/insurance-claims.png" alt="Insurance claims dashboard"> -->
          Screenshot goes here
        </div>
        <div class="body">
          <span class="tag powerbi">Power BI</span>
          <h3>Insurance claims overview</h3>
          <dl>
            <dt>Question</dt>
            <dd>Which claim types and regions drive the highest costs?</dd>
            <dt>Finding</dt>
            <dd>Add your headline insight here.</dd>
            <dt>Data</dt>
            <dd>Public insurance dataset, for example from Kaggle.</dd>
          </dl>
          <div class="links">
            <a href="#">Live dashboard</a>
            <a href="#">Code and notes</a>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>

<section id="skills">
  <div class="wrap">
    <h2>What I work with</h2>
    <div class="skills">
      <div>
        <h3>Visualisation and BI</h3>
        <ul>
          <li>Power BI</li>
          <li>DAX and Power Query</li>
          <li>Datorama</li>
        </ul>
      </div>
      <div>
        <h3>Data and programming</h3>
        <ul>
          <li>SQL</li>
          <li>Python and machine learning</li>
          <li>Excel and Alteryx</li>
        </ul>
      </div>
      <div>
        <h3>Certifications</h3>
        <ul>
          <li>Power BI Data Analyst Associate (PL-300), 2026</li>
          <li>Azure Fundamentals (AZ-900), 2026</li>
        </ul>
      </div>
      <div>
        <h3>Business analysis</h3>
        <ul>
          <li>Requirements, BRDs and FRDs</li>
          <li>User stories and UAT</li>
          <li>Process mapping and gap analysis</li>
        </ul>
      </div>
      <div>
        <h3>Delivery</h3>
        <ul>
          <li>Agile and Scrum</li>
          <li>JIRA and Azure DevOps</li>
          <li>Stakeholder management</li>
        </ul>
      </div>
      <div>
        <h3>Domains</h3>
        <ul>
          <li>Procurement (source-to-contract, source-to-pay)</li>
          <li>Insurance analytics</li>
          <li>Banking analytics</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="approach">
  <div class="wrap">
    <h2>How I approach an analysis</h2>
    <div class="approach">
      <div>
        <h3>Start with the decision</h3>
        <p>I ask what someone will do differently after seeing the numbers, then work backwards to the data and the chart.</p>
      </div>
      <div>
        <h3>Check the data first</h3>
        <p>Before building anything, I look for gaps, duplicates and definitions that don't match, because a polished dashboard on bad data misleads.</p>
      </div>
      <div>
        <h3>Say it plainly</h3>
        <p>Every dashboard I build leads with its main finding in a sentence, with the detail one click below.</p>
      </div>
    </div>
  </div>
</section>

<footer id="contact">
  <div class="wrap">
    <h2>Let's talk</h2>
    <p>I'm based in London and open to analyst roles and contract work.</p>
    <div class="links">
      <!-- EDIT ME: replace these links -->
      <a href="https://www.linkedin.com/in/YOUR-LINKEDIN/">LinkedIn</a>
      <a href="https://github.com/YOUR-GITHUB-USERNAME">GitHub</a>
      <a href="mailto:you@example.com">Email</a>
    </div>
  </div>
</footer>

<script>
  // EDIT ME: add or change roles here. Dates are year-month.
  const roles = [
    { org: "Axis Bank", title: "Assistant Manager", start: "2019-12", end: "2020-07", type: "earlier",
      tools: "Excel (pivot tables, charts)", did: "Prepared operational, financial and performance reports, and tracked sales and service metrics." },
    { org: "Kinesso India", title: "Business / Data Analyst", start: "2021-01", end: "2022-11", type: "work",
      tools: "Power BI, DAX, Power Query, SQL, Datorama", did: "Built and maintained 12+ Power BI dashboards for banking and insurance clients, cutting weekly reporting time by 35%, and cut reporting errors by 40% through validation checks." },
    { org: "GEP Worldwide", title: "Business Analyst", start: "2022-11", end: "2025-12", type: "work",
      tools: "SQL, Excel, JIRA, Azure DevOps", did: "Led business analysis for procurement implementations across 8 enterprise clients, ran workshops with 40+ stakeholders, and resolved 120+ defects before release. Cut report turnaround time by 25%." },
    { org: "29 Acacia", title: "Data Analytics Intern", start: "2026-03", end: "2026-06", type: "work",
      tools: "Power BI", did: "Built 6 Power BI dashboards used by 15+ stakeholders and cut manual data preparation by 30%." },
    { org: "University of Greenwich", title: "MSc Business Analytics", start: "2026-01", end: "2027-01", type: "study",
      tools: "Expected 2027", did: "" }
  ];

  const rangeStart = 2019, rangeEnd = 2027;
  const totalMonths = (rangeEnd - rangeStart) * 12;
  const toMonths = s => { const [y, m] = s.split("-").map(Number); return (y - rangeStart) * 12 + (m - 1); };
  const fmt = s => new Date(s + "-01").toLocaleDateString("en-GB", { month: "short", year: "numeric" });

  const axis = document.getElementById("axis");
  for (let y = rangeStart; y <= rangeEnd; y++) {
    const s = document.createElement("span");
    s.textContent = y;
    s.style.left = ((y - rangeStart) / (rangeEnd - rangeStart) * 100) + "%";
    axis.appendChild(s);
  }

  const rows = document.getElementById("rows");
 roles
  .sort((a, b) => new Date(b.start) - new Date(a.start))
  .forEach((r, i) => {
    const left = toMonths(r.start) / totalMonths * 100;
    const width = (toMonths(r.end) - toMonths(r.start)) / totalMonths * 100;
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML =
      '<div class="meta"><b></b><span></span></div>' +
      '<div class="track"><div class="bar ' + r.type + '"></div></div>' +
      (r.tools ? '<p class="tools"></p>' : "") +
      (r.did ? '<p class="did"></p>' : "");
    row.querySelector("b").textContent = r.title + ", " + r.org;
    row.querySelector(".meta span").textContent = fmt(r.start) + " to " + fmt(r.end);
    const bar = row.querySelector(".bar");
    bar.style.left = left + "%";
    bar.style.width = width + "%";
    bar.style.animationDelay = (i * 0.15) + "s";
    bar.title = r.org + ": " + fmt(r.start) + " to " + fmt(r.end);
    if (r.tools) row.querySelector(".tools").textContent = r.tools;
    if (r.did) row.querySelector(".did").textContent = r.did;
    rows.appendChild(row);
  });
</script>
</body>
</html>
