document.addEventListener("DOMContentLoaded", () => {
  class MobileMenu {
    constructor(nav) {
      if (!nav) return;

      nav.classList.add('mobile-menu', 'ct-sliding');
      nav.setAttribute('data-id', 'mobile-menu');

      for (const item of nav.getElementsByTagName('li')) {
        const link = item.firstElementChild;
        if (link?.tagName === 'A') {
          link.classList.add('ct-menu-link');

          const dropdown = item.querySelector(':scope > ul');
          if (dropdown) {
            dropdown.style.display = 'none';

            const forwardBtn = this.createArrowButton('right', dropdown);
            link.after(forwardBtn);

            const backItem = document.createElement('li');
            backItem.className = 'back';
            backItem.innerHTML = `<span class="ct-menu-link">${link.textContent.trim()}</span>`;
            const backBtn = this.createArrowButton('left', dropdown);
            backItem.append(backBtn);
            dropdown.prepend(backItem);
          }
        }
      }
    }

    createArrowButton(direction, dropdown) {
      const button = document.createElement('button');
      button.className = 'ct-toggle-dropdown-mobile';
      button.innerHTML = `<svg class="ct-icon" viewBox="0 0 15 15"><path d="m4.65 11.55 3.6-3.6-3.6-3.6.7-1.4 5 5-5 5z"/></svg>`;
      button.style.transform = direction === 'left' ? 'rotate(180deg)' : '';

      button.addEventListener('click', () => this.toggleDropdown(dropdown, direction === 'right'));
      return button;
    }

    toggleDropdown(dropdown, isForward) {
      const parentUl = dropdown.parentElement.closest('ul');
      parentUl.style.transform = isForward ? 'translateX(-100%)' : 'translateX(0%)';

      dropdown.style.display = isForward ? 'block' : '';
      if (!isForward) {
        setTimeout(() => dropdown.style.display = 'none', 400);
      }
    }
  }

  const nav = document.getElementById('mobile-menu') || document.querySelector('ul.ct-sliding');
  if (nav) new MobileMenu(nav);
});
