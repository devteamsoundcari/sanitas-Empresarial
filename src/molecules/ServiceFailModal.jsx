import React, { useContext } from 'react' // eslint-disable-line
import { SanitasEmpresarialContext } from '../context'
import { Modal } from './Modal'
import InfoCircle from '../assets/images/info-circle.svg'
import { Button2 } from '../atoms/Button2'
import { Paragraph2 } from '../atoms/Paragraph2'
import '../styles/ServiceFailModal.css'

const ServiceFailModal = () => {
  const { setShowServiceFailModal } = useContext(SanitasEmpresarialContext)

  return (
    <Modal className={'overlay'}>
      <div className="base-modal">
        <div className="modal-header">
          <img src={InfoCircle} alt="símbolo informativo" />
          <h2>Error</h2>
        </div>
        <div className="underline"></div>
        <Paragraph2
          text={
            'Lo sentimos, estamos presentando inconvenientes. \nInténtalo más tarde'
          }
          linesNumber={2}
        />
        <div className="underline"></div>

        <div className="modal-footer">
          <Button2
            variant={'nb-primary'}
            value={'Entendido'}
            className={'modal-btn-send'}
            onClick={() => setShowServiceFailModal(false)}
          />
        </div>
      </div>
    </Modal>
  )
}

export default ServiceFailModal
