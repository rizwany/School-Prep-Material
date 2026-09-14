'use strict';
// The silhouette and colored object share one outline so every match is exact.
const SILHOUETTE_OBJECTS = [
  { name: 'Diary', shape: '<rect x="25" y="14" width="53" height="73" rx="7"/><path d="M19 22h15v7H19zm0 17h15v7H19zm0 17h15v7H19zm0 17h15v7H19z"/>', detail: '<path d="M65 14h6v73h-6z"/><path d="M41 45q8-12 16 0 8-12 16 0 0 10-16 20-16-10-16-20z"/>' },
  { name: 'Trophy', shape: '<path d="M28 15h44v8h15v17q0 19-23 21L57 72v8h15v9H28v-9h15v-8l-7-11Q13 59 13 40V23h15zm-8 15v10q0 11 13 13l-5-23zm52 0-5 23q13-2 13-13V30z" fill-rule="evenodd"/>', detail: '<path d="m50 25 5 10 11 2-8 8 2 11-10-5-10 5 2-11-8-8 11-2zM28 80h44v9H28z"/>' },
  { name: 'Backpack', shape: '<path d="M35 22v-6a15 15 0 0 1 30 0v6q15 5 15 23v42H20V45q0-18 15-23zm8-2h14v-4a7 7 0 0 0-14 0z" fill-rule="evenodd"/>', detail: '<rect x="29" y="53" width="42" height="25" rx="5"/><path d="M30 37h40v6H30z"/>' },
  { name: 'Cap', shape: '<path d="M21 56q0-36 32-36t32 36v10H52Q30 91 9 73L4 65z"/>', detail: '<path d="M21 56h64v10H52Q30 91 9 73L4 65zM50 20h7v36h-7z"/>' },
  { name: 'Game controller', shape: '<path d="M25 30h50q11 0 15 14l8 32q4 22-14 15L65 76H35L16 91Q-2 98 2 76l8-32q4-14 15-14z"/>', detail: '<path d="M23 42h8v10h10v8H31v10h-8V60H13v-8h10z"/><circle cx="72" cy="49" r="5"/><circle cx="83" cy="60" r="5"/><circle cx="61" cy="60" r="5"/><circle cx="72" cy="71" r="5"/>' },
  { name: 'Boxing glove', shape: '<path d="M31 66Q17 54 19 36q2-23 30-23 31 0 31 28 0 17-14 28v20H31z"/>', detail: '<rect x="31" y="69" width="35" height="20" rx="3"/><path d="M22 44q17 0 17 19h-8Q17 54 19 36z"/>' },
  { name: 'Fork and knife', shape: '<path d="M18 12h6v24h5V12h6v24h5V12h6v29q0 11-10 13v36H26V54q-8-3-8-13zM68 12q15 0 15 28v50H72V54H59V35q0-23 9-23z"/>', detail: '<path d="M26 73h10v17H26zm46 0h11v17H72z"/>' },
  { name: 'Hammer', shape: '<path d="m11 14 7-7 24 14 7-7q20 0 37 22L74 39q-7-12-16-11l-8 9 39 45-11 10-39-45-9 10-8-8 8-10L8 26z"/>', detail: '<path d="m40 47 10-10 39 45-11 10z"/>' },
  { name: 'Wristwatch', shape: '<path d="M37 5h26v20q15 8 15 25T63 75v20H37V75Q22 67 22 50t15-25z"/>', detail: '<circle cx="50" cy="50" r="21"/>', accent: '<path d="M47 34h6v15l12 7-3 5-15-9z"/>' },
  { name: 'Camera', shape: '<path d="M12 29h17l7-12h28l7 12h17v54H12z"/>', detail: '<circle cx="50" cy="56" r="21"/><rect x="73" y="36" width="9" height="7" rx="2"/>', accent: '<circle cx="50" cy="56" r="12"/>' },
  { name: 'Basketball', shape: '<circle cx="50" cy="50" r="36"/>', detail: '<path d="M15 47h70v6H15zM47 15h6v70h-6zM21 28q47 10 52 44l-6 4Q62 44 18 34zM27 21q-2 46 45 52l4-6Q34 61 33 18z"/>' },
  { name: 'Umbrella', shape: '<path d="M47 9h6v8q33 4 37 38H53v26q0 15-14 15T25 82h8q0 6 6 6t6-7V55H10q4-34 37-38z"/>', detail: '<path d="M47 17q-15 17-17 38h20V17zM45 55h8v26q0 15-14 15T25 82h8q0 6 6 6t6-7z"/>' },
  { name: 'Headphones', shape: '<path d="M14 46V38q0-34 36-34t36 34v8h8v39H72V43h6v-5q0-26-28-26T22 38v5h6v42H6V46z"/>', detail: '<path d="M6 46h14v39H6zm74 0h14v39H80z"/>' },
  { name: 'Watering can', shape: '<path d="M28 38h12v-9h25v9h7v21l15-21 10 9-25 35H28V71Q4 72 4 51t24-21zm0 0Q12 29 12 51t16 12z" fill-rule="evenodd"/>', detail: '<path d="M28 60h44v22H28zM86 39l11 8-5 8-11-8z"/>' },
  { name: 'Ice cream', shape: '<path d="M26 52q-16-5-11-18 2-8 12-10 0-20 23-20t23 20q10 2 12 10 5 13-11 18L50 96z"/>', detail: '<path d="M26 52h48L50 96z"/>', accent: '<path d="m34 60 27 14-3 5-21-12zm-1 15 33-17 3 5-31 16z"/>' },
  { name: 'Sailboat', shape: '<path d="M46 6h7v61h35L76 86H24L10 67h36zM39 13v46H10zm21 9 29 37H60z"/>', detail: '<path d="M10 67h78L76 86H24zM60 22l29 37H60z"/>' },
  { name: 'Light bulb', shape: '<path d="M37 69Q19 59 19 36a31 31 0 0 1 62 0q0 23-18 33v18H37zm6 21h14v7H43z"/>', detail: '<path d="M37 69h26v18H37zM45 41h10v28H45z"/>' },
  { name: 'Key', shape: '<path d="M38 8a25 25 0 1 1-12 47L6 77v16h16V81h12V69l10-12A25 25 0 0 1 38 8zm0 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" fill-rule="evenodd"/>', detail: '<path d="M7 77h15v16H7z"/>' },
  { name: 'Chair', shape: '<path d="M22 10h55v42h10v10H76v29H66V62H34v29H24V62H13V52h9z"/>', detail: '<path d="M22 43h55v9H22zM13 52h74v10H13z"/>' },
  { name: 'Bottle', shape: '<path d="M39 5h22v22q0 7 12 17v48H27V44q12-10 12-17z"/>', detail: '<path d="M27 51h46v25H27zM39 5h22v9H39z"/>' },
  { name: 'Cup', shape: '<path d="M15 21h49v7h24v29q0 17-24 17H21zm49 16v27q14 0 14-9V37zM10 82h65v7H10z" fill-rule="evenodd"/>', detail: '<path d="M19 57h47l-2 17H21z"/>' },
  { name: 'Car', shape: '<path d="M12 42h8l8-22h44l8 22h8v35H77v13H63V77H37v13H23V77H12z"/>', detail: '<path d="m33 27-5 18h44l-5-18z"/><circle cx="26" cy="60" r="7"/><circle cx="74" cy="60" r="7"/>' },
  { name: 'Bus', shape: '<path d="M15 12h70v72H73v10H59V84H41v10H27V84H15z"/>', detail: '<rect x="24" y="23" width="52" height="34" rx="3"/><circle cx="28" cy="72" r="5"/><circle cx="72" cy="72" r="5"/>', accent: '<path d="M48 23h4v34h-4z"/>' },
  { name: 'Airplane', shape: '<path d="M44 7q6-9 12 0v27l36 23v10L56 55v21l14 11v7L50 88l-20 6v-7l14-11V55L8 67V57l36-23z"/>', detail: '<path d="M44 7q6-9 12 0v12H44zM44 76h12l14 11v7L50 88l-20 6v-7z"/>' },
  { name: 'Crown', shape: '<path d="m10 22 24 18L50 8l16 32 24-18-9 62H19z"/>', detail: '<path d="M18 72h64l-1 12H19z"/><circle cx="50" cy="57" r="7"/>' },
  { name: 'Pencil', shape: '<path d="M38 6h24v65L50 96 38 71z"/>', detail: '<path d="M38 6h24v14H38zM38 71h24L50 96z"/>', accent: '<path d="m45 86 5 10 5-10zM47 20h6v51h-6z"/>' },
  { name: 'Scissors', shape: '<path d="M19 9h10l21 36L71 9h10L58 56l8 12a16 16 0 1 1-15 16L50 66l-1 18a16 16 0 1 1-15-16l8-12zM33 77a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm34 0a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" fill-rule="evenodd"/>', detail: '<circle cx="50" cy="55" r="5"/>' },
  { name: 'Bell', shape: '<path d="M44 10h12v10q21 3 21 25v19l13 13v8H10v-8l13-13V45q0-22 21-25zm-6 79h24q0 10-12 10T38 89z"/>', detail: '<path d="M10 77h80v8H10z"/>' },
  { name: 'Magnet', shape: '<path d="M12 12h22v46a16 16 0 0 0 32 0V12h22v46a38 38 0 0 1-76 0z"/>', detail: '<path d="M12 12h22v20H12zm54 0h22v20H66z"/>' },
  { name: 'Shirt', shape: '<path d="M34 12q16 16 32 0l27 19-13 23-12-8v42H32V46l-12 8L7 31z"/>', detail: '<path d="M32 79h36v9H32zM34 12q16 16 32 0l-6 8H40z"/>' },
  { name: 'Shoe', shape: '<path d="M13 35h23l14 20 31 8q14 3 14 16v10H9V54z"/>', detail: '<path d="M9 79h86v10H9zM35 45l5-4 14 15-5 4zM48 55l2-6 15 5-2 6z"/>' },
  { name: 'Gift', shape: '<path d="M44 24Q18 26 21 11q3-17 29 4 26-21 29-4 3 15-23 13h34v21h-5v47H15V45h-5V24zm-3-7Q26 3 28 13t13 4zm18 0q15 0 13-4t-13 4z" fill-rule="evenodd"/>', detail: '<path d="M44 24h12v68H44zM10 37h80v8H10z"/>' },
  { name: 'Envelope', shape: '<path d="M7 20h86v62H7z"/>', detail: '<path d="m7 20 43 32 43-32v9L50 61 7 29zM7 82l31-31 6 5-25 26zm86 0L62 51l-6 5 25 26z"/>' },
  { name: 'Telephone', shape: '<path d="M19 7q10-7 17 3l10 16q6 8-4 14l-7 4q8 15 21 22l5-7q6-9 14-3l15 10q10 7 3 17l-5 8Q65 106 32 73-1 40 12 18z"/>', detail: '<path d="m19 7 17 3 10 16-15 8L12 18zM61 59l14-3 15 10 3 17-15-2z"/>' },
  { name: 'Guitar', shape: '<path d="M44 5h14v9h-3v31q14-1 16 13-2 7 6 16 10 20-19 23-30 1-30-20 0-11 10-18 2-15 12-14V14h-6z"/>', detail: '<circle cx="51" cy="70" r="9"/><path d="M42 86h20v5H42z"/>', accent: '<path d="M49 12h3v75h-3z"/>' },
  { name: 'Diamond', shape: '<path d="m25 15 50 0 21 26-46 52L4 41z"/>', detail: '<path d="m25 15 10 26h30l10-26-21 26L50 93 35 41 4 41z"/>' },
  { name: 'Rocket', shape: '<path d="M50 3q24 21 24 50l18 20v17L66 75H34L8 90V73l18-20Q26 24 50 3zM37 81h26L50 99z"/>', detail: '<circle cx="50" cy="37" r="12"/><path d="M34 66h32v9H34zM37 81h26L50 99z"/>' },
  { name: 'Leaf', shape: '<path d="M88 7Q16 4 15 62q0 13 10 19L9 93l6 6 17-16Q87 97 88 7z"/>', detail: '<path d="m77 22-6-2-48 59 5 5zM37 62l-3-25-5 2 3 27zm15-15 21-2-1-5-16 1z"/>' },
  { name: 'Shovel', shape: '<path d="M32 5h36v21l-12 10v27h20v16L50 97 24 79V63h20V36L32 26zm8 7v10l10 8 10-8V12z" fill-rule="evenodd"/>', detail: '<path d="M44 36h12v27H44zM24 63h52v9H24z"/>' },
  { name: 'Teapot', shape: '<path d="M35 19h14v9h17v8q27-3 27 19T71 76q-10 17-33 8L23 71 7 32h17l14 16V32h-3zm39 25v23q12-2 12-12t-12-11z" fill-rule="evenodd"/>', detail: '<path d="M35 28h31v8H35zM32 66h43q-5 29-37 18z"/>' }
];
const SVG_NS = 'http://www.w3.org/2000/svg';
let silhouetteArtId = 0;
function createSilhouetteArt(object, color = '#159cbe', angle = 0, silhouette = false) {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox','0 0 100 100');
  svg.setAttribute('aria-hidden','true');
  svg.classList.add('silhouette-art');
  svg.style.color = silhouette ? '#fff' : color;
  svg.style.setProperty('--detail-color', silhouette ? '#fff' : '#ffffff70');
  svg.style.transform = `rotate(${angle}deg)`;
  const clipId = `silhouette-clip-${silhouetteArtId++}`;
  svg.innerHTML = `<g fill="currentColor">${object.shape}</g>${silhouette ? '' : `<defs><clipPath id="${clipId}" clip-rule="evenodd">${object.shape}</clipPath></defs><g clip-path="url(#${clipId})"><g fill="var(--detail-color)">${object.detail || ''}</g><g fill="currentColor">${object.accent || ''}</g></g>`}`;
  return svg;
}
