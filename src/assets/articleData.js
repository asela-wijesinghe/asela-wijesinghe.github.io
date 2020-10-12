import ar1 from "../assets/images/articles/article1.jpg";
import ar2 from "../assets/images/articles/ar2-1.jpg";

const articleDetails = [
  {
    src: ar1,
    title: "How I created my own blog - Intro",
    linkID: 1,
    techs: ["ReactJS", "AWS", "Serverless"],
    role:
      "It's my developer journey on how I planned and architected my blog while tackling few common technical and business problems along the way...",
    body: `<p>
        It's almost 2.00 AM 🕑 and it's the most weird time to start planning my first blog post. 
        Like most of you, I also had a passion for sharing whatever I've learned, years of experience in the software industry, success stories, and failures from my <i>startup diary</i> (well, mostly failures) and from the people I've closely worked with.
        <br/>
        <br/>
        From the last 2 years I was like where do I start. Well..today, finally here I start reminding this famous quote,
        </p>
        <i><h4>"The perfect way to start something new, is by starting it right now 💪..."</h4></i>
        
        <h2>The goal 🚩</h2>
        <p>
        Since I started writing, now I need the support of a <b>blogging platform</b> to showcase my articles. So why not create one my self, and share my approach on solving both technical and non-technical problems while creating this blogging website.
        So this article is about it, If you are not an engineer, ignore the technical part and see if you have anything to get from the problem-solving approach and the decision making process.
        </p>
        
        <h2>Let's dive in...</h2>
        <p>
        The first thing ofcourse, I had to make a decision on my available options,
        <ol>
        <li>Create a website on a third-party platform like <a target="_blank" href="https://wordpress.com/" >Wordpress</a>,<a target="_blank" href="https://www.blogger.com/" >Blogger.com</a></li><br/>
        <li>Create a customized frontend for an existing CMS Provider for backend: <a target="_blank" href="https://developer.wordpress.org/rest-api/" >Wordpress API</a>,<a target="_blank" href="https://buttercms.com/" >ButterCMS</a></li><br/>
        <li>Create a customized frontend and a customized backend solution from scratch</li><br/>
        </ol>
        Out of these I've decided that I will go for the 3rd option. 
        As a personal preference, I always love to tweak and customize the UI/UX part from the initial point. 
        Also I have some cool features and in my mind that I wanted to implement in the future, as this website will be agile and will grow with time.
        <br/><br/>
        In that case even if the effort is considerably higher than the first 2 Options I started architecting the whole project both custom frontend and backend.
        <a target="_blank" href="https://reactjs.org/" >ReactJS</a> was my obvious selection for frontend framework based on it's customizability, elegancy and control.
        For backend I decided to use <a target="_blank" href="https://aws.amazon.com/lambda/" >AWS Lambda</a> a fully <b>serverless solution</b> along with other common AWS services.
        </p>
        
        <h2>Here we go 🏄 ...</h2>
        <p>
        Since I don't have a clear idea of the database schema yet, I started sketching the wireframes to extract the required information and clarity over the solution.
        </p>
        <img src="https://i.imgur.com/F4VyJKC.jpg" width="100%">
        <p>
        After deciding both mobile and web behaviors of the UI's I started coding the layouts after preapring the project structure with usual industry standards.
        </p>
        
        <h2>Did I miss a trick🍭?  </h2>
        
        <p>
        Well, After a few hours of coding the layouts came out good. And after more tweaking with colors and the design system components I was able to get the look I wanted.
        I have already taken a decision to build and deploy the frontend as a <b>static website</b> on <a href="https://pages.github.com/" target="_blank">GithubPages</a> with their cool domain mapping like <a href="https://asela-wijesinghe.github.io/ target="_blank">https://asela-wijesinghe.github.io</a>.
        <br/><br/>
        I have written a simple script to automate the deployment to GitHub-pages and completed the frontend.
        But the SEO limitations with single-page applications I had to use a few extra plugins to improve it. 
        <b>react-helmet</b> was such a package used, but it was quite hard without a server to serve the JSX pages to get the full extent of SEO. <b>Serverside rendering</b> or <b>Next.js</b> would have been an ideal solution. Maybe I missed the trick...
        </p>
        
        <h2>Why Serverless⚡?</h2>
        <p>
        The main concern for me was for a custom backend service the amount of money it would cost me to keep a server up and running especially when the service is not frequently accessed. 
        Serverless removes that unncessary server up time and charges me based on requests which led me to this architecture, suitable for a blog (Financial decisions are also important for any kind of software).
        <br/><br/>
        I used the bellow architecture for my AWS setup.
        </p>
          <img src="https://i.imgur.com/TRPTzTe.jpg" width="100%">
        
          <p>
          There are two streams for the backend data flow. The first one with the <b>rest API</b>(through API Gateway and DynamoDB) providing article details and metadata to my UI Screens.
          Then there's the <b>image upload</b> path for assets for articles, which are uploaded to S3 and processed with lambda for optimizations.
          <br/><br/>
          There are some caching mechanisms available as well to avoid making API requests too frequently, along with other security measures.
          I hope, I would be able to share more context on this AWS setup on my next episode of the article series.
        </p>
        
        <h2>Whats next🌏 .. </h2>
        
        <p>
        My goal here was to just give an overview of the solution, so you all can expect more indetail clarifications in the next episodes.
        <br/><br/>
        Also this solution may not be perfect. If you think otherwise please reach out to me always keep to discuss about what you all think. Until the next article, Thanks, guys. 4.13 AM...
        </p>`
  },
  {
    src: ar2,
    title: "The key to be a better developer in the industry",
    linkID: 2,
    techs: ["Career", "Software Development", "Team Leading"],
    role:
      "Let's talk about a key ingredient, most people does not focus on, nor will believe that it will play such an important role in software industry...",
    body: `<p>
    A random week, a random day, 2.47 AM 🕑 without sleeping on my comfy bed i've decided to write this up.
     So if you came looking for the key to be a better developer let's start by setting your expectations about few commons things about developers.
     It's close to 3 AM and i am still awake. Yes, that's a first. Some developers love to work willingly in the late night with the calmness factor while some will have no choice but to work late night with the amount of piled up work.
     As 2nd there are lot of consistent learning efforts required day in day out from a developer to excel in the technologies he/she uses.
    
    <br/>
    <br/>
    From the last 2 years I was like where do I start. Well..today, finally here I start reminding this famous quote,
    </p>
    <i><h4>"The perfect way to start something new, is by starting it right now 💪..."</h4></i>
    `
  }
];

export { articleDetails };
