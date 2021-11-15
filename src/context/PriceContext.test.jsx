import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen, renderHook } from "@testing-library/react";
import { PriceProvider } from "./PriceContext";
import ResultTable from "../components/resultTable/ResultTable.component";
import Colors from "../components/color/colors.component";
import Powers from "../components/power/Powers.component";
import WarpDrive from "../components/warpDrive/WarpDrive.component";
import OptionsPackage from "../components/optionPackage/OptionPackage.component";

describe("PriceProvider", () => {
  it.todo("prices are 0 by default; controls if price is added");
  const defaultPrice = 0;
  describe("addColorPrice", () => {
    it("Color price by default", () => {
      render(
        <PriceProvider value={defaultPrice}>
          <ResultTable />
        </PriceProvider>
      );
      expect(
        screen.getByText((content, node) => {
          //In order to make <li><p>Color:</p><span>+{colorPrice}€</span></li> one string:
          const hasText = (node) =>
            node.textContent === `Color:+${defaultPrice}€`;
          const nodeHasText = hasText(node);
          const childrenDontHaveText = Array.from(node.children).every(
            (child) => !hasText(child)
          );
          return nodeHasText && childrenDontHaveText;
          //source of code: https://stackoverflow.com/questions/55509875/ (12.11.21)
        })
      ).toBeTruthy();
    });
    it("Color price after added +100€", () => {
      const price = 100;
      render(
        <PriceProvider value={price}>
          <Colors />
          <ResultTable />
        </PriceProvider>
      );
      const buttonElement = screen.getByText("Sky");
      userEvent.click(buttonElement);
      expect(
        screen.getByText((content, node) => {
          const hasText = (node) => node.textContent === `Color:+${price}€`;
          const nodeHasText = hasText(node);
          const childrenDontHaveText = Array.from(node.children).every(
            (child) => !hasText(child)
          );
          return nodeHasText && childrenDontHaveText;
        })
      ).toBeTruthy();
    });
    it("Power price by default", () => {
      render(
        <PriceProvider value={defaultPrice}>
          <ResultTable />
        </PriceProvider>
      );
      expect(
        screen.getByText((content, node) => {
          const hasText = (node) =>
            node.textContent === `Power:+${defaultPrice}€`;
          const nodeHasText = hasText(node);
          const childrenDontHaveText = Array.from(node.children).every(
            (child) => !hasText(child)
          );
          return nodeHasText && childrenDontHaveText;
        })
      ).toBeTruthy();
    });
    it("Power price after added +500€", () => {
      const price = 500;
      render(
        <PriceProvider value={price}>
          <Powers />
          <ResultTable />
        </PriceProvider>
      );
      const buttonElement = screen.getByText("200 MW", { exact: false });
      userEvent.click(buttonElement);
      expect(
        screen.getByText((content, node) => {
          const hasText = (node) => node.textContent === `Power:+${price}€`;
          const nodeHasText = hasText(node);
          const childrenDontHaveText = Array.from(node.children).every(
            (child) => !hasText(child)
          );
          return nodeHasText && childrenDontHaveText;
        })
      ).toBeTruthy();
    });
    it("warp drive price by default", () => {
      render(
        <PriceProvider value={defaultPrice}>
          <ResultTable />
        </PriceProvider>
      );
      expect(
        screen.getByText((content, node) => {
          const hasText = (node) =>
            node.textContent === `Warp drive:+${defaultPrice}€`;
          const nodeHasText = hasText(node);
          const childrenDontHaveText = Array.from(node.children).every(
            (child) => !hasText(child)
          );
          return nodeHasText && childrenDontHaveText;
        })
      ).toBeTruthy();
    });
    it("Warp drive price after added +1000€", () => {
      const price = 1000;
      render(
        <PriceProvider value={price}>
          <WarpDrive />
          <ResultTable />
        </PriceProvider>
      );
      const buttonElement = screen.getByText("YES", { exact: false });
      userEvent.click(buttonElement);
      expect(
        screen.getByText((content, node) => {
          const hasText = (node) =>
            node.textContent === `Warp drive:+${price}€`;
          const nodeHasText = hasText(node);
          const childrenDontHaveText = Array.from(node.children).every(
            (child) => !hasText(child)
          );
          return nodeHasText && childrenDontHaveText;
        })
      ).toBeTruthy();
    });
    it("Option package price by default", () => {
      render(
        <PriceProvider value={defaultPrice}>
          <ResultTable />
        </PriceProvider>
      );
      expect(
        screen.getByText((content, node) => {
          const hasText = (node) =>
            node.textContent === `Option package:+${defaultPrice}€`;
          const nodeHasText = hasText(node);
          const childrenDontHaveText = Array.from(node.children).every(
            (child) => !hasText(child)
          );
          return nodeHasText && childrenDontHaveText;
        })
      ).toBeTruthy();
    });
    it("Option package price after added +500€", () => {
      const price = 500;
      render(
        <PriceProvider value={price}>
          <OptionsPackage />
          <ResultTable />
        </PriceProvider>
      );
      const buttonElement = screen.getByText("Lux", { exact: true });
      userEvent.click(buttonElement);
      expect(
        screen.getByText((content, node) => {
          const hasText = (node) =>
            node.textContent === `Option package:+${price}€`;
          const nodeHasText = hasText(node);
          const childrenDontHaveText = Array.from(node.children).every(
            (child) => !hasText(child)
          );
          return nodeHasText && childrenDontHaveText;
        })
      ).toBeTruthy();
    });
  });
});
