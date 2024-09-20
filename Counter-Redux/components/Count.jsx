import { useSelector } from "react-redux"

const Count = () => {
    const count = useSelector(state => state.count)
    return (
        <div>
            {count}
        </div>
    )
}

export default Count
