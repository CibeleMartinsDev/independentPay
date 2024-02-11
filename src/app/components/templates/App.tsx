import Header from "../atoms/header/Header";

export default function AppTemplate({children}){
    return (
        <><Header /><main className="px-28">{children}</main></>
    )
}