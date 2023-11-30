import React from "react";
import { render } from "@testing-library/react-native";
import Poem from "../app/poem";

test("renders Poem component", () => {
  const { getByText } = render(<Poem />);
  const poemText = getByText("Poem");
  expect(poemText).toBeTruthy();
});
