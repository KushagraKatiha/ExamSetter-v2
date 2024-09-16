import React, {forwardRef} from 'react'

function Input({label, type, placeholder, value, onChange, className, ...props}, ref) {
  return (
    <div>
        {label && <label className='font-bold text-lg'>{label}</label>}
        <input ref={ref} className={`border-2 w-full border-[#9c36b5] h-10 focus:outline-none px-2 bg-black text-white rounded-lg`} type={type} placeholder={placeholder} value={value} onChange={onChange} {...props}/>
    </div>
  )
}

export default forwardRef(Input)