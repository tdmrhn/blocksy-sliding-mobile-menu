
       
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("ul.ct-sliding");
  const dropdowns = nav.querySelectorAll("li > ul");
	
  function createButton(direction, dropdown) {
    const button = document.createElement('button');
	const isRight = direction === 'right';
    button.classList.add('ct-toggle-dropdown-mobile');
	const svgMiddle = isRight ? 'm4.65 11.55 3.6-3.6-3.6-3.6.7-1.4 5 5-5 5z' : 'm10.35 11.55-3.6-3.6 3.6-3.6-.7-1.4-5 5 5 5z';
	button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="ct-icon" viewBox="0 0 15 15"><path d="' + svgMiddle + '"></path></svg>';

    button.addEventListener("click", () => toggleDropdown(direction, dropdown));
    return button;
  }

  function toggleDropdown(direction, dropdown) {
    const parentUl = dropdown.parentElement.closest("ul");
    const isRight = direction === 'right';

    parentUl.style.transform = isRight ? 'translateX(-100%)' : 'translateX(0%)';
    dropdown.style.display = isRight ? 'block' : setTimeout(() => dropdown.style.display = 'none', 400);
    dropdown.style.transform = isRight ? 'translateX(0%)' : '';
  }

  dropdowns.forEach(dropdown => {
    dropdown.style.display = 'none';
    const link = dropdown.parentElement.querySelector("a");
    const getText = link?.textContent.trim();

    link.insertAdjacentElement('afterend', createButton('right', dropdown));

    const backButton = createButton('left', dropdown);

    const backBtnWrapper = document.createElement("li");
    backBtnWrapper.classList.add("back");
	const parentText = document.createElement('span');
    parentText.classList.add("ct-menu-link");
    parentText.innerText = getText;

    backBtnWrapper.append(parentText, backButton);	

    dropdown.prepend(backBtnWrapper);
  });

  nav.classList.add("mobile-menu");
  nav.setAttribute("data-id", "mobile-menu");
  nav.querySelectorAll("ul.ct-sliding a").forEach(link => link.classList.add('ct-menu-link'));
});