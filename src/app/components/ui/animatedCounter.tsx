import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

type AnimatedCounterProps = {
    end: number;
    duration?: number;
    delay?: number;
    suffix?: string;
};

const AnimatedCounter = ({ end, duration = 1, delay = 0.2, suffix = "%" }: AnimatedCounterProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (isInView) setStart(true);
    }, [isInView]);

    return (
        <span ref={ref}>
            {start ? <CountUp end={end} duration={duration} delay={delay} suffix={suffix} /> : `0${suffix}`}
        </span>
    );
};

export default AnimatedCounter;