import React, { ChangeEventHandler } from 'react';

interface TextareaProps {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  color: string
}

const Textarea: React.FC<TextareaProps> = ({color, onChange }) => {
  const textareaStyle: Record<string, string> = {
    green: 'border-green-500',
    orange: 'border-orange-500',
    blue: 'border-blue-500',
  }
  
  return (
    <>
      <div className={`px-2 border ${textareaStyle[color]}`}>
        <textarea onChange={onChange}>
          {
            
          }
        </textarea>
      </div>
    </>
  )
}

export default Textarea;