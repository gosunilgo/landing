import * as React from 'react'

function SvgCrv({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 117 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <rect
        x={1.021}
        y={1.29}
        width={115}
        height={115}
        rx={15.5}
        stroke="#EDEEF7"
        strokeOpacity={0.3}
      />
      <g clipPath="url(#CRV_svg__clip0_671_6315)">
        <path
          d="M56.94 20.134c.922.007 1.8.014 2.678.029.329.008.651.051.959.175.16.065.343.073.511.095.615.073 1.23.132 1.844.22.373.05.732.13 1.105.189.146.029.3.036.454.065.57.132 1.133.271 1.704.417.25.066.49.139.725.256.183.087.403.101.614.146.081.014.16.021.241.043.63.205 1.267.41 1.896.636.54.189 1.068.4 1.602.612.161.066.322.147.483.212.96.403 1.902.846 2.824 1.33.33.174.673.313 1.002.495.14.081.264.19.396.286.167.116.343.24.52.35.409.248.826.482 1.236.73.255.16.49.365.739.526.343.22.628.525.994.708a.647.647 0 01.249.19c.117.175.293.263.46.365.14.087.264.19.388.292.154.124.323.233.477.358.109.087.22.175.307.277.14.175.285.329.498.431.138.073.27.19.358.321.087.117.19.197.292.293.227.218.498.387.651.671.03.051.074.088.118.124.248.175.453.394.636.643.044.065.103.131.16.182.184.168.338.358.506.533.403.41.725.884 1.12 1.293.255.27.468.584.695.876.263.343.526.68.79 1.022.22.285.446.57.651.861.132.19.197.424.359.599.087.095.16.205.234.307.058.073.116.146.16.227.38.678.747 1.372 1.15 2.044.395.65.672 1.358 1.009 2.036.16.322.307.658.454.986.183.416.35.84.526 1.256.183.453.373.906.541 1.365.14.395.25.804.373 1.205.051.176.11.358.155.533.183.687.372 1.373.533 2.067.14.599.242 1.212.36 1.818l.174.963c.03.146.052.3.074.453.08.774.175 1.556.234 2.337.058.708.116 1.416.139 2.132.035.886.016 1.774-.059 2.657-.058.614-.08 1.234-.153 1.847-.117 1.03-.242 2.067-.454 3.082a72.05 72.05 0 01-.563 2.49c-.19.759-.403 1.511-.667 2.249-.065.182-.087.386-.16.569-.17.448-.345.893-.527 1.337-.19.474-.388.949-.578 1.423-.007.008-.007.022-.015.029-.372.767-.75 1.531-1.134 2.293-.203.406-.415.808-.636 1.205-.197.343-.417.678-.622 1.014-.073.117-.146.241-.227.351-.293.43-.592.869-.892 1.3l-.9 1.292a9.85 9.85 0 01-.82 1c-.183.197-.344.41-.512.62-.315.41-.673.775-1.017 1.162a19.97 19.97 0 01-1.09 1.14c-.19.19-.402.35-.6.532-.212.197-.439.388-.63.606-.24.277-.533.489-.811.723-.14.124-.279.248-.424.372-.045.036-.081.095-.125.116-.38.213-.688.527-1.025.79-.322.248-.665.474-.98.73-.11.087-.234.145-.351.226-.337.233-.666.468-1.003.7-.094.067-.204.11-.299.176-.242.16-.476.344-.724.489-.3.183-.608.344-.915.511-.03.015-.066.03-.096.044l-1.184.68c-.081.043-.154.115-.242.139-.35.093-.659.291-.995.43-.227.095-.44.212-.666.321-.124.058-.255.124-.38.175-.215.09-.425.19-.63.3-.27.153-.585.233-.878.343l-.328.109c-.198.066-.404.124-.6.19l-.733.24c-.065.023-.124.067-.19.082-.673.19-1.353.38-2.026.562a31.53 31.53 0 01-2.283.532c-.841.162-1.675.322-2.524.417-.293.03-.585.05-.87.08-1.67.153-3.337.227-5.013.16a35.594 35.594 0 01-4.396-.423c-.703-.117-1.405-.24-2.108-.365-.658-.116-1.295-.299-1.946-.467A17.787 17.787 0 0145 92.542c-.161-.066-.337-.088-.505-.146-.461-.165-.92-.338-1.375-.519a56.002 56.002 0 01-1.384-.599c-.329-.152-.651-.32-.972-.481-.14-.066-.286-.11-.417-.175a99.21 99.21 0 01-1.295-.694c-.36-.197-.718-.394-1.076-.584-.03-.015-.066-.029-.095-.051-.66-.482-1.405-.833-2.034-1.365-.183-.162-.403-.27-.607-.41a53.91 53.91 0 01-.688-.481c-.096-.066-.183-.147-.285-.198-.564-.32-1.04-.744-1.486-1.219a5.608 5.608 0 00-.372-.372c-.242-.22-.491-.431-.732-.65-.125-.11-.235-.226-.352-.336-.036-.03-.059-.073-.095-.102-.351-.27-.629-.62-.95-.92-.313-.281-.602-.586-.864-.913-.249-.314-.528-.59-.776-.898-.292-.364-.592-.723-.878-1.088-.285-.364-.564-.744-.841-1.116a.662.662 0 01-.08-.118c-.22-.409-.535-.766-.799-1.146-.116-.175-.211-.365-.321-.54a2.063 2.063 0 00-.176-.264c-.14-.174-.271-.35-.35-.561-.037-.096-.118-.175-.17-.264-.278-.488-.555-.97-.826-1.46-.278-.504-.512-1.022-.768-1.533-.198-.394-.403-.789-.564-1.205-.307-.796-.68-1.562-.907-2.388-.22-.452-.314-.949-.468-1.43-.088-.256-.154-.512-.227-.767a30.523 30.523 0 01-.351-1.314 60.854 60.854 0 01-.352-1.533 34.625 34.625 0 01-.482-3.118c-.271-2.527-.249-5.06-.088-7.594.037-.533.124-1.066.19-1.599.059-.438.117-.876.19-1.314.118-.701.235-1.402.418-2.096.168-.642.307-1.292.49-1.934.183-.65.366-1.3.629-1.928.19-.46.336-.942.535-1.409.387-.935.797-1.862 1.22-2.789.257-.555.542-1.088.864-1.6.146-.24.264-.496.41-.736.3-.497.614-.987.922-1.483.066-.11.102-.233.168-.343.249-.38.49-.767.79-1.11.169-.19.3-.416.44-.635.113-.19.25-.364.409-.519.146-.13.285-.277.395-.438.16-.248.366-.46.556-.672.022-.029.052-.043.073-.08.22-.38.57-.642.864-.963.205-.227.388-.468.578-.701.27-.336.556-.658.907-.913.19-.14.337-.322.512-.474.168-.147.344-.278.511-.424.162-.14.308-.285.47-.416.277-.234.556-.46.833-.694.425-.35.835-.716 1.267-1.044.49-.372.958-.788 1.529-1.051a.459.459 0 00.116-.073c.169-.248.44-.336.68-.483.037-.021.096-.028.125-.058.374-.35.842-.54 1.288-.774.63-.335 1.244-.686 1.88-1.008.556-.276 1.084-.605 1.661-.825.198-.073.373-.189.563-.284.066-.029.124-.066.19-.088.337-.132.674-.263 1.017-.387.096-.036.198-.066.3-.095.06-.015.118-.029.169-.05.512-.278 1.06-.417 1.624-.548.238-.057.47-.133.695-.227.373-.153.754-.24 1.142-.328.417-.095.834-.219 1.251-.33.52-.138 1.046-.262 1.587-.284.096-.007.19-.007.279-.03.658-.174 1.338-.218 2.011-.269.282-.017.56-.071.828-.16.255-.096.519-.125.79-.132.86-.034 1.72-.054 2.582-.058zm15.065 38.814c-.19-.095-.279-.27-.366-.431-.11-.204-.212-.416-.388-.576-.066-.06-.102-.154-.147-.241-.116-.212-.226-.439-.35-.643-.3-.489-.608-.971-.908-1.453-.088-.138-.146-.3-.248-.416-.124-.14-.191-.292-.264-.453-.102-.205-.088-.431-.051-.65a.419.419 0 01.248-.32c.212-.09.411-.213.66-.205.219.007.446-.022.665-.052.205-.029.27-.087.278-.292.015-.336.015-.678 0-1.015-.008-.167-.073-.226-.241-.24-.103-.008-.213-.008-.315-.008-2.48 0-4.96-.008-7.441-.008h-.248c-.22.016-.272.06-.28.272-.006.313 0 .628 0 .94v.037c.024.22.082.285.301.321.14.023.278.037.417.045.476.007.893.197 1.237.504.227.197.417.438.6.678.241.329.46.672.673 1.023.307.526.644 1.029.965 1.54.279.446.55.899.835 1.337.292.452.511.941.877 1.343a.16.16 0 01.037.058c.132.35.366.65.556.971.337.548.674 1.088 1.01 1.636a.562.562 0 00.358.256c.22.058.425.124.644 0 .037-.023.096-.016.14-.016.145.008.24-.072.314-.189.14-.226.293-.453.432-.68.285-.467.563-.934.848-1.408.33-.548.651-1.103 1.003-1.643.468-.723.9-1.475 1.36-2.206.373-.605.696-1.24 1.112-1.817.14-.19.256-.388.418-.562.3-.336.63-.614 1.09-.73.248-.066.498-.14.754-.147.263-.007.373-.16.453-.364.022-.052.022-.117.022-.176 0-.197.008-.394 0-.599-.015-.314-.14-.445-.454-.453-.27-.007-.541.016-.805.016-1.521 0-3.043-.008-4.558-.008-.08 0-.16 0-.24.015-.09.014-.155.058-.169.153a5.006 5.006 0 00-.016 1.19c.023.154.074.19.236.212.219.021.445.058.665.044.285-.016.527.102.76.219.25.124.352.416.264.686a2.774 2.774 0 01-.336.694c-.205.32-.41.65-.608.978-.197.328-.395.664-.592.993a105.62 105.62 0 01-.937 1.519c-.08.116-.124.248-.271.321zm-17.698-4.92c-.016-.03-.038-.06-.045-.096a6.944 6.944 0 01-.03-1.293c.014-.138.017-.277.009-.415-.008-.198-.06-.256-.242-.271-.16-.008-.33-.008-.49-.008a797.078 797.078 0 00-4.178-.014c-.08 0-.16 0-.24.008-.163.022-.236.087-.236.248-.008.365-.008.723 0 1.088 0 .146.066.204.22.226.161.022.33.037.49.037.278-.008.527.08.783.175a.909.909 0 01.454.372c.117.183.234.38.255.606.03.256.081.512.081.768.008 1.284 0 2.57.008 3.853 0 .322-.044.629-.124.936-.14.532-.476.868-1.04.949-.234.03-.468.05-.695.073-.256.022-.3.059-.307.321-.008.277-.008.563-.008.84v.073c.023.277.066.328.33.336h.248c2.144 0 4.28.008 6.424.008.14 0 .278 0 .418-.016.234-.022.307-.102.314-.336.007-.27.007-.54 0-.803-.007-.4-.037-.423-.454-.438-.233-.014-.468-.007-.695-.058-.366-.08-.68-.285-.826-.643a3.096 3.096 0 01-.235-.913c-.05-.86-.095-1.723.073-2.584.044-.227.044-.467.11-.687.146-.467.38-.897.68-1.292l.088-.109c.308-.292.63-.548 1.01-.745.388-.198.79-.198 1.193-.241.124-.015.19.073.19.197 0 .183 0 .372-.008.555-.007.504.542 1.066 1.04 1.124.27.037.534.052.804.015.344-.044.66-.168.886-.446a.663.663 0 01.124-.124c.3-.218.403-.54.425-.883.014-.314 0-.628-.016-.942a1.17 1.17 0 00-.073-.306 2.263 2.263 0 00-.724-1.008c-.366-.285-.754-.497-1.229-.54-.015 0-.022 0-.036-.008a2.704 2.704 0 00-1.084-.028c-.365.058-.73.094-1.082.255a5.167 5.167 0 00-1.617 1.146c-.256.27-.498.555-.702.868-.052.089-.11.183-.242.17zm-11.13-.41c-.138.256-.27.46-.365.686-.147.329-.19.672 0 1.008.037.073.066.154.088.227.073.248.226.415.431.576.242.19.512.285.805.321.417.052.827 0 1.179-.248.263-.183.49-.401.643-.715.22-.446.264-.884.146-1.359a2.84 2.84 0 00-.607-1.131 1.71 1.71 0 00-.563-.46 2.508 2.508 0 01-.337-.19c-.38-.27-.805-.416-1.258-.504-.08-.015-.168-.022-.234-.065-.124-.088-.264-.096-.403-.096-.131-.007-.256-.007-.387-.03-.498-.072-1.003-.108-1.508-.05-.504.059-1.031.037-1.514.248-.008.008-.022.008-.037.008-.285.095-.592.168-.863.299-.373.183-.768.343-1.083.636a.16.16 0 01-.058.035c-.234.096-.403.286-.57.461a14.85 14.85 0 00-.47.518c-.073.088-.16.175-.212.278-.285.518-.607 1.022-.739 1.613-.094.431-.22.862-.204 1.307.007.256.007.512 0 .767-.022.605.153 1.175.366 1.737a5.225 5.225 0 001.184 1.84c.213.22.447.41.681.6.22.182.483.284.717.437.505.336 1.09.453 1.646.665.359.043.717.116 1.075.132.622.021 1.244.028 1.852-.089.139-.029.286-.014.417-.065.446-.175.915-.3 1.317-.555.116-.073.227-.16.351-.233a2.61 2.61 0 00.732-.592 4.4 4.4 0 00.907-1.6c.022-.065.044-.138.08-.19.088-.123.081-.262.073-.4-.007-.14-.058-.183-.197-.198a3.56 3.56 0 00-.278-.014l-.783.021c-.058.124-.11.242-.175.35-.147.257-.278.52-.454.745-.278.366-.629.65-1.047.863-.306.153-.606.27-.958.284-.535.022-1.046-.066-1.558-.205a1.122 1.122 0 01-.256-.108c-.483-.3-.9-.672-1.2-1.155a4.581 4.581 0 01-.614-1.518 8.617 8.617 0 01-.162-1.212c-.036-.796.051-1.577.351-2.33.169-.415.396-.788.688-1.132.11-.13.248-.248.396-.342.314-.205.673-.314 1.016-.453a.303.303 0 01.14-.015c.35.044.695.044 1.046.117.337.044.57.227.768.475z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="CRV_svg__clip0_671_6315">
          <path
            fill="currentColor"
            transform="translate(19.873 20.134)"
            d="M0 0h74.44v74.44H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgCrv