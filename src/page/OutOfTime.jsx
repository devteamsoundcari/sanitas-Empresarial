import React from 'react' // eslint-disable-line

import Header from '../../molecules/Header/Header'
import { AttentionSchedule } from '../../Sanitas/Molecules/AttentionSchedule'
import { Paragraph2 } from '../atoms/Paragraph2'

import otImage from '../assets/images/ilustracion-medico.svg'

import '../styles/OutOfTime.css'

const OutOfTime = () => {
  return (
    <>
      <div className="out-of-time">
        <Header type={1} text={'¡Bienvenidos!'} />
        <figure className="ot-image-cont">
          <img
            src={otImage}
            alt="Ilustración de un médico"
            className="ot-image"
          />
        </figure>
        <Paragraph2
          text={`Gracias por contactarnos, \nen este momento no podemos atenderte`}
          className={'ot-paragraph'}
          linesNumber={2}
        />
        <AttentionSchedule />
      </div>
    </>
  )
}

export { OutOfTime }
