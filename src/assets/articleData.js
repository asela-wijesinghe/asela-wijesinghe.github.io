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
     So if you came looking for the key to be a better developer let's start by setting your expectations about few commons things which defines a developer.
     <br/>
      <br/>
      It's close to 3 AM and being a developer, i am still awake. Yes, that's a first 😅. Some developers love to work willingly in the late nights with the calmness factor while some will have no choice but to work late night with the amount of piled up work.
      As 2nd there are lot of consistent learning efforts required day in day out from a developer to excel in the technologies he/she uses. Leveling up your skill regularly is considered a very basic thing expected out of a developer these days. 
      Specially if you are on a modern stack where a cooler framework being introduced per every day. So these are no longer key things, these have become the new-normal with the way software industry is going right now.
    <br/>
    <br/>
    So first advice don't expect less...
    </p>
    <h2>Then what is the key🔑?</h2>
    <p>
    Well, there's no such thing as the key. 
    It's perspective to different cultures, organizations, programming languages, and different leads you have in your team.
    But let me tell you something you might not think that it would be the key to be a better developer in the industry. 
    Usually the common image of a developer is either nerdy or geeky and expected to work all the time staring at the laptop🧑‍💻. But for a fact i have seen developers enjoy their life the best, they travel, they have adventures in life, they excell in areas like music or sports. 
    <br/><br/>
    But with the experience i've got working with young developers i would say, for a stereotype developer the main thing missing to be an above average or excellent developer is lack of communication skills...
    </p>
    <h2>Really🤔?</h2>
    <p>
    If you are hearing this for the 1st time i know what you think. I've been there few years back, during my university period we had a guest session preparing us for the industry. 
    In that session there was a director from a reputed software company (A great person whose advices helped me a lot to understand few important things).
    He asked us this problem "What is that we think the most important thing needed inorder to go to software industry after university?". Most of us said it's the skills, technical knowledge etc as expected.
    Working with more than hundreds of developers, clients, with years of experience, he replied it's the communications skill above all other things.
    That struck me that day, and after many years in the industry i've figured out that by now on my own. 
    If you are still doubtfull, communication is simply not your ability to speak in english nor the ability to speak in public.
    <br/>
    <br/>
    The interesting fact is, it is the key of building a great agile team.
     A team consists of people who offten shares properly what they do and what they plan to do (Yes its the standup).
     I've seen most people are good at doing things but poor at explaining to their peers what they are going to do. 
    If you start doing this, it's not just your ability to translate the logic in your mind into words which will make it usefull, when you are explainig your solution you will understand the flaws of it by yourself while doing the explanation and find new perspectives. 
    <br/>
    <br/>
    So is that it? ...duh, no. Communication is obviously bi-directional it's not about speaking it's mostly about listening and deciding when to speak. Just imagine a scenario where your client asking for a change in the logic you have implemented, and you are to respond to a normal human being and discuss it's possibility, the effort it's going to take, the feasibilty of the new suggession.
    Just remove the context developer out of this and think you are going to a automobile shop to buy a new vehicle part for your vehicle. How would you build up the communications with the shop owner, how would you bargain to lower the price? how would you trust the shop owner that these are original vehicle parts? Now put the developer context back to the equation, my question is how is this different from what we discussed in a software project?
    Nowadays, i feel like most of the young developers think we are developers only, we don't know how to talk to clients, that's BA's job or PM's job.
    <br/>
    <br/>
    Hate to break it up to you guys, well, thats what i see missing from those young developers. Not properly understanding what he/she could have done to improve or help his team to build the product that the client is desiring to build. It's not a machine that a team lead would like to have in his team. It would always be a person who comes up with ideas, discuss them, show others flows politely and accept their own by discussing within the team.
    If you think you are just a person who thinks your job as a developer is just doing what your tickets say so. 
    Then you are same as the person who did the engraving in the below image,
    </p>
    <img src="https://i.imgur.com/1oCZKxI.jpg" class="res-article-image">
    <br/>
     (Ref: I got this from one of my friends FB profile)
    <p>
    To sum up the section communication is actually important.To be able to tell the other whats on your mind thout fighting or arguing.
    </p>
    <h2>Overcome it🚀</h2>
    <p>
    Working with many young developers and fresh graduates i see this as common flow with their mind set always thinking, learning new frameworks is enough to survive and progress the career ladder as a developer.
    My personal opinion is I would pick a developer who is ready to accept, ready to learn and ready to care for the product, over a developer who is 10 times skilled than the earlier but doesn't have those qualities bundled up with great communication skills.
    <br/>
    <br/>
    So the take away is not that you need to go english classes to improve your language again.
    It's the smaller things in your day today developer life which you could have easily achieved if you feel like it's something you need to do.
    Something you could open up, something you need to speak with your peers, something you need to make your client aware, something you can do to help your team rather than sticking to your ego that it's not your job.
    After all for me these skills are the ones that seperate's a developer from an engineer, a junior developer from a senior developer, not the num of years exp in a specific language or a framework. It's the small things..
    Always.. Remember...
    <i><h4>"Communication is the key to open the lock of the problems and get their solution 💪..."</h4></i>
    <i>-Sadaf Gillani</i>
    <p>I mean that's what we should do, after all we all are engineers. That's what engineers are supposed to do, finding solutions...</p>
    <p>See you guys, let's meet on another chapter.. 😁</p>
    `
  }
];

export { articleDetails };
