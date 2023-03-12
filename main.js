import './style.css';
import data from './data/portfolio.json';

const socialsEl = document.getElementById('socials');

data.socials.forEach((social) => {
  const element = document.createElement('a');
  element.setAttribute('href', social.link);
  element.innerHTML = social.title;

  socialsEl.appendChild(element);
});
