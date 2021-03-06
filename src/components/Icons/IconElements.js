import React from 'react'
export default function IconElements (props) {
	if(props.color){
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 305 305"><title>elementcalc-icon-color</title><g fill="none" fillRule="evenodd"><g><rect width="147" height="147" fill="#ACD6FA"/><rect width="147" height="147" x="158" y="158" fill="#FDCE8F"/><rect width="147" height="147" y="158" fill="#F6F181"/></g><g fill="#000" fillOpacity=".3"><path d="M48.6 44.6v58h12.7v-25h23.5v25h12.7v-58H84.8v22.2H61.3V44.6H48.6zM43.6 202.6v58h41v-10.8H56.2v-47.2H43.6zm58.7 9.5v-9.4H90.8v9.5h11.5zm-11.5 6.6v42h11.5v-42H90.8zM197.3 226v-13.5h12c1 0 2.2 0 3.2.3 1 .2 2 .5 2.8 1 .8.5 1.5 1.2 2 2 .5 1 .7 2 .7 3.3 0 2.6-.7 4.3-2.2 5.4-1.4 1-3.3 1.6-5.6 1.6h-13zm-12.7-23.4v58h28c2.6 0 5.2-.4 7.6-1 2.5-.7 4.7-1.7 6.6-3 2-1.4 3.4-3.2 4.6-5.3 1-2 1.7-4.7 1.7-7.6 0-3.6-.8-6.7-2.5-9.3-1.8-2.5-4.5-4.3-8-5.4 2.6-1.2 4.5-2.8 5.8-4.7 1.4-2 2-4.4 2-7.3 0-2.7-.4-5-1.3-7-1-1.7-2.2-3.2-3.8-4.3-1.6-1-3.5-2-5.8-2.4-2.3-.5-4.8-.7-7.6-.7h-27.2zm12.7 48v-16h14c2.6 0 5 .7 6.5 2 1.7 1.3 2.6 3.4 2.6 6.4 0 1.5-.3 2.7-.8 3.7s-1.2 1.8-2 2.3c-1 .6-2 1-3 1.2-1.2.3-2.4.4-3.7.4h-13.7zm71.4-15.6H250c0-.8.2-1.7.5-2.7.3-1 .8-2 1.5-3 .8-1 1.7-1.6 3-2.2 1.2-.6 2.7-1 4.5-1 2.8 0 5 1 6.3 2.4 1.4 1.5 2.3 3.7 3 6.6zm-18.7 7.3h30.2c.2-3.2 0-6.3-.8-9.3-.8-3-2-5.6-3.7-8-1.7-2.3-4-4-6.5-5.5-2.7-1.4-5.8-2-9.4-2-3 0-6 .5-8.7 1.6-2.5 1.3-4.8 2.8-6.6 4.8-2 2-3.4 4.3-4.4 7-1 2.7-1.6 5.6-1.6 8.8 0 3.2.5 6.2 1.5 9 1 2.6 2.4 5 4.2 7 1.8 1.8 4 3.3 6.7 4.4 2.6 1 5.5 1.6 8.8 1.6 4.8 0 9-1 12.2-3.3 3.4-2.2 5.8-5.7 7.5-10.8h-10.2c-.3 1.3-1.4 2.6-3 3.7-1.7 1.2-3.7 1.8-6 1.8-3.3 0-5.8-1-7.5-2.6-1.7-1.6-2.7-4.3-2.8-8z"/></g></g></svg>
		)
	}
	else {
		return (
			<svg viewBox="0 0 305 305" xmlns="http://www.w3.org/2000/svg">
				<title>elementcalc-icon</title>
				<g fill="none" fillRule="evenodd">
					<g className="project-icon-svg" fill="#6F73D2" fillOpacity=".7">
						<path d="M0 0h147v147H0zM158 158h147v147H158zM0 158h147v147H0z"/>
					</g>
					<g fill="#FFF">
						<path d="M48.6 44.6v57.9h12.73V77.52h23.43v24.98H97.5V44.6H84.75v22.22H61.33V44.6H48.6zM43.6 202.6v57.9h40.95v-10.7H56.33v-47.2H43.6zm58.7 9.5v-9.5H90.8v9.5h11.5zm-11.5 6.48v41.92h11.5v-41.92H90.8zM197.33 226.04V212.5h11.92c1.13 0 2.23.1 3.28.28 1.05.2 2 .53 2.8 1 .8.5 1.46 1.17 1.94 2.04.5.86.73 1.97.73 3.32 0 2.44-.73 4.2-2.2 5.28-1.45 1.08-3.3 1.62-5.58 1.62h-12.9zM184.6 202.6v57.9h28.05c2.6 0 5.12-.32 7.58-.97 2.46-.65 4.65-1.65 6.57-3s3.45-3.1 4.58-5.23c1.14-2.14 1.7-4.67 1.7-7.6 0-3.6-.87-6.7-2.63-9.27-1.76-2.57-4.42-4.37-8-5.4 2.6-1.24 4.57-2.83 5.9-4.78 1.32-1.94 1.98-4.38 1.98-7.3 0-2.7-.45-4.97-1.34-6.8-.9-1.84-2.16-3.32-3.78-4.43-1.62-1.1-3.57-1.9-5.84-2.4-2.27-.47-4.78-.72-7.54-.72H184.6zm12.73 48v-15.9h13.86c2.75 0 4.97.65 6.64 1.92 1.68 1.27 2.52 3.4 2.52 6.36 0 1.52-.26 2.76-.77 3.73-.53 1-1.22 1.76-2.08 2.33-.87.56-1.87.97-3 1.2-1.14.26-2.33.38-3.57.38h-13.62zm71.35-15.56h-18.73c.06-.8.23-1.73.53-2.76.3-1.03.8-2 1.54-2.92.73-.92 1.7-1.7 2.92-2.3 1.22-.63 2.74-.94 4.58-.94 2.8 0 4.9.76 6.3 2.27 1.36 1.5 2.32 3.72 2.86 6.64zm-18.73 7.3h30.25c.22-3.25-.05-6.36-.8-9.33-.77-2.96-2-5.6-3.7-7.94-1.7-2.32-3.88-4.17-6.53-5.55-2.65-1.37-5.76-2.06-9.32-2.06-3.2 0-6.1.57-8.72 1.7-2.62 1.14-4.88 2.7-6.77 4.67-1.9 1.98-3.35 4.32-4.38 7.02-1.03 2.7-1.54 5.62-1.54 8.76 0 3.24.5 6.22 1.5 8.92s2.42 5.03 4.26 6.97c1.83 1.95 4.08 3.45 6.73 4.5 2.64 1.06 5.62 1.58 8.92 1.58 4.75 0 8.8-1.08 12.16-3.24 3.36-2.15 5.85-5.75 7.47-10.77h-10.14c-.38 1.3-1.4 2.52-3.08 3.7-1.67 1.15-3.67 1.73-6 1.73-3.24 0-5.73-.84-7.46-2.52-1.74-1.67-2.68-4.37-2.85-8.1z"/>
					</g>
				</g>
			</svg>
		)
	}
}