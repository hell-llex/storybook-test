export const ProductCard = ({ tag, buttons, stake, beforeAmount, amount, term }) => {
  return `
    <div class="product-card">
      <div class="header">
        <div class="logo">
        </div>
        <div class="title-container">
          <h2 class="roboto-regular">Проще простого</h2>
          <p>МТБанк</p>
        </div>
      </div>
      <div class="container">
        <div class="text-container stake">
          <p class="roboto-regular label">Ставка</p>
          <p class="roboto-bold text">${stake}%</p>
        </div>
        <div class="text-container amount">
          <p class="roboto-regular label">Сумма</p>
          <p class="roboto-bold text">${beforeAmount} <span>${amount}</span> BYN</p>
        </div>
        <div class="text-container term">
          <p class="roboto-regular label">Срок</p>
          <p class="roboto-regular text">${term}</p>
        </div>
        <div class="tag-container">${Array.from({ length: 3 }, () => tag).join('')}</div>
        <div class="btn-container">${buttons.join('')}</div>
      </div>
    </div>
  `;
};