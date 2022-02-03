import React from "react";

export const Dropdown = () => {
  return (
    <div class="z-50">
      <div>
        <label for="Theme">Choose a Theme:</label>

        <select name="cars" id="cars">
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
      </div>
    </div>
  );
};
