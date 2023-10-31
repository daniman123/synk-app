import { Button } from "@/components/Layouts/sidebar/components/ActionButtons";
import React from "react";

const SmallBPSessionAuth = () => {
  return (
    <div
      id="session"
      className="max-sm:grid max-sm:px-2
						md:hidden"
    >
      <Button name="Sign Up" />
      <Button name="Log In" />
    </div>
  );
};

export default SmallBPSessionAuth;
