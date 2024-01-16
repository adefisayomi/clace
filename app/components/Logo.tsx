import { Link } from "@remix-run/react"


export default function Logo () {

    return (
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            <Link to='/'>
                Clace
            </Link>
        </h1>
    )
}
