import { Path, Svg } from "react-native-svg"

export const EmptyStar2 = () => {
    return <Svg
        width={14}
        height={14}
        style={{ marginHorizontal: 2 }}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            opacity={0.15}
            d="M18.317 9.79l-2.611-8.534c-.516-1.675-2.896-1.675-3.394 0L9.682 9.79H1.777c-1.723 0-2.434 2.204-1.03 3.191l6.467 4.584-2.54 8.128c-.516 1.64 1.403 2.961 2.77 1.921L14 22.677l6.556 4.954c1.368 1.04 3.287-.282 2.772-1.922l-2.54-8.127 6.466-4.584c1.404-1.005.693-3.191-1.03-3.191h-7.907v-.018z"
            fill="#373737"
        />
    </Svg>
}