import './button.css'

const button = (props) => {
    const {type, title, onClick, disabled} = props
  return (
    <button className={`
    btn 
    ${
    (type == 'add' && 'add') || 
    (type == 'remove' && 'remove') || 
    (type == 'checkout' && 'checkout') 
    } ${disabled == true && 'disabled'} `}
  
    onClick={onClick}
    disabled={disabled}
    >
    {title}
    </button>
  )
}

export default button