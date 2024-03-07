import {Header} from "../header"
import {Head} from "../head"

export const Layouts = ({ children }) => {
  return (
    <>
    <Header/>
      <main>{children}</main>
    </>
  );
};