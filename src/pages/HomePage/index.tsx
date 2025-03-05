import React from 'react';
import Button from '../../components/Button/Button';


export default function HomePage () {
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <div>
      <h1>Bem-vindo à Página Inicial!</h1>

      <Button label="Clique Aqui" onClick={handleClick} />
      <Button label="Cancelar" variant="secondary" onClick={() => alert('Cancelar clicado!')} />
    </div>
  );
};