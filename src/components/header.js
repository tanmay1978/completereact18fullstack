
const Header = () => {
    const getTodayDate = () => {
        const date = new Date();
        return date.getDate() + "/ " + date.getMonth() + "/ " + date.getFullYear();
    }

    return (
        <>
            <h1>The date today is {getTodayDate()}</h1>
        </>
    )
}

export default Header;