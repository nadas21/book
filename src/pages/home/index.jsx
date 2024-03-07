import { Card } from "../../components/card";
import { Head } from "../../components/head";



export const Home = ({ children }) => {
  return (
    <>
    <Card/>
      <main>{children}</main>
    </>
  );
};