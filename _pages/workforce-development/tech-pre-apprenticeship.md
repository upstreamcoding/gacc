---
permalink: /tech-pre-preapprenticeship
layout: page
title: Industry 4.0 Pre-Apprenticeship Consortium
descrip: "The German-American Chamber of Commerce and Turbine Workforce innovate to upskill more people with a range of job-ready tech skills."
---

<style>

p, li {
  font-size: 20px;
}

ul {
  font-weight: bold;
}

  .case-studies-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
  }

  .case-studies-container a img {
    height: auto;
    width: 150px;
    transition: height 1s;
    margin: 10px;
  }

h1 {
  text-decoration: none !important;
}

h5 {
  display: block;
  margin-right: 50px !important;
}

#case-studies {
  margin-top: 30px;
}

@media (max-width: 767.98px) {

  .case-studies-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
    padding-left: 15px;
    padding-right: 15px;
  }

  .case-studies-container a img {
      height: auto;
      width: 100px;
      margin: 5px;
  }
}
</style>

<div class="container p-2 py-3">
  <div class="d-flex flex-row flex-wrap mx-auto justify-content-center">
<img
        class="m-4"
        src="/assets/img/gacc-pitt.jpeg"
        alt="GACC Pre-Apprenticeship Program"
        width="auto"
        height="100px"
      />
      <img
        class="m-4"
        src="/assets/img/turbine-workforce-logo.png"
        alt="Turbine Workforce"
        width="auto"
        height="100px"
      />
  </div>
</div>

<!--<div class="h3 py-3 px-0 mx-0 text-center">Web Basics <span class="brand-bg p-1">>></span> 'Work with Tech' <span class="brand-bg p-1">>></span> Advanced Technologies</div>-->

[^1]: A good job needs to meet people’s basic needs and offer conditions for engagement and motivation. Simply providing basic needs such as a living wage and predictable schedules will not, in itself, create a motivated workforce. But failing to provide those needs is often the source of employee stress and turnover in low-wage settings. Our framework for good jobs consists of nine essential factors related to these needs. The Good Jobs Strategy enables companies to meet each of these needs. [Good Jobs Institute](https://goodjobsinstitute.org/what-is-a-good-job/)

[^2]: An Advanced Technology is still immature but promises to deliver significant value, or that has some technical maturity but still has relatively few users. Among current examples: artificial intelligence, agents, speech and handwriting recognition, virtual reality and 3D visualization, smart cards, real-time collaboration, enhanced user authentication, data mining, and knowledge management. [Gartner](https://www.gartner.com/en/information-technology/glossary/advanced-technology)

[^3]: The Fourth Industrial Revolution represents a fundamental change in the way we live, work and relate to one another. It is a new chapter in human development, enabled by extraordinary technology advances commensurate with those of the first, second and third industrial revolutions. [World Econonic Forum](https://www.weforum.org/focus/fourth-industrial-revolution)

<span
style="font-weight: bold;">
  The German-American Chamber of Commerce
</span>
  and
<span
style="font-weight: bold;">Turbine Workforce
</span>
have convened a [consortium of stakeholders](#consortium-members) to enhance and expand participation in the
<span
style="font-weight: bold; background-color: #ffeaa7;"><a 
  href="https://www.gaccpit.com/en/workforce-development/gacc-pre-apprenticeship-program"
  target="_blank">GACC Pre-Apprenticeship</a></span>
and upskill more people in the Greater Pittsburgh Region with a range of job-ready tech skills -- from basic tech skills required for a good job[^1] to a working command of one or more advanced technology used in high-income jobs today and sought after by Industry 4.0[^3] employers.

<!--
Range of job-ready tech skills:
- basics skills for the Web;
- the ability and confidence to "Work with Tech";
- competency in one or more advanced technologies[^2].
<li>
<span
style="font-weight: bold;">
web basics;
</span>
</li>
<li>
the ability to
<span
style="font-weight: bold;">'work with tech';
</span>
</li>
<li>and competency in one or more
<span
style="font-weight: bold;">advanced technologies.
</span>
</li>
</ul>
<div class="container">
<div class="row mb-3">
<img
        class="p-1 img-fluid mx-auto"
        src="assets/img/post-images/gaccpa/rocket-pathway.png"
        alt=""
        width="70%"
        height="auto"
      />
</div>
</div>-->


## How is this Consortium innovative?

All Consortium members recognize that great workforce development resources exist but are disparate and unconnected. The Consortium seeks to drive optimization and innovation through a technology-based ecosystem (the Turbine Workforce platform) to cultivate **alignment, interoperability and innovation**.

##### One Platform for Everything
GACC's expertise and institutional knowledge at delivering effective workforce development, [Pre-apprenticeships](https://www.gaccpit.com/en/workforce-development/gacc-pre-apprenticeship-program) and [Registered Apprenticeships](#ra-pipeline) is amplified by __Turbine Workforce__. As a unifying platform for all consortium stakeholders activities, Turbine delivers evaluation and reporting efficiencies, programmatic alignment and a significant reduction of administrative workload. All program functions are to be entirely facilitated on __Turbine Workforce__ - stakeholder coordination, pre-/apprenticeship administrative forms, job book creation, OJT scheduling and record keeping, and delivery of related technical instruction courses and workshops. Roadmap features include coordination of mentorship, career guidance, skills gap analysis, and API endpoints for other applications to build around.



<div class="h2 my-5 text-center"><span class="p-1"></span>Technology<span class="brand-bg p-1">|</span>Stakeholder Alignment<span class="brand-bg p-1">|</span>Actionable Pathways</div>



<div class="" id="consortium-members">
<div class="row"> <h3 class="inline-block float-left">Consortium of Stakeholders</h3></div>
  <div class="d-flex flex-row case-studies-container flex-wrap mx-auto">
      {% for service in site.data.pre-apprenticeship-consortium %}
    <a
      title="{{ service.name }}"
      href="{{ service.href }}"
      target="_blank"
    >
      <img
        class="img-thumbnail"
        src="{{ service.src }}"
        alt="{{ service.name }}"
      />
    </a>
    {% endfor %}
  </div>
</div>

<div id="rti"></div>
### Related Technical Instruction (RTI)

At the root of it, upskilling is about more income and therefore must connect to a job profile created by a local employer. Consortium employers will be welcomed to create or refine curriculum so to align the Related Technical Instruction more directly to the Turbine Job Profiles they build and the job positions they are actively hiring to fill. As a way to maintain real-time relevance, and not many months lag like most hiring data, the RTI is to be elastic to skills sought in active job postings by consortium employers.

**RTI and Consortium member-guided curricula:**

- VEX Robotics
  - [VexVR](https://vr.vex.com/) for intro to Robotics programming and Computer Science.
  - [Vex Workcell](https://workcell.vex.com/) for Factory Automation
- Community College of Allegheny County
  - [MEC100 – Safety and Quality](https://catalog.ccac.edu/preview_course_nopop.php?catoid=10&coid=18056), and
  - [MEC102 – Mechatronics Industrial Processes](https://catalog.ccac.edu/preview_course_nopop.php?catoid=10&coid=18057)
  - [MEC100/102](https://www.ccac.edu/programs/math-egr-trades/certified-production-technician.php) leads to the Certified Production Technician (CPT) certification through the Manufacturing Skills Standards Council (MSSC)
- [Upstream Coding](https://upstreamcoding.com/instruction)
  - Intro Web Fundamentals
  - Intro HTML/CSS
  - Python
- Baby Loves Tacos
  - Scaling Food Service by Tech Integration
  - Point of Sale platforms
  - Designing Compelling Customer Rewards & Loyalty programs
  - Integrated Marketing & Content Management with [Contentful](https://www.contentful.com/) with Upstream Coding
    - Grassroots Marketing, Community Building, Web Analytics, Social Media
- Epistemix
  - Intro Python
  - Big Data Analytics
  - Data Visualizations
- PVE
  - CAD/CAM
  - RIVIT
  - finite-element analysis tools
- Turbine Workforce
  - Sales Engineering & Sales Training
  - Using Business Web Tools
    - HubSpot
  - LEAN Methodology for Product Development
    - Customer Discovery
- GACC
  - [Train the Trainer](https://www.gaccpit.com/en/workforce-development/train-the-trainer-workshop)

 <div class="d-flex flex-row flex-wrap justify-content-center">
       <img
        class="p-1"
        src="assets/img/screenshots/mechatronics-turbine-workforce1.png"
        alt="{{ service.name }} | Turbine Workforce"
        height="300px"
        width="auto"
      />
      <img
        class="p-1"
        src="assets/img/index-pg-imgs/student-portal--cool-shades.jpeg"
        alt="{{ service.name }} | Turbine Workforce"
        height="300px"
        width="auto"
      />
      <img
        class="p-1"
        src="assets/img/index-pg-imgs/upskilling-covid-online--04.jpeg"
        alt="{{ service.name }} | Turbine Workforce"
        height="300px"
        width="auto"
      />
    <div class="d-flex flex-row flex-wrap justify-content-center">
        <img
          class="p-2"
          src="assets/img/post-images/workcell1.jpeg"
          alt="{{ service.name }} | Turbine Workforce"
          height="250px"
        />
        <img
          class="p-2"
          src="/assets/img/post-images/workcell2.jpeg"
          alt="{{ service.name }} | Turbine Workforce"
          height="250px"
        />

<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Cv2q2pGAa-U" title="Factory Robotics in the Classroom"></iframe>
</div>
    </div>
</div>

<div id="ojt-rotations"></div>
<h2 class="my-3">
    <i class="fas fa-fan fa-spin large mr-2"></i> Rotational On-the-Job Training (OJT)
</h2>

PAs will have more enriching job experiences through OJT rotations compared to the traditional OJT model typically with one employer. Rotational OJT will provide rigorous hands-on job experiences embedded onto existing teams, working on real-world workflows on real product and customer problems or services. Beyond this call for rigor - and meet state registered pre-apprenticeship requirements - Consortium OJT employers will design entirely their OJT experiences.

Similar to an internship, OJT should be considered viable skilled worker pipelines for identifying workforce talent, assess cultural fit, and develop skill sets to meet their future workforce needs.

There will be no restrictions or consortium fees for employers who wish to hire pre-apprentices for full-time jobs.

<!--
- Baby Love Tacos integrates technology applications into all workflows and business processes. Data analytics is central to product quality and growing revenues, and cultivating community around food at the grassroots.-->


### Credentials

Pre-apprentices (PAs) will benefit more young people from the GACC dual enrollment agreements with industry-, employer- and degree-recognized credentials and certificates, some that receive **up to 6 college credits from Partnering Community Colleges**. All PAs will draw on the GACC's incomparable **Ausbildungszertifikat (German Apprenticeship Certificate)**.

PAs who are confident of a career in advanced manufacturing will have option to prepare for the industry-recognized certifications & credits:
- **[Manufacturing Technician Level 1 certification](http://manufacturingskillsinstitute.org/certifications/manufacturing-technician-level-1-skill-standards/) from the MSI Institute**.
- **[Certified Production Technician (CPT)](https://www.msscusa.org/certification/production-certification-cpt/) Manufacturing Skill Standards Council (MSSC)** credentialing system leading to a CPT certificate covers the four critical production functions, as defined by MSSC’s industry-led, nationally validated skills standards, common to all sectors of manufacturing.
- [VEX Certifications](https://certifications.vex.com/)
- [W3 Schools Certifications](https://courses.w3schools.com/browse/certifications)
- Upstream Coding/CCAC Certificate
- Partnering Community Colleges - Six(6) college credits

<!--### Learning Outcomes
Learning Outcomes
Upon successful completion of the course, the student will:
Calculate mechanical principles, such as force, moment, mechanical advantage and friction.
Connect linkages, cams and turnbuckles.
Operate common industrial tools, including band saws, hammers, drills and digital multi-meter (DMM).
Describe the sources and properties of engineering materials as used in the energy and manufacturing industries.
Describe production processes for natural gas, machining, manufacturing and distribution.
Troubleshoot basic machine problems.
Calculate productivity.
Determine methods of improving productivity.
Describe elements of effective inventory management, including work orders, the Process Failure Mode Effects Analysis (PFMEA) process, Kanban and packaging and shipping.
Name the types of basic welding applications, including oxyacetylene, gas metal arc, pipe and spot welding.
Use proper formulas and concepts to analyze electrical circuit principles, including voltage, resistance, continuity, power and current protection.
Describe the functions and operations of hydraulic and pneumatic pwer systems.
Describe the functions and operations of bearings and couplings in a mechanical power transmission system.
Delineate the functions and operations of belt and chanin drives.
Design a control circuit in a ladder diagram format to operate a solenoid valve.
Select a mechatronics degree specialization and draft a career plan.
Listed Topics
Mechanical principles and linkages
Production materials
Production processes
Machining processes
Machine operations
Tools and equipment use
Equipment procedures and troubleshooting
Production, planning and workflow
Production management
Principles of welding
Basic electrical circuits
Electrical measurement
Hydraulic and pneumatic power systems
Lubrication concepts
Bearings and couplings
Machine control concepts
Machine automation
Educational and career planning
-->

### Pathways & Guidance
Each PA will be paired with a Career Path Co-pilot who will work with the PA to create an Actionable Career Pathway and personalized Skills Mobility Map.

Turbine-generated Actionable Pathways connect directly to employer-created job profiles and employer-currated courses and RTI. Pathways highlight the recognized credentials along one's pathway, and the career mobility that one's unique skills and credentials bundle provide to them.

<div class="d-flex flex-row flex-wrap justify-content-around">
      <img
        class="p-1"
        src="assets/img/screenshots/career-pathway-shot.png"
        alt="{{ service.name }} | Turbine Workforce"
        height="285px"
      />
      <img
        class="p-1"
        src="assets/img/index-pg-imgs/cnc-tool-operator-pathway.png"
        alt="{{ service.name }} | Turbine Workforce"
        height="285px"
      />
      <img
        class="p-1"
        src="assets/img/index-pg-imgs/actionable-cnc-pathway.png"
        alt="{{ service.name }} | Turbine Workforce"
        height="285px"
      />
  </div>

<div id="ra-pipeline"></div>

### Apprenticeship Pipeline

Participating employers will be introduced to GACC & CCAC Apprenticeships and PAs will chart their own pathway to a good job.

###### German-American Chamber
- [GACC Sales Engineering Apprenticeship](https://www.gaccpit.com/en/workforce-development/translate-to-english-duale-ausbildung-in-den-usa/sales-engineer)
- [GACC CAD/Design Apprenticeship](https://www.gaccpit.com/en/workforce-development/dual-apprenticeship-program/cad-cam-technical-designer)
- [GACC Mechatronics Apprenticeship](https://www.gaccpit.com/en/workforce-development/translate-to-english-duale-ausbildung-in-den-usa/translate-to-english-mechatronics-technician)
- [GACC Polymer Technician Apprenticeship](https://www.gaccpit.com/en/workforce-development/translate-to-english-duale-ausbildung-in-den-usa/polymer-process-technician)

<div class="container">
  <div class="d-none d-md-block embed-responsive embed-responsive-4by3">
    <iframe class="embed-responsive-item" src="https://observablehq.com/embed/@trevianxyz/gacc-turbine-upskills-pathways/3?cells=svg"></iframe>
  </div>
<img
        class="p-2 d-sm-block d-md-none img-thumbnail"
        src="assets/img/index-pg-imgs/gacc-pa/gacc-pathways-png.png"
        alt="{{ service.name }} | Turbine Workforce"
        height=""
      />
</div>

<hr>
<!--
### The Consortium's Manifesto
- Anyone who is willing to go to any length to acquire these job-ready tech skills will be supported, and will not be turned away.
- Tech upskilling training or employment support will be made available to adults traditionally not eligible for a pre-apprenticeship: 
  - dislocated workers, people previously incarcerated, or active in drug and alcohol recovery with lengths of continuous sobriety, or people without command of the English language.
- The Consortium is open and welcome to new stakeholder organizations that commit to meaningful participation.
- Optimize existing workforce development resources first; new resources may be created as a last option after all others are tried and decided not to work.
- Expand participation in the GACC Pre-apprenticeship and Registered Apprenticeships - generally and into non-traditional industries,
occupations, and populations;
- Connect youth and eligible young adults to the GACC Pre-apprenticeship and Registered Apprenticeships; and into _good jobs_;
- The GACC Pre-Apprenticeship framework and rigor may not be a fit for everyone - for reasons specific or existential. No matter the reason, the Consortium will support everyone who is willing to go to any length to upskill.
- Basic web skills and a 'tech literacy' are today essential to obtain and hold a good job[^1].
- Basic web skills - the ability and comfort working with file systems and Web browsers.
- Tech literacy - more advanced ability using browser-based systems and programs like Microsoft Office and Google Workspace.
- 'Work with Tech' describes skills that have mobility across job functions and industries - best defined by the comfort and confidence to learn how to use new applications and software. The ability to 'work with tech' is essential for any great-paying job and is measured by one's confidence rather than ability in a singularly defined skill. However, the Consortium affirms one's ability to 'work with tech' by completion of select courses in the RTI - Web Fundamentals and Intro HTML/CSS.
- The long-term, balanced prosperity of the Greater Pittsburgh Region depends on the region's workforce with these basic skills and more;
- The global shift towards Industry 4.0[^3] economy represents a once-in-a-lifetime opportunity that the Pittsburgh region cannot miss.
- The most scalable, sustainable and sensible way to grab Industry 4.0 market share is to upskill a regional workforce
  - with <em>better than basic web and technology skills,</em>
  - that connect to actionable upskill pathways,
  - and build comfort, confidence and competency with fundamental programming languages and range of web applications, software and advanced technologies[^2].
- Work to drive the outcomes targeted by the framework of the [PASmart Grant](https://www.dli.pa.gov/Businesses/Workforce-Development/grants/Documents/PAsmart%20Apprenticeship/PAsmart-Apprenticeship-NGA.pdf).
-->

<!--
### Should your company join the consortium?
- Are experienced employees aging out of the workforce?
- Is it challenging to attract new talent to entry-level jobs?
- Do you need a pipeline that enables entry-level workers to prepare for hard-to-fill, highly skilled jobs?
- Are new grads long on theory but short on applied skills?
- Striving for a workforce that can keep pace with changes in the industry?
- If you answer yes to any of these questions, then yes you should join.
<div class="d-flex flex-row justify-content-end">
<a href="#top" class="float-right">
<h6 class="float-right">Back to Top</h6>
</a>
</div>
{% include contact/form.html %}
{% include contact/form-success.html %}
-->

##### Distributed Upskilling
We expect this Consortium + Turbine ecosystem to naturally develop a new, progressive, technology-driven model of scalable and sustainable workforce development that we call [Distributed Upskilling](/distributed-upskilling).

<!--<div class="container">
<div class="row mb-3">
<img
        class="p-1 img-fluid mx-auto"
        src="assets/img/index-pg-imgs/distributed-upskilling.png"
        alt=""
        width="600px"
        height="auto"
      />
</div>
</div>-->

**The GACC Pre-Apprenticeship is enhanced by:**
- administering all facets of pre-/apprenticeship on Turbine Workforce platform;
- Agile methodology concepts
- adoption of an innovative, scalable rotational OJT framework for more real world job experiences;
- integration of job-relevant basic skills training and employer-guided RTI;
- provide clear, actionable steps to obtain industry-, employer- and degree-recognized credentials and certificates;
- automation of all reporting production;
- regular roll-out of innovative tools to engage employers and increase renewal rates;
- offset of administrative burden from employers onto Turbine, and;
- employer-curated job profiles and actionable pathways that connect to the jobs employers hire for;
- Customer Discovery-driven Quarterly Business Reviews with employers;
- integration of career readiness support, mentorship and employment services at all points of upskilling.

**Consortium Design**<br>
The Consortium is mindful of the workforce development professionals who work 'in the trenches' and the evaluators and the multidisciplinary researchers who've produced a trove of data[^research] on workforce development, job training systems and career pathways design. The Consortium intends to involve these experts so to respect and add value to their work, and to not repeat what has been proven unviable.

[^research]: Some of this research that we've found helpful is: > [Digital Literacy & Technology Integration in Adult Basic Skills Education Review of the Research](https://strategies.workforcegps.org/resources/2021/10/14/19/42/Digital-Literacy-and-Technology-Integration-in-Adult-Basic-Skills-Education-Review-of-the-Research) > [Career Pathways Descriptive and Analytical Project](https://www.dol.gov/agencies/oasp/evaluation/completedstudies/career-pathways-descriptive-and-analytical-project) > [Evidence on Career Pathways Strategies](https://www.dol.gov/sites/dolgov/files/OASP/evaluation/pdf/ETA_CareerPathways_Brief_November2020.pdf) > [Apprenticeship Evidence-Building Portfolio](https://www.dol.gov/agencies/oasp/evaluation/currentstudies/Apprenticeship-Evidence-Building-Portfolio) > [Building Career Pathways Programs & Systems: Insights from TAACCCT](https://www.workforcegps.org/events/2021/10/15/14/46/~/~/link.aspx?_id=F546832B1EEE43CCA0E3D1DD1E234CC3&_z=z) > [Building Career Pathways Programs & Systems: Insights from TAACCCT, Round 4](https://www.dol.gov/sites/dolgov/files/OASP/evaluation/pdf/ETA_TAACCCTBuildingCareerPathways_Brief_Sep2020.pdf)

<div class="d-flex flex-row justify-content-end">
<a href="#top" class="float-right">
<h6 class="float-right">Back to Top</h6>
</a>
</div>

<script src="/assets/js/contact.js"></script>

<!--
<div class="accordion" id="accordionGaccPA">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionGaccPA">
      <div class="accordion-body">
        <strong>Cross-sector Partnership: Proposals demonstrate an effort to develop strong, high-quality cross-sector partnerships committed to working collaboratively to implement the proposal. Applicants are encouraged to have multiple partners across sectors (e.g. education partner, workforce development, business, economic development, and community partners) that demonstrate their commitment through letters of support.</strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionGaccPA">
      <div class="accordion-body">
        <strong>• Cross-sector Alignment: Proposals align with existing local, regional, and state education, workforce,
    and economic development initiatives.</strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionGaccPA">
      <div class="accordion-body">
        <strong>
      • Stakeholder Engagement: Proposals engage partners, customers, and stakeholders, including the
      target population, in the development of the proposal and its implementation.</strong>
      </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Accordion Item #4
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionGaccPA">
      <div class="accordion-body">
        <strong>
  • Equity, Diversity, and Inclusion: Proposals demonstrate a commitment to serve and increase access
for historically under-represented and under-served students, workers, businesses, and communities.</strong>
      </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        Accordion Item #5
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionGaccPA">
      <div class="accordion-body">
        <strong>
• Capacity Building: Proposals build the applicant’s or partners’ organizational capacity to better
implement the proposal and support students, workers, businesses, and communities.</strong>
      </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header" id="headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #6
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionGaccPA">
      <div class="accordion-body">
        <strong>
• Leveraging Existing Resources: Proposals demonstrate PAsmart resources will leverage and
supplement, not supplant, existing public and private resources (e.g. other federal or state grants and
philanthropic contributions, cash, in-kind, etc.). Proposals demonstrate efficient and effective use of
resources.</strong>
      </div>
    </div>
  </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #7
      </button>
       </h2>
       <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionGaccPA">
      <div class="accordion-body">
        <strong> Performance Outcomes: Proposals include measurable performance outcomes and a strategy to
      collect, analyze, and report performance data. Data-driven Innovation: Proposals identify a clear problem, challenge, or opportunity supported by relevant data and information, and include an innovative strategy to increase opportunity for Pennsylvania students, workers, employers, and communities.</strong>
      </div>
    </div>
    </div>
</div>
-->

<!--
### Tech Literacy to Advanced Technologies
All participants will learning the fundamentals of programming and web development through both asynchronous and asynchronous online instruction provided by VEX Robotics, Community College of Allegheny County (CCAC), Upstream Coding, and others. High quality upskilling resources - either open source or licensed - will be enhanced through instructor-led courses.

- Finding One's Aptitude
Not everyone acquires tech skills in the same pace or manner. Just the same that some people are more visual and others are more analytical, tech skills can crudely be separated into the design-driven (like front-end web design) or logic-based (like automation or back-end development).

- Career Pathways & Skills-driven Mobility
Participants will be presented with visual pathways created from employer-provided info and aggregated regional and industry data so to have better understanding of the career mobility that skills and skills groups will likely unlock for each of them.

- Mentorship & Career Guidance
Participants will be paired with a mentor from the consortium and a Certified Career Counselor or person of similar credential.

- Introduction to Programming & Web Fundamentals
 Curricula provided by: [VEX Robotics](https://www.vexrobotics.com/), [Upstream Coding](https://upstreamcoding.com/instruction)

- Automation
Curricula provided by: [VEX Robotics](https://www.vexrobotics.com/), [Upstream Coding](https://upstreamcoding.com/instruction)
-->