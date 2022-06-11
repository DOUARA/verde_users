
import { Logo } from "../../elements";

function Header() {
    return (
        <div className="flex w-screen items-center mx-auto p-4 border-b border-gray-200">
            <Logo/>
            <span className="text-sm font-medium pl-8 text-gray-500 pt-1">Users</span>
        </div>
    );
  }
  
  export default Header;
  