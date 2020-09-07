import React, { useState } from "react";

const Input: React.FC = () => {
  const [formValue, setFormValue] = useState("");

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
