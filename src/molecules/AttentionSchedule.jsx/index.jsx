// import React from 'react'
import clock from '../../assets/images/clock.svg'
import './AttentionSchedule.css'
import PropTypes from 'prop-types'

const AttentionSchedule = ({ wvType, calendarMessage }) => {
  return (
    <div className="schedule-container">
      {wvType === 'schedule' ? (
        <div className="schedule-content">
          <div className="div-header">
            <img src={clock} alt="Reloj" className="schedule-icon" />
          </div>
          <p className="schedule-title">Horario de atención de agentes</p>
          <p className="schedule-info">
            {calendarMessage
              ? calendarMessage
              : 'Lunes a viernes de 7:00 a.m. a 5:00 p.m. - Sábados de 7:00 a.m. a 12:00 p.m.'}
          </p>
        </div>
      ) : (
        <>
          <figure className="out-of-time-icon-cont">
            <img src={clock} alt="Reloj" className="out-of-time-icon" />
          </figure>
          <h4 className="out-of-time-title schedule-title">
            Horario de atención
          </h4>
          <p className="out-of-time-paragraph schedule-info">
            {calendarMessage
              ? calendarMessage
              : 'Lunes a viernes de 7:00 a.m. a 5:00 p.m. - Sábados de 7:00 a.m. a 12:00 p.m.'}
          </p>
        </>
      )}
    </div>
  )
}

export { AttentionSchedule }

AttentionSchedule.propTypes = {
  wvType: PropTypes.string,
  calendarMessage: PropTypes.string,
}
