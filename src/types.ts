import React from "react";

export interface IValidityInformerProps {
  children: React.ReactElement<HTMLInputElement>;

  errorText?: string;
}
