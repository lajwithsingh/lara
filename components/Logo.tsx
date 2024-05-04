import { Snail } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <Snail className="stroke h-9 w-9 stroke-amber-500 stroke[1.25]" />
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">Lara</p>
    </a>
  );
}

export default Logo;
