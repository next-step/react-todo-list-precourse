export const chooseRandomTiming = () => {
    const timings = [easeInOutSine, easeInOutCirc, easeInBounce, easeOutBounce];
    return timings[Math.floor(Math.random() * timings.length)];
}

export const animate = ({ timing, draw, duration }) => {
    const start = performance.now();
    const animationFrame = (time) => {
        let timeFraction = (time - start) / duration;
        const progress = timing(timeFraction)
        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animationFrame);
        }
    }
    requestAnimationFrame(animationFrame);
};

const easeInOutSine = (x) => {
    return -(Math.cos(Math.PI * x) - 1) / 2;
};

const easeInOutCirc = (x) => {
    return x < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
}

const easeOutBounce = (x) => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (x < 1 / d1) {
        return n1 * x * x;
    } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
};

const easeInBounce = (x) => {
    return 1 - easeOutBounce(1 - x);
};