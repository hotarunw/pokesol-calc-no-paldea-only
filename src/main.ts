(() => {
  setTimeout(() => {
    const toggle = Array.from(document.getElementsByClassName("PrivateSwitchBase-input")).find((input) =>
      input.parentElement?.parentElement?.parentElement?.textContent.includes("パルデアポケモンのみ"),
    ) as HTMLInputElement | undefined;

    if (toggle == undefined) {
      console.warn("パルデアポケモンのみのトグルが見つかりませんでした。");
      return;
    }
    if (toggle.checked === true) {
      toggle.click();
    }
  }, 400);
})();
