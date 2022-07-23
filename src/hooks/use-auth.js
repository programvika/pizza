import { useSelector } from "react-redux";

export function useAuth() {
    const currentUser = useSelector((state) => state.user.currentUser);
    console.log(currentUser)

    
      return {
        isAuth: !!currentUser,
      };
    
}