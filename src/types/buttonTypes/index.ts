export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: ButtonVariant;
}