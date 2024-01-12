import React from 'react'
import { Wrapper } from './styled'

const Modal = ({ title, children, open, onClick }) => {
  const handleWrapperClick = (event) => {
    if (event.target === event.currentTarget) {
      onClick();
    }
  };

  return (
    <Wrapper title={title} onClick={handleWrapperClick} style={{ display: open ? 'flex' : 'none' }}>
      {children}
    </Wrapper>
  )
}

export default Modal;
