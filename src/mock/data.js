import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Rizwan Rashid',
  subtitle: 'MERN Stack Devloper',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'model.png',
  paragraphOne: 'I’m a Full Stack Web Developer with 3+ years of experience. I can make Full Stack Web Application for you with React and Node Restful APIs. I’ve completed many projects with 100% client’s satisfaction. I pursued my bachelors degree in Computer Science.',
  paragraphTwo: 'A qualified software engineer, professional web & app developer with focus on data Science and machine learning, an entrepreneurship enthusiast and a full of life individual are the words that define me best. For the past, several years, I have refined my technical and interpersonal skills by learning cutting-edge technologies through challenging educational and adventurous endeavors. I have worked with both national and international clients as a web developer and data Scientist, have worked individually as well as a part of some amazing teams often in leading positions.',
  paragraphThree: '.',
  resume: 'https://drive.google.com/file/d/1q7QiL4zbAm_5IEb0ZlCBUKF6j75EDFz8/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Creative Agency a complete IT solution',
    info: 'A user can order a service. After the order is successfully placed he can see all his orders.The user can also  leave a review which will show in the home page.Admin can add a service which a normal user can order. Admin can also see all the users who have ordered something.Admin can make another user admin by giving his email',
    info2: 'React js, node js, Mongodb, Express js, Bootstrap v4.5, CSS3 Animations, Swiper js, Firebase api etc.',
    url: 'http://assignment-11-r.web.app/',
    repo: 'https://github.com/rewon123/assignment-11', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Volunteer Network. Help people to feet better',
    info: 'User can select the destination where user wants to go When user will click on booking it will take the user to booking details Then it will take the user to the hotel page and then it will show available rooms with a map  User will automatically log in if he/she had already logged in before. ',
    info2: 'React js, Bootstrap 5, React router, private route , firebase authentication with form validation,api etc',
    url: 'https://assignment-10-volunteer-ecbf9.web.app/',
    repo: 'https://github.com/rewon123/assignment-10', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png', 
    title: 'Red Onion Restaurant',
    info: '',
    info2: '',
    url: 'https://red-onion-restaura.firebaseapp.com/',
    repo: 'https://github.com/rewon123', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Home.png', 
    title: 'Travel guru',
    info: "A user can register an event to participate in that event as a volunteer.All the information will be saved in the database and it will also show all the registrations in the admin panel.User can see all his registration after login and he/she can cancel the registration any time.Admin can add an event which a user can register on that event. Admin can delete a specific user's registration.User will automatically log in if he/she had already logged in before.",
    info2: "React js, node js, Mongodb, Express js, Bootstrap v4.5, CSS3 Animations,  Firebase , api etc",
    url: 'https://laughing-hypatia-78063c.netlify.app/',
    repo: 'https://github.com/rewon123/assignment-9', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'rewonrizwan123@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rewon-rizwan-8009691a6/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rewon123',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
