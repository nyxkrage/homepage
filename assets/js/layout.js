// ┬  ┌─┐┬ ┬┌─┐┬ ┬┌┬┐
// │  ├─┤└┬┘│ ││ │ │
// ┴─┘┴ ┴ ┴ └─┘└─┘ ┴
// Generate Layout.

const generateLayout = () => {
	let firstButtonsContainer = `
    <div class="buttonsContainer" id="buttons_1"></div>
  `;
	let secondButtonsContainer = `
    <div class="buttonsContainer" id="buttons_2"></div>
  `;

	const position = 'beforeend';

	linksBlockLeft.insertAdjacentHTML(position, firstButtonsContainer);
	linksBlockRight.insertAdjacentHTML(position, secondButtonsContainer);
	linksBlock.classList.add('removeGap');
};

generateLayout();
