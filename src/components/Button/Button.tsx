import React from 'react';
import styles from './Button.module.css';
import { ButtonProps } from '../../types/buttonTypes';

// type ButtonProps = {
//   label: string;
//   onClick?: () => void;
//   variant?: 'primary' | 'secondary';
// };

export default function Button ({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button className={styles[variant]} onClick={onClick}>
      {label}
    </button>
  );
}


// Use example:
// import Button from './Button';

// const App = () => {
//   return (
//     <div>
//       <Button label="Clique Aqui" onClick={() => alert('Botão clicado!')} />
//       <Button label="Cancelar" variant="secondary" />
//     </div>
//   );
// };

// export default App;