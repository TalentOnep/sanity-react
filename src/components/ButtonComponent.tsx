import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  color: string;
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ color, title, onClick}) => {
  const buttonStyle: Record<string, string> = {
    green: 'bg-green-500 hover:bg-green-600',
    orange: 'bg-orange-500 hover:bg-orange-600',
    blue: 'bg-blue-500 hover:bg-blue-600',
  }
  
  return (
    <>
      <div className="px-2">
        <button 
          className={`button ${buttonStyle[color]} text-white font-bold py-2 px-4 rounded-full`}
          onClick={onClick}
        >
          {title}
        </button>
      </div>
    </>
  )
}

export default Button;