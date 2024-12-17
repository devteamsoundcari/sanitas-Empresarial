import React, { useContext } from 'react'
import { SanitasEmpresarialContext } from '../context'

import { Input2 } from '../atoms/Input2'
import Header from './Header'
import { Paragraph } from '../atoms/Paragraph'
import { AttentionSchedule } from '../molecules/AttentionSchedule.jsx'
import ReCAPTCHA from 'react-google-recaptcha'
import { Button } from '../atoms/Button'
import ServiceFailModal from './ServiceFailModal'
import NotEmployerModal from './NotEmployerModal'
import { FindIcon } from '../atoms/FindIcon'
import '../styles/Form.css'
import Loader from '../atoms/Loader'
import { BubbleChat } from '../atoms/BubbleChat'
import { ImageModal } from './ImageModal'

const Form = () => {
  const {
    documentTypeList,
    docType,
    setDocType,
    docTypeError,
    setDocTypeError,
    docTypeDisabled,
    setDocTypeDisabled,
    docNumber,
    setDocNumber,
    docNumError,
    setDocNumError,
    cellPhone,
    setCellPhone,
    enterpriseName,
    province,
    setProvince,
    city,
    setCity,
    serviceType,
    checked,
    setChecked,
    showServiceFailModal,
    showNotEmployerModal,
    setEnterpriseName,
    cellPhoneError,
    setCellPhoneError,
    provinceError,
    setProvinceError,
    cityError,
    setCityError,
    recaptchaError,
    setRecaptchaError,
    checkedError,
    disabled,
    setDisabled,
    handleSubmit,
    captcha,
    formLoader,
    setFormLoader,
    provincesList,
    setProvincesList,
    citiesList,
    setCitiesList,
    callApi,
    url,
    setShowNotEmployerModal,
    provName,
    setProvName,
    cityName,
    setCityName,
    loader,
    captchaValue,
    setCaptchaValue,
    setUserName,
    showPopUp,
  } = useContext(SanitasEmpresarialContext)

  const handleDocTypeChange = (e) => {
    const value = e.target.value
    if (value === 0 || value === '') {
      setDocTypeError(true)
      setDocTypeDisabled(false)
      return
    } else {
      setDocTypeError(false)
    }
    setDocType(value)
  }

  const handleDocNumberChange = (e) => {
    const value = e.target.value

    if (value.length > 20) {
      return
    }

    if (value.length < 3) {
      setDocNumError(true)
    } else {
      setDocNumError(false)
    }
    setDocNumber(value)
  }

  const handleCellPhoneChange = (e) => {
    const value = e.target.value

    if (value.length > 10) {
      return
    }

    if (value.length !== 10) {
      setCellPhoneError(true)
    } else {
      setCellPhoneError(false)
    }
    setCellPhone(value)
  }

  const handleProvinceChange = (e) => {
    const selIdx = e.target.selectedIndex
    const selOpt = e.target.options[selIdx]
    const label = selOpt.text

    const value = e.target.value
    if (value === '') {
      setProvinceError(true)
    } else {
      setProvinceError(false)
    }
    setProvince(value)
    setProvName(label)
  }

  const handleCityChange = (e) => {
    const selIdx = e.target.selectedIndex
    const selOpt = e.target.options[selIdx]
    const label = selOpt.text
    const value = e.target.value

    if (value === '') {
      setCityError(true)
    } else {
      setCityError(false)
    }

    setCity(value)
    setCityName(label)
  }

  const handleCaptchaChange = (value) => {
    setRecaptchaError(false)
    setCaptchaValue(value)
  }

  const handleCaptchaExpired = () => {
    setRecaptchaError(true)
    setCaptchaValue(null)
  }

  const handleCheck = (e) => {
    setChecked(e.target.checked)
  }

  const onBlurEvent = (e) => {
    const eventName = e.target.name
    if (eventName === 'docType') {
      if (docType === '') {
        setDocTypeError(true)
        return
      } else {
        setDocTypeError(false)
      }

      if (docType !== '' && docNumber.length >= 3) {
        setDocTypeDisabled(true)
        searchData()
      } else if (docNumber.length < 3) {
        setDocNumError(true)
        setDocTypeDisabled(false)
        return
      } else if (docType === '') {
        setDocTypeError(true)
        setDocTypeDisabled(false)
        return
      }
    }

    if (eventName === 'docNumber') {
      if (docNumber.length < 3) {
        setDocNumError(true)
        return
      } else {
        setDocNumError(false)
      }

      if (docType !== '' && docNumber.length >= 3) {
        setDocTypeDisabled(true)
        searchData()
      } else if (docType === '') {
        setDocTypeError(true)
        setDocTypeDisabled(false)
        return
      } else if (docNumber.length < 3) {
        setDocNumError(true)
        setDocTypeDisabled(false)
        return
      }
    }

    if (eventName === 'cellPhone') {
      if (cellPhone.length !== 10) {
        setCellPhoneError(true)
      } else {
        setCellPhoneError(false)
      }
    }

    if (eventName === 'department') {
      if (province === '') {
        setProvinceError(true)
      } else {
        setProvinceError(false)
      }
    }

    if (eventName === 'city') {
      if (city === '') {
        setCityError(true)
      } else {
        setCityError(false)
      }
    }
  }

  // Método para validar si la empresa existe en EPS Sanitas
  const searchData = () => {
    docType === '' ? setDocTypeError(true) : null
    !docNumber.length ? setDocNumError(true) : null
    if (docType === '' && !docNumber.length) {
      setDocTypeError(true)
      setDocNumError(true)
      return
    } else if (docType === '' || docType === 0) {
      setDocTypeError(true)
      return
    } else if (docNumber.length < 3) {
      setDocNumError(true)
      return
    } else {
      setDocTypeError(false)
      setDocNumError(false)
      let operation = 'userConsult'
      const res = callApi(operation, docType, docNumber, url)
      setFormLoader(true)
      res
        .then((data) => {
          const status = data.status
          const user = data.message[0]
          if (status === 200) {
            setEnterpriseName(user.razonSocial)
            setUserName(user.nameUser)
            setDocTypeDisabled(true)
            setFormLoader(false)
          }
        })
        .catch((error) => {
          setFormLoader(false)
          setShowNotEmployerModal(true)
          console.error('El error es', error)
        })
    }
  }

  const getProvinces = () => {
    let operation = 'getAllDeptos'
    const res = callApi(operation, docType, docNumber, url)
    res
      .then((data) => {
        const provincesNames = data.message.deptos
        const provinces = provincesNames.map((item, idx) => {
          return {
            id: idx + 1,
            name: item.label,
            value: item.value,
          }
        })
        setProvincesList(provinces)
      })
      .catch((error) => console.error(error))
  }

  function getCities(provinceId) {
    const operation = 'getCitiesFromUserDepto'
    const res = callApi(operation, '', '', url, null, null, provinceId)
    res
      .then((data) => {
        const citiesNames = data.message.cities
        const cities = citiesNames.map((item, idx) => {
          return {
            id: idx + 1,
            name: item.label,
            value: item.value,
          }
        })
        setCitiesList(cities)
      })
      .catch((error) => console.error(error))
  }

  const onKeyDown = (e) => {
    // e.preventDefault(e)
    if (e.keyCode === 13) {
      searchData()
    }
  }

  React.useEffect(() => {
    getProvinces()
  }, []) // eslint-disable-line

  React.useEffect(() => {
    if (province !== '') {
      getCities(province)
    } else {
      setCitiesList([])
    }
  }, [province]) // eslint-disable-line

  React.useEffect(() => {
    if (
      docType === '' ||
      docNumber === '' ||
      cellPhone.length !== 10 ||
      province === '' ||
      city === '' ||
      !captchaValue ||
      !checked
    ) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
    // eslint-disable-next-line
  }, [docType, docNumber, cellPhone, province, city, captchaValue, checked])

  return (
    <div className="right-side">
      <div className="top">
        <Header type={1} text={'¡Nuestro compromiso es contigo!'} />
        <AttentionSchedule />
      </div>
      <Paragraph
        text={
          'Ten a mano los soportes para gestionar tus servicios, los campos marcados con (*) son obligatorios'
        }
        className={'pre-form-paragraph'}
      />
      <form method="POST" className="form" onSubmit={handleSubmit}>
        <div className="caja">
          <Input2
            label={
              docTypeError
                ? 'Selecciona un Tipo de documento'
                : 'Tipo de documento'
            }
            type="select"
            options={documentTypeList}
            value={docType}
            name={'docType'}
            onChange={handleDocTypeChange}
            id={'docType'}
            docTypeError={docTypeError}
            disabled={docTypeDisabled}
            className={'doc-type'}
            onBlur={onBlurEvent}
          />
          <Input2
            label={
              docNumError
                ? 'Ingresa un número de documento'
                : 'Número de documento'
            }
            type={'text'}
            name={'docNumber'}
            id={'docNumber'}
            className={'docNumber'}
            value={docNumber}
            onChange={handleDocNumberChange}
            numberDocError={docNumError}
            onBlur={onBlurEvent}
            disabled={docTypeDisabled}
            onKeyDown={onKeyDown}
          />
          <div
            className={
              docTypeDisabled ? 'find-icon-cont-disabled' : 'find-icon-cont'
            }
            onClick={searchData}
          >
            {formLoader ? <Loader /> : <FindIcon />}
          </div>
        </div>
        <div className="caja">
          <Input2
            label={'Razón Social'}
            type="text"
            value={enterpriseName}
            name={'social-reason'}
            id={'social-reason'}
            disabled={true}
            className={'social-reason'}
          />
          <Input2
            label={
              cellPhoneError ? 'Escribe un número válido de celular' : 'Celular'
            }
            type={'number'}
            name={'cellPhone'}
            id={'cellPhone'}
            className={'cellPhone'}
            onChange={handleCellPhoneChange}
            value={cellPhone}
            numberDocError={cellPhoneError}
            onBlur={onBlurEvent}
          />
        </div>
        <div className="caja-3">
          <Input2
            label={
              provinceError ? 'Selecciona un Departamento' : 'Departamento'
            }
            type="select"
            value={province}
            options={provincesList}
            onChange={handleProvinceChange}
            serviceTypeError={provinceError}
            name={'department'}
            id={'department'}
            className={'department'}
            onBlur={onBlurEvent}
            dataValue={provName}
          />
          <Input2
            label={cityError ? 'Selecciona una Ciudad' : 'Ciudad'}
            type="select"
            value={city}
            options={citiesList}
            onChange={handleCityChange}
            serviceTypeError={cityError}
            name={'city'}
            id={'city'}
            className={'city'}
            onBlur={onBlurEvent}
            dataValue={cityName}
          />
          <Input2
            label={'Tipo de servicio'}
            type={'text'}
            name={'service-type'}
            id={'service-type'}
            className={'service-type'}
            value={serviceType.name}
            disabled={true}
          />
        </div>
        {recaptchaError ? (
          <p
            style={{ color: '#b50303', textAlign: 'center', marginTop: '10px' }}
          >
            Es necesario que verifiques que no eres un robot
          </p>
        ) : (
          <div style={{ height: '20px', margin: '10px 0px 0px 0px' }}></div>
        )}
        <div className="captchaBox">
          <ReCAPTCHA
            ref={captcha}
            sitekey="6Lfdm0wpAAAAACPO3J7KJTxxV_qNo60rU5DdzMVQ"
            // onClick={() => setNoRobot(true)}
            onChange={handleCaptchaChange}
            onExpired={handleCaptchaExpired}
          />
        </div>
        {checkedError ? (
          <p
            style={{
              color: '#b50303',
              textAlign: 'center',
              margin: '10px 0px 0px 0px',
            }}
          >
            Debes aceptar el tratamiento de datos personales
          </p>
        ) : (
          <div style={{ height: '20px', margin: '10px 0px 0px 0px' }}></div>
        )}
        <div className="checkInput">
          <input
            type="checkbox"
            onClick={handleCheck}
            name={'accepted'}
            checked={checked}
            onChange={handleCheck}
          />
          <p className={checked ? 'bold' : ''}>
            He leído y acepto el{' '}
            <a
              href="https://www.epssanitas.com/usuarios/web/nuevo-portal-eps/terminos-y-condiciones#gsc.tab=0"
              target="_blank"
              rel="noopener noreferrer"
              className={checked ? `link-- bold` : `link--`}
            >
              Tratamiento de datos personales
            </a>{' '}
            y{' '}
            <a
              href="https://www.epssanitas.com/usuarios/web/nuevo-portal-eps/politicas-de-privacidad#gsc.tab=0"
              target="_blank"
              rel="noopener noreferrer"
              className={checked ? `link-- bold` : `link--`}
            >
              {' '}
              Política de privacidad.
            </a>
          </p>
        </div>
        <div className="btn-container">
          <Button
            className={'ingresar-btn'}
            id={'ingresar-btn'}
            disabled={disabled}
            onClick={handleSubmit}
          >
            {disabled ? 'Falta información para avanzar' : 'Inicia tu atención'}
            <figure>
              {/* <PhoneIcon border={disabled ? '#757575' : '#ffffff'} /> */}
              {loader ? <Loader /> : <BubbleChat />}
            </figure>
          </Button>
        </div>
      </form>
      {showServiceFailModal && <ServiceFailModal />}
      {showNotEmployerModal && <NotEmployerModal />}
      {showPopUp && <ImageModal />}
    </div>
  )
}

export { Form }
