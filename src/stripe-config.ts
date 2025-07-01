export interface Product {
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
  price: string;
  currency: string;
}

export const products: Product[] = [
  {
    priceId: 'price_1IAV6UIGmqoF0Bnt3r44mzkb',
    name: 'Herv Brightening Oil Cleanser 150ml',
    description: 'The most important benefit of oil cleansing is being able to remove impurities without stripping the skin or leaving it feeling dry. Herv Brightening Oil Cleanser contain essential oils which are highly moisturizing.',
    mode: 'payment',
    price: 'MYR79.00',
    currency: 'MYR'
  }
];

export function getProductByPriceId(priceId: string): Product | undefined {
  return products.find(product => product.priceId === priceId);
}