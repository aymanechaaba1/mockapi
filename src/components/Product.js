export default function Product({ id, name, price }) {
  return `
    <div class="product space-y-3 p-4 border shadow-md rounded-lg" data-id="${id}">
      <h3 class="text-lg">${name}</h3>
      <p class="text-xs text-blue-500 font-medium">$${price}</p>
    </div>
  `;
}
