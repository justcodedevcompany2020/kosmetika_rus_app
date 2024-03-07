import { Circle, Defs, LinearGradient, Stop, Svg } from "react-native-svg"

export const Radio = ({ type }) => {
    if (type) {
        return <Svg
            width={18}
            height={18}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Circle cx={8} cy={8} r={7.5} stroke="#373737" />
        </Svg>
    }
    return <Svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Circle cx={9} cy={9} r={9} fill="url(#paint0_linear_236_11766)" />
        <Defs>
            <LinearGradient
                id="paint0_linear_236_11766"
                x1={-13.9498}
                y1={-9.77143}
                x2={21.9699}
                y2={26.3547}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#9AC6AD" />
                <Stop offset={1} stopColor="#C2ECD4" />
            </LinearGradient>
        </Defs>
    </Svg>
}