import React from 'react'

const VideoIcon = ({ estilo }) => {
  return (
    <svg
      width="23"
      height="16"
      viewBox="0 0 23 16"
      xmlns="http://www.w3.org/2000/svg"
      style={estilo}
    >
      <path
        id="video-plus"
        d="M22.0078 2.02344C21.5781 1.71094 20.9922 1.67188 20.5234 1.90625L16.5 3.74219V3C16.5 1.63281 15.3672 0.5 14 0.5H2.75C1.34375 0.5 0.25 1.63281 0.25 3V13C0.25 14.4062 1.34375 15.5 2.75 15.5H14C15.3672 15.5 16.5 14.4062 16.5 13V12.2578L20.5234 14.1328C20.7188 14.2109 20.9531 14.2891 21.1484 14.2891C21.4609 14.2891 21.7734 14.1719 22.0078 14.0156C22.4766 13.7422 22.75 13.2344 22.75 12.6875V3.3125C22.75 2.80469 22.4766 2.29688 22.0078 2.02344ZM14.625 13C14.625 13.3516 14.3125 13.625 14 13.625H2.75C2.39844 13.625 2.125 13.3516 2.125 13V3C2.125 2.6875 2.39844 2.375 2.75 2.375H14C14.3125 2.375 14.625 2.6875 14.625 3V13ZM20.875 12.2188L16.5 10.2266V5.8125L20.875 3.82031V12.2188ZM11.5 7.0625H9.27344V4.875C9.27344 4.36719 8.88281 3.9375 8.375 3.9375C7.82812 3.9375 7.4375 4.36719 7.4375 4.875V7.0625H5.21094C4.70312 7.0625 4.3125 7.49219 4.3125 8C4.3125 8.54688 4.70312 8.9375 5.21094 8.9375H7.4375V11.125C7.4375 11.6719 7.82812 12.0625 8.375 12.0625C8.88281 12.0625 9.27344 11.6719 9.27344 11.1641V8.9375H11.4609C12.0078 8.9375 12.4375 8.54688 12.4375 8C12.4375 7.49219 12.0078 7.0625 11.5 7.0625Z"
      />
    </svg>
  )
}

export { VideoIcon }
