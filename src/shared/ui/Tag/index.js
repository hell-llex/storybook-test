import './style.css';

export const Tag = ({ text, classStyle }) => {
  return `
    <button class="${classStyle.join(' ')}">${text}</button>
  `;
};