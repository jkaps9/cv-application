import { useState } from "react";
import Input from "./Input";
import "../styles/FormSection.css";

export default function FormSection({ sectionTitle }) {
  return (
    <>
      <h2>{sectionTitle}</h2>
      <Input label="First Name" value={""} />
      <Input label="Last Name" value={""} />
      <Input label="E-mail" value={""} />
      <Input label="Phone" value={""} />
    </>
  );
}
