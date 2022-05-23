import * as React from 'react'

function SvgGo({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M7.876 22.028c-.079 0-.099-.04-.06-.098l.413-.53c.04-.06.138-.099.216-.099h7.011c.079 0 .099.06.06.118l-.335.51c-.039.06-.137.119-.196.119l-7.11-.02zM4.911 23.835c-.078 0-.098-.04-.059-.098l.413-.53c.04-.06.137-.099.216-.099h8.955c.079 0 .118.06.099.118l-.158.472c-.02.078-.098.117-.176.117l-9.29.02zM9.663 25.642c-.079 0-.098-.059-.059-.118l.275-.49c.04-.06.118-.118.196-.118h3.928c.079 0 .118.058.118.137l-.04.471c0 .079-.078.138-.137.138l-4.281-.02zM30.048 21.675c-1.237.314-2.082.55-3.3.864-.294.078-.314.098-.569-.197-.295-.333-.51-.55-.923-.746-1.237-.609-2.435-.432-3.555.295-1.335.864-2.023 2.14-2.003 3.731.02 1.571 1.1 2.867 2.651 3.084 1.336.176 2.455-.295 3.339-1.297.177-.216.334-.451.53-.726h-3.79c-.413 0-.51-.256-.373-.59.255-.608.726-1.63 1.001-2.14a.53.53 0 01.491-.314h7.149c-.04.53-.04 1.06-.118 1.59a8.376 8.376 0 01-1.61 3.85c-1.414 1.865-3.26 3.024-5.598 3.338-1.924.256-3.711-.117-5.283-1.296-1.453-1.1-2.278-2.553-2.494-4.36-.255-2.14.373-4.065 1.67-5.754 1.394-1.827 3.24-2.985 5.499-3.398 1.846-.334 3.613-.118 5.204.963 1.041.687 1.787 1.63 2.278 2.769.118.176.04.275-.196.334z"
        fill="currentColor"
      />
      <path
        d="M36.548 32.535c-1.787-.04-3.417-.55-4.792-1.728-1.159-1.002-1.885-2.278-2.121-3.79-.354-2.22.255-4.184 1.59-5.932 1.434-1.885 3.163-2.867 5.5-3.28 2.003-.353 3.888-.157 5.597 1.002 1.551 1.06 2.514 2.494 2.77 4.38.333 2.65-.433 4.811-2.26 6.657-1.296 1.316-2.886 2.141-4.713 2.514-.53.098-1.06.118-1.571.177zm4.674-7.934c-.02-.256-.02-.452-.059-.648-.353-1.945-2.14-3.045-4.006-2.613-1.827.413-3.005 1.572-3.437 3.418-.353 1.532.393 3.083 1.807 3.712 1.08.47 2.16.412 3.201-.118 1.551-.805 2.396-2.062 2.494-3.751z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgGo