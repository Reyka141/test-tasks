import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="text-center">
    <h1>404 - Страница не найдена</h1>
    <p>Извините, страница, которую вы ищете, не существует.</p>
    <Link to="/">Вернуться на главную</Link>
  </div>
);

export default NotFoundPage;