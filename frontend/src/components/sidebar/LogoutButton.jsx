import { TbLogout2 } from "react-icons/tb";
import useLogout from "../../../hooks/useLogout";

function LogoutButton() {
  const { loading, logout } = useLogout();

  return (
    <div className='mt-auto'>
      {!loading ? (
        <TbLogout2
          className='h-8 w-8 text-slate-300 hover:text-slate-200 transition cursor-pointer'
          onClick={logout}
        />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  );
}

export default LogoutButton;
