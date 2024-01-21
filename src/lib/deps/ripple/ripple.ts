import type { RippleOptions } from "./constants.js";
import {
	INEVENTS,
	OUTEVENTS,
	ATTR_NAME,
	ATTR_CENTER_NAME,
	addEvent,
	removeEvent,
	findFurthestPoint,
} from "./constants";
import { onMount } from "svelte";

function ripple(el: HTMLElement, options?: RippleOptions) {
	const addClassIfMissing = () => {
		if (!el.getAttribute(ATTR_NAME)) {
			el.setAttribute(ATTR_NAME, "");
		}

		if (options?.center) {
			el.setAttribute(ATTR_CENTER_NAME, "");
		} else {
			el.removeAttribute(ATTR_CENTER_NAME);
		}
	};

	
	onMount(() => {
		addClassIfMissing();
	})
	// should be the time it takes for the circle to fill up the rectangle at a constant speed but holy fuck
	// pwease do this >w<
	function timeToFillRectangle(x: number, y: number, a: number, b: number, z: number) {
		// calculate the distances from the center of the circle to the corners of the rectangle
		let d1 = Math.sqrt((x - 0) ** 2 + (y - 0) ** 2);
		let d2 = Math.sqrt((x - 0) ** 2 + (y - b) ** 2);
		let d3 = Math.sqrt((x - a) ** 2 + (y - 0) ** 2);
		let d4 = Math.sqrt((x - a) ** 2 + (y - b) ** 2);
	  
		// find the maximum distance as the radius of the circle
		let r = Math.max(d1, d2, d3, d4);
	  
		// divide the radius by the velocity to get the time
		let t = r / z;
	  
		// return the time
		return t;
	}
	let duration: number;
	const createRipple = (e: PointerEvent) => {
		addClassIfMissing();
		const rect = el.getBoundingClientRect();
		const speed = 2 * rect.width;
		duration = timeToFillRectangle(e.clientX - rect.left, e.clientY - rect.top, rect.width, rect.height, speed)
		el.style.setProperty("--ripple-duration", duration + "s");
		el.style.setProperty("--odur", duration + "s")
		console.log("duration " + duration)
		const radius = findFurthestPoint(
			e.clientX,
			el.offsetWidth,
			rect.left,
			e.clientY,
			el.offsetHeight,
			rect.top
			);
			
			const ripple = document.createElement("div");
			ripple.classList.add("ripple");
			
			let size = radius * 2;
			let top = e.clientY - rect.top - radius;
			let left = e.clientX - rect.left - radius;
			
			ripple.style.left = left + "px";
			ripple.style.top = top + "px";
			
		ripple.style.width = ripple.style.height = size + "px";

		el.appendChild(ripple);

		const removeRipple = () => { 

			if (ripple !== null) {

				ripple.style.opacity = "0"
				setTimeout(
					() => {
						console.log("gone")
						ripple.remove();
					},
					duration * 1000
				);
			}
		};

		OUTEVENTS.forEach((event) => {
			addEvent(el, event, removeRipple);
		});
	};

	INEVENTS.forEach((event) => {
		addEvent(el, event, createRipple);
	});

	return {
		destroy: () => {
			INEVENTS.forEach((event) => {
				removeEvent(el, event, createRipple);
			});
		},
		update: () => {
			// i do sure love twearking existing library xd
			el.style.setProperty("--ripple-color", `radial-gradient(${el.clientHeight * 1.2}px at 50%, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 22.37%, rgba(255, 255, 255, 0.25) 63.47%, rgba(255, 255, 255, 0.00) 120%);`);
			el.style.setProperty("--ripple-duration", duration + "s");
			console.log(el.clientWidth * el.clientHeight / 10)
		},
	};
}

export { ripple };