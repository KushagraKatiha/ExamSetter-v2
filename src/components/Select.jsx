import React, {forwardRef} from 'react'

function Select({options,labelStyle,optionStyle, label, onChange, value, disabled}, ref) {

  return (
    <div>
        <label className={`font-bold text-lg ${labelStyle}`}>{label}</label>
        <select ref={ref} className={`w-full border-2 border-[#9c36b5] h-10 focus:outline-none px-2 bg-black text-[#FFFFFF] rounded-lg`} onChange={onChange} value={value} disabled={disabled}>
            {options.map(option => <option key={option.value} className={`${optionStyle}`} value={option.value}>{option.fullName}</option>)}
        </select>
    </div>
  )
}

export default forwardRef(Select)