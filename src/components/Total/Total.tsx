import React from 'react';
import { useAppSelector } from '../../hooks/useRedux';

function Total() {
  const { products } = useAppSelector((state) => state.products);
  const total = products.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="total">
      <p>Итоговая цена: {total} $.</p>
    </div>
  );
}

export default Total;
