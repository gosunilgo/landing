import * as React from 'react'

function SvgGithubOutlined({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M3.967 16.317c-.3-.2-.558-.455-.86-.816a49.329 49.329 0 01-.466-.58c-.463-.574-.755-.84-1.057-.948a1 1 0 11.676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095-2.968-.726-4.648-2.64-4.648-6.396 0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 01.63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096a11.73 11.73 0 012.687-.308c.912 0 1.818.104 2.684.308C14.245.354 15.381.06 16.19.19c.085.013.157.03.218.05a1 1 0 01.616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38 0 .905-.004 1.81-.012 2.716a1 1 0 01-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.66-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 01-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.49.139-1.11.44-1.858.949a1 1 0 01-.833.135 9.626 9.626 0 00-2.592-.35c-.89 0-1.772.12-2.592.35a1 1 0 01-.83-.133c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607A1 1 0 014.697 4.9c-.597.654-.913 1.458-.913 2.404 0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 01-.04-1.962v-.99c-.91.06-1.662-.088-2.254-.485z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgGithubOutlined
