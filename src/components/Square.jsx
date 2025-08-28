export const Square = ({ children, updateBoard, index, isSelected }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`


  const handleClick = (index) => {
    updateBoard(index);
  }

  return (
    <div 
      className={className} 
      onClick={() => handleClick(index)}
    >
      {children}
    </div>
  )
}