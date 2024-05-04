import Logo from "@/components/Logo";
import React, { ReactNode } from "react";

/**
 * Renders a layout component with a full-screen container and centered content.
 *
 * @param {Object} props - The properties object.
 * @param {ReactNode} props.children - The content to be rendered inside the layout.
 * @return {JSX.Element} The layout component.
 */
function layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      <Logo />
      <div className="mt-12">{children}</div>
    </div>
  );
}

export default layout;
