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

	const createRipple = (e: PointerEvent) => {
		addClassIfMissing();

		const rect = el.getBoundingClientRect();
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
			const timeOutDuration = options?.duration ? options.duration * 1000 : 1000;

			if (ripple !== null) {


				ripple.style.opacity = "0";

				setTimeout(
					() => {
						ripple.remove();
					},
					timeOutDuration
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
		update: (newOptions: RippleOptions) => {
			options = newOptions;

			el.style.setProperty("--ripple-color", `radial-gradient(${el.clientHeight * 1.2}px at 50%, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 22.37%, rgba(255, 255, 255, 0.25) 63.47%, rgba(255, 255, 255, 0.00) 120%);`);
			el.style.setProperty("--ripple-duration", el.clientWidth * 2 + "s");
		},
	};
}

export { ripple };