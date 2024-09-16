import React, {forwardRef} from 'react'

function Select({options, label, onChange, value, ...props}, ref) {

  return (
    <div>
        <label className='font-bold text-lg'>{label}</label>
        <select ref={ref} className={`w-full border-2 border-[#9c36b5] h-10 focus:outline-none px-2 bg-black text-[#9CA3AF] rounded-lg`} onChange={onChange} value={value} {...props}>
            <option value='' disabled >Select</option>
            {options.map(option => <option key={option.value} value={option.value}>{option.fullName}</option>)}
        </select>
    </div>
  )
}

export default forwardRef(Select)