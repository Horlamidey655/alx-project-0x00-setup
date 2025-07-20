import React from "react";

const Button = ({ title, style }: { title: string; style: string }) => {
  return <button className={style}>{title}</button>;
};

export default Button;
