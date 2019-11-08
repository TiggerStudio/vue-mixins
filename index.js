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
		},
		fillGradient(ctx, from, to) {
			let gradient = ctx.createLinearGradient(0, 0, 0, 170);
			gradient.addColorStop(0, from);
			gradient.addColorStop(1, to);
			ctx.fillStyle = gradient;
			return ctx;
		}
	}
};

export const Numbers = {
	methods: {
		Random(min, max) {
			return Math.floor(Math.random() * (+max - +min)) + +min;
		},
		isOdd(num) {
			return num % 2;
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

export const Color = {
	methods: {
		hexToRgb(hex) {
			var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
			return result
				? {
						r: parseInt(result[1], 16),
						g: parseInt(result[2], 16),
						b: parseInt(result[3], 16)
				  }
				: null;
		}
	}
};
