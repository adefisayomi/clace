import Logo from "~/components/Logo";
import Cart from "../cart";




export default function Header () {

    return (
        <div className="py-4 bg-background px-2 sticky top-0 left-0 flex justify-between items-center">
            <Logo />

            <Cart />
        </div>
    )
}