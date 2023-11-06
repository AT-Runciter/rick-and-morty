"use client";

import { Grid } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="pt-[300px] flex justify-center">
      <Grid color="#87F54E" />
    </div>
  );
}
