import './style.css';

export const Button = ({ text, classStyle, disabled }) => {
  return `
    <button class="${classStyle.join(' ')}" ${disabled ? 'disabled' : ''}>${text}</button>
  `;
};