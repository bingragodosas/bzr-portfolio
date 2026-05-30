import { useEffect, useRef } from 'react';

const SI = {
  react:      'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.292zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z',
  javascript: 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z',
  html5:      'M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z',
  typescript: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z',
  supabase:   'M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.101 12.911.769 14.17 1.824 14.17h7.276l.033 8.763c.015.987 1.26 1.411 1.874.638l9.262-11.653c.663-.861-.005-2.118-1.06-2.118h-7.276L11.9 1.036z',
  firebase:   'M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z',
  nodejs:     'M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68C2.99 6.729 2.936 6.825 2.936 6.921v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.945-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.275-.924 1.604l-8.794 5.078C12.643 23.916 12.324 24 11.998 24z',
  postgresql: 'M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1a9.492 9.492 0 0 0-2.182-.274c-1.39 0-2.855.374-3.967 1.179C-.966 4.24-.285 8.38.504 10.47c.545 1.44 1.272 2.207 1.907 2.207.42 0 .947-.29 1.455-1.176.05-.086.1-.174.148-.258.116.68.345 1.342.671 1.974l-.021.014c-.277.189-.43.411-.457.627-.07.57.492 1.093 1.071 1.489a4.2 4.2 0 0 0 2.759.818c.285 0 .576-.022.866-.063a4.15 4.15 0 0 0 1.93.697 4.15 4.15 0 0 0 2.52-.587l.074-.044a4.2 4.2 0 0 0 2.156 1.04c.285 0 .576-.022.866-.063a4.156 4.156 0 0 0 2.135-.765c.58-.396 1.14-.918 1.07-1.489-.027-.216-.18-.438-.457-.627l-.024-.016a6.422 6.422 0 0 0 .668-1.97c.048.084.1.172.15.258.508.886 1.035 1.176 1.455 1.176.635 0 1.362-.767 1.907-2.208.79-2.088 1.47-6.228-2.04-8.564C19.895.35 18.516 0 17.128 0z',
  git:        'M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187',
  vscode:     'M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.881V4.118a1.5 1.5 0 0 0-.85-1.531zm-5.146 14.861L10.826 12l7.178-5.448v10.896z',
  vite:       'M12 0L1.605 21.404h20.79zm0 4.08l7.043 14.827H12V4.08z',
  npm:        'M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z',
  figma:      'M5.333 24C7.355 24 9 22.355 9 20.333V16.5H5.333C3.311 16.5 1.666 18.145 1.666 20.167S3.311 24 5.333 24zM1.666 12c0-2.022 1.645-3.667 3.667-3.667H9V15.5H5.333C3.311 15.5 1.666 13.855 1.666 12zm3.667-7.833C5.333 2.145 6.978.5 9 .5v7.333H5.333C3.311 7.833 1.666 6.188 1.666 4.167zm7.667-3.5h3.667C15 .667 16.645 2.312 16.645 4.334s-1.645 3.667-3.667 3.667H9.333zm3.667 7.333c2.022 0 3.667 1.645 3.667 3.667S15 15.167 13 15.167H9.333V8z',
  mysql:      'M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 0 0-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.175.295-.375.295-.597a1.54 1.54 0 0 0-.108-.524l-1.033-2.82h.994l.625 1.965c.073.248.132.504.175.77h.011c.043-.243.1-.49.172-.738l.608-1.997h.869zm6.557-.06c-.577 0-1.1.174-1.567.523v-2.15h-.818v6.39h.818v-.49a2.88 2.88 0 0 0 1.567.49c.55 0 .982-.202 1.295-.605.313-.402.47-.963.47-1.68 0-.664-.153-1.188-.46-1.573-.307-.386-.723-.578-1.305-.578zm-.194 3.982c-.43 0-.826-.13-1.19-.392v-2.406c.36-.27.757-.404 1.19-.404.375 0 .664.14.867.42.2.28.302.662.302 1.145 0 .51-.1.905-.298 1.186-.2.28-.488.42-.87.42zm6.145-3.95h-.879v2.588c0 .692-.27 1.038-.81 1.038-.27 0-.534-.094-.794-.28v-3.346h-.88v3.125c0 .52.128.922.384 1.204.256.283.618.424 1.086.424.525 0 .927-.2 1.204-.6h.015v.52h.675v-4.673zm4.326 0h-.88v2.588c0 .692-.27 1.038-.81 1.038-.27 0-.534-.094-.794-.28v-3.346h-.88v3.125c0 .52.128.922.384 1.204.256.283.618.424 1.086.424.525 0 .927-.2 1.204-.6h.015v.52h.675v-4.673zM24 9.39c-.888.785-1.895 1.378-3.01 1.766-.432.14-.876.25-1.326.33-1.407.233-2.953.1-4.227-.5-1.34-.63-2.287-1.693-2.738-3.076-.224-.682-.33-1.408-.292-2.137.04-.737.22-1.453.534-2.1a5.746 5.746 0 0 1 1.42-1.88c.6-.503 1.294-.884 2.033-1.106 1.513-.452 3.17-.303 4.556.416.728.38 1.36.913 1.854 1.562.49.644.826 1.39.988 2.18.16.787.14 1.61-.057 2.39a5.634 5.634 0 0 1-.335.864c.226-.054.45-.12.668-.2.41-.143.8-.326 1.165-.546V9.39z',
  php:        'M7.672 9.374c-.44 0-.746.11-.917.33-.17.22-.256.584-.256 1.095 0 .51.086.876.256 1.1.17.222.477.333.917.333h.76V9.374h-.76zm8.126 0c-.44 0-.746.11-.917.33-.17.22-.256.584-.256 1.095 0 .51.086.876.256 1.1.17.222.477.333.917.333h.76V9.374h-.76zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.387 8.422H7.27v-1.61h-1.4v1.61H4.53V9.89h1.34v1.518H7.27V9.89h1.343v4.22zm3.354-1.358c0 .44-.088.796-.265 1.067-.176.272-.434.407-.773.407H9.61v1.25H8.272V9.89h2.657c.34 0 .597.135.773.406.177.27.265.626.265 1.066v1.39zm4.66 0c0 .44-.088.796-.265 1.067-.176.272-.434.407-.773.407h-1.317v1.25h-1.34V9.89h2.657c.34 0 .597.135.773.406.177.27.265.626.265 1.066v1.39zm3.705 1.358h-1.34v-1.61h-1.4v1.61h-1.343V9.89h1.343v1.518h1.4V9.89h1.34v4.22z',

  wordpress:  'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM2.686 12c0-.831.113-1.634.314-2.4L7.7 23.066A9.713 9.713 0 0 1 2.686 12zm9.314 9.714a9.763 9.763 0 0 1-2.724-.388l2.893-8.404 2.963 8.115a.88.88 0 0 0 .068.131 9.78 9.78 0 0 1-3.2.546zm1.35-14.292c.59-.031 1.12-.093 1.12-.093.528-.062.465-.838-.062-.807 0 0-1.585.124-2.608.124-1.023 0-2.577-.124-2.577-.124-.527-.031-.59.776-.062.807 0 0 .5.062 1.028.093l1.527 4.184-2.144 6.429-3.567-10.613c.59-.031 1.12-.093 1.12-.093.527-.062.465-.838-.062-.807 0 0-1.585.124-2.608.124-.184 0-.4-.005-.627-.012C5.752 3.894 8.725 2.286 12 2.286c2.467 0 4.716.943 6.4 2.484-.04-.002-.082-.007-.124-.007-.962 0-1.644.838-1.644 1.738 0 .807.465 1.49.962 2.297.373.652.807 1.49.807 2.701 0 .838-.322 1.802-.745 3.155l-.975 3.255-3.531-10.487zm3.617 13.27 2.942-8.499c.552-1.379.735-2.484.735-3.465 0-.356-.023-.687-.065-1A9.718 9.718 0 0 1 21.714 12a9.698 9.698 0 0 1-4.747 8.692z',
  webflow:    'M18.558 7.648s-2.09 6.408-2.238 6.937c-.06-.587-1.02-6.937-1.02-6.937H12.3s-2.13 6.876-2.29 7.4c-.05-.627-.97-7.4-.97-7.4H6.58L8.92 16.35h3.12s2.06-6.569 2.2-7.049c.07.49 1.06 7.05 1.06 7.05h3.07L21 7.648z',
};

const SKILL_TILES = [
  { label: 'React',        icon: 'react',      color: '#61DAFB', bg: '#0d2a35' },
  { label: 'JavaScript',   icon: 'javascript', color: '#F7DF1E', bg: '#2a2600' },
  { label: 'HTML5 & CSS3', icon: 'html5',      color: '#E34F26', bg: '#2e1206' },
  { label: 'TypeScript',   icon: 'typescript', color: '#3178C6', bg: '#0d1f38' },
  { label: 'Node.js',      icon: 'nodejs',     color: '#339933', bg: '#0b2010' },
  { label: 'PHP',          icon: 'php',        color: '#a78be8', bg: '#1e1535' },
  { label: 'Supabase',     icon: 'supabase',   color: '#3ECF8E', bg: '#082a1e' },
  { label: 'Firebase',     icon: 'firebase',   color: '#FFCA28', bg: '#2a2000' },
  { label: 'MySQL',        icon: 'mysql',      color: '#4479A1', bg: '#0d1e2e' },
  { label: 'PostgreSQL',   icon: 'postgresql', color: '#4169E1', bg: '#0d1435' },
  { label: 'Git & GitHub', icon: 'git',        color: '#F05032', bg: '#2e0e08' },
  { label: 'VS Code',      icon: 'vscode',     color: '#007ACC', bg: '#001e33' },
  { label: 'Vite',         icon: 'vite',       color: '#9a7fe8', bg: '#1a1535' },
  { label: 'npm',          icon: 'npm',        color: '#CB3837', bg: '#2a0808' },
  { label: 'Figma',        icon: 'figma',      color: '#F24E1E', bg: '#2e0e06' },
  { label: 'WordPress',    icon: 'wordpress',  color: '#21759B', bg: '#0a1e2a' },
  { label: 'Webflow',      icon: 'webflow',    color: '#4353FF', bg: '#0d0f2e' },
];

const TIMELINE = [
  { year: '2023', title: 'Started Diploma of IT',  sub: 'Dumaguete Campus — discovered my love for web development.' },
  { year: '2024', title: 'First React Project',    sub: 'Built a barangay management system as a class project.' },
  { year: '2025', title: 'Supabase Integration',   sub: 'Learned backend-as-a-service and full-stack React patterns.' },
  { year: 'Now',  title: 'Junior Web Developer',   sub: 'Building portfolio projects and preparing for industry.' },
];

const STATS = [
  { val: '2+',  label: 'Years Learning' },
  { val: '4+',  label: 'Projects Built' },
  { val: 'DIT', label: 'Program' },
  { val: '2026',label: 'Expected Grad' },
];

// Infinite runner — duplicates tiles for seamless loop
function SkillRunner() {
  const doubled = [...SKILL_TILES, ...SKILL_TILES];
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* fade edges */}
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '60px', background: 'linear-gradient(to right, #050a14, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '60px', background: 'linear-gradient(to left, #050a14, transparent)', zIndex: 2, pointerEvents: 'none' }} />

      <div className="skill-runner" style={{ display: 'flex', gap: '10px', width: 'max-content' }}>
        {doubled.map((skill, i) => (
          <div key={i} style={{
            background: skill.bg,
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '12px',
            padding: '10px 8px 8px',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '8px',
            /* 3rem tall × 1.8rem wide as requested — in pixels: ~48×29, scaled up to be legible */
            width: '72px',
            height: '72px',
            flexShrink: 0,
            cursor: 'default',
          }}>
            <svg viewBox="0 0 24 24" width="28" height="28" fill={skill.color} aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d={SI[skill.icon]} />
            </svg>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '9px', fontWeight: 500,
              color: 'rgba(200,230,220,0.65)',
              textAlign: 'center', lineHeight: 1.2,
              whiteSpace: 'nowrap', overflow: 'hidden',
              textOverflow: 'ellipsis', maxWidth: '68px',
            }}>{skill.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal');
    if (!els) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.10 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s cubic-bezier(.22,1,.36,1), transform 0.65s cubic-bezier(.22,1,.36,1); }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-delay-1 { transition-delay: 0.10s; }
        .reveal-delay-2 { transition-delay: 0.20s; }
        .reveal-delay-3 { transition-delay: 0.30s; }

        .stat-card { transition: transform 0.22s, border-color 0.22s; }
        .stat-card:hover { transform: translateY(-4px); border-color: rgba(99,217,180,0.30) !important; }

        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(99,217,180,0.50); }
          70%  { box-shadow: 0 0 0 8px rgba(99,217,180,0); }
          100% { box-shadow: 0 0 0 0 rgba(99,217,180,0); }
        }
        .pulse-dot { animation: pulse-ring 2.4s ease-out infinite; }

        @keyframes runnerScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .skill-runner {
          animation: runnerScroll 28s linear infinite;
        }
        .skill-runner:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .top-grid    { grid-template-columns: 1fr !important; gap: 32px !important; }
          .timeline-grid { grid-template-columns: 1fr 1fr !important; }
          .about-section { padding: 80px 24px !important; }
        }
      `}</style>

      <section
        id="about"
        ref={sectionRef}
        className="about-section"
        style={{
          minHeight: '100vh', padding: '120px 48px 100px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', background: '#050a14', overflow: 'hidden',
        }}
      >
        {/* Ambient glows */}
        <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,217,180,0.04) 0%, transparent 70%)', top: '-100px', right: '-150px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,144,217,0.04) 0%, transparent 70%)', bottom: '0px', left: '-100px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(99,217,180,0.15), transparent)' }} />

        <div style={{ maxWidth: '1060px', width: '100%', position: 'relative', zIndex: 1 }}>

          {/* ── Heading ── */}
          <div className="reveal" style={{ marginBottom: '48px' }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#63d9b4', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <span style={{ width: '28px', height: '1px', background: '#63d9b4', opacity: 0.6 }} />
              About Me
            </span>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#f0faf6', margin: 0, letterSpacing: '-0.025em', lineHeight: 1.05 }}>Who I Am</h2>
          </div>

          {/* ── Row 1: Bio (left) + Stats (right) ── */}
          <div className="top-grid reveal reveal-delay-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start', marginBottom: '48px' }}>
            {/* Bio */}
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 300, lineHeight: 1.9, color: 'rgba(180,220,210,0.65)', marginBottom: '16px', marginTop: 0 }}>
                I'm <strong style={{ color: '#f0faf6', fontWeight: 600 }}>Benive Ragodo</strong>, a junior web developer and Diploma of Information Technology student at Dumaguete Campus. Passionate about creating clean, functional, and user-friendly web experiences using modern JavaScript frameworks.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 300, lineHeight: 1.9, color: 'rgba(180,220,210,0.55)', margin: 0 }}>
                I enjoy solving real-world problems with code and continuously learning new technologies. My current focus is mastering React and Supabase for full-stack web development.
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {STATS.map(stat => (
                <div key={stat.label} className="stat-card" style={{ padding: '22px 16px', borderRadius: '14px', background: 'rgba(99,217,180,0.03)', border: '1px solid rgba(99,217,180,0.10)', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: 800, color: '#63d9b4', lineHeight: 1 }}>{stat.val}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(180,220,210,0.30)', marginTop: '8px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Divider ── */}
          <div style={{ height: '1px', background: 'rgba(99,217,180,0.08)', marginBottom: '40px' }} />

          {/* ── Row 2: Horizontal Timeline ── */}
          <div className="reveal reveal-delay-2" style={{ marginBottom: '48px' }}>
            <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(99,217,180,0.45)', marginBottom: '28px', fontFamily: "'DM Sans', sans-serif" }}>
              My Journey
            </div>

            <div className="timeline-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', position: 'relative' }}>
              {/* connecting line */}
              <div style={{ position: 'absolute', top: '9px', left: 'calc(12.5% + 10px)', right: 'calc(12.5% + 10px)', height: '1px', background: 'linear-gradient(to right, rgba(99,217,180,0.30), rgba(99,217,180,0.10))', zIndex: 0 }} />

              {TIMELINE.map((item, i) => {
                const isLast = i === TIMELINE.length - 1;
                return (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 12px', position: 'relative', zIndex: 1 }}>
                    {/* dot */}
                    <div className={isLast ? 'pulse-dot' : ''} style={{
                      width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0, marginBottom: '14px',
                      background: isLast ? '#63d9b4' : 'rgba(99,217,180,0.08)',
                      border: `2px solid ${isLast ? 'rgba(99,217,180,0.70)' : 'rgba(99,217,180,0.25)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {isLast && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#050a14' }} />}
                    </div>
                    <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#63d9b4', display: 'block', marginBottom: '6px', fontFamily: "'DM Sans', sans-serif" }}>{item.year}</span>
                    <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '13px', fontWeight: 700, color: '#f0faf6', display: 'block', marginBottom: '6px' }}>{item.title}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11.5px', fontWeight: 300, color: 'rgba(180,220,210,0.40)', lineHeight: 1.5 }}>{item.sub}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Divider ── */}
          <div style={{ height: '1px', background: 'rgba(99,217,180,0.08)', marginBottom: '28px' }} />

          {/* ── Row 3: Infinite Tech Runner ── */}
          <div className="reveal reveal-delay-3">
            <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(99,217,180,0.45)', marginBottom: '18px', fontFamily: "'DM Sans', sans-serif" }}>
              Technologies &amp; Tools
            </div>
            <SkillRunner />
          </div>

        </div>
      </section>
    </>
  );
}