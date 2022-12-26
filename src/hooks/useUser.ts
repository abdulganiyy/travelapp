import { useSelector } from "react-redux";

function useUser() {
  const user = useSelector<any>((state) => state.user);

  return user;
}
