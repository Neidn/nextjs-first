import {PropsWithChildren} from "react";

import MainNavigation from "@/components/layout/MainNavigation";

import classes from "./Layout.module.css";

const Layout = ({children}: PropsWithChildren) => {
  return (
      <div>
        <MainNavigation/>
        <main className={classes.main}>{children}</main>
      </div>
  );
}

export default Layout;
