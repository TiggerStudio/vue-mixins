export const Touch = {
	methods: {
		isTouchDevice() {
			return (
				"ontouchstart" in window ||
				navigator.MaxTouchPoints > 0 ||
				navigator.msMaxTouchPoints > 0
			);
		}
	}
};
export const Arrays = {
	methods: {
		shuffle(a) {
			for (let i = a.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[a[i], a[j]] = [a[j], a[i]];
			}
			return a;
		}
	}
};
export const Tiles = {
	methods: {
		roundRect(ctx, x, y, width, height, radius = 8) {
			ctx.beginPath();
			ctx.moveTo(x + radius, y);
			ctx.lineTo(x + width - radius, y);
			ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
			ctx.lineTo(x + width, y + height - radius);
			ctx.quadraticCurveTo(
				x + width,
				y + height,
				x + width - radius,
				y + height
			);
			ctx.lineTo(x + radius, y + height);
			ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
			ctx.lineTo(x, y + radius);
			ctx.quadraticCurveTo(x, y, x + radius, y);
			ctx.closePath();
			return ctx;
		}
	}
};

export const Numbers = {
	methods: {
		Random(min, max) {
			return Math.floor(Math.random() * (+max - +min)) + +min;
		}
	}
};

export const Animation = {
	data: () => ({
		requestAnimationFrame: null,
		cancelAnimationFrame: null
	}),
	mounted() {
		this.requestAnimationFrame =
			window.requestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.msRequestAnimationFrame;
		this.cancelAnimationFrame =
			window.cancelAnimationFrame || window.mozCancelAnimationFrame;
	}
};
