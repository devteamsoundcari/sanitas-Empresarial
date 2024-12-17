import React from 'react'
import { SanitasEmpresarialContext } from '../../context'
import { Modal } from '../Modal'
import { Button2 } from '../../atoms/Button2'
import './ImageModal.css'

const ImageModal = () => {
  const { setShowPopUp, popUpImage, showPopUp } = React.useContext(
    SanitasEmpresarialContext
  )

  return (
    <Modal className={'overlay'} open={showPopUp}>
      <div className="base-modal">
        <img
          src={popUpImage}
          className="image-modal"
          alt="símbolo informativo"
        />
        <div className="btn-container">
          <Button2
            variant={'nb-primary'}
            value={'Continuar'}
            className={'modal-btn-img'}
            onClick={() => setShowPopUp()}
          />
        </div>
      </div>
    </Modal>
  )
}

export { ImageModal }
