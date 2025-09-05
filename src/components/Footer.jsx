import { Twitter } from "lucide";
import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between p-10 text-white border-t-2">
        <h3 className="text-2xl font-bold">React Store</h3>
        <div className="flex gap-10">
          <ul className="flex gap-10">
            <li className="font-semi-bold">
              <NavLink>Twitter</NavLink>
            </li>
            <li className="font-semi-bold">
              <NavLink>LinkedIn</NavLink>
            </li>
            <li className="font-semi-bold">
              <NavLink>Instagram</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
