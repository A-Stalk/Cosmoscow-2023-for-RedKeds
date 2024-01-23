// onclick Change button

function toggleImage(button) {
  const parentBlock = button.parentElement;
  const normalImage = parentBlock.querySelector('.normal-image');
  const hoverImage = parentBlock.querySelector('.hover-image');

  if (
    normalImage.style.display === 'block' ||
    normalImage.style.display === ''
  ) {
    normalImage.style.display = 'none';
    hoverImage.style.display = 'block';
    button.style.backgroundImage = 'url(./images/image_button-.png)';
  } else {
    normalImage.style.display = 'block';
    hoverImage.style.display = 'none';
    button.style.backgroundImage = 'url(./images/image_button+.png)';
  }
}

// onclick btn Read_more

function toggleText(button) {
  const block = button.parentElement;
  const deskBlocks = block.querySelectorAll('.desk');
  const mobBlocks = block.querySelectorAll('.mob');

  deskBlocks.forEach(function (deskBlock) {
    if (
      deskBlock.style.maxHeight === '0px' ||
      deskBlock.style.maxHeight === ''
    ) {
      deskBlock.style.display = 'block';
      deskBlock.style.maxHeight = deskBlock.scrollHeight + 'px';

      // для закрытия background problem_layout
      deskBlock
        .querySelectorAll(
          '.problem__main__bottom_layout_middle, .problem__main__bottom_layout_bottom, .problem__main__bottom_layout',
        )
        .forEach(function (image) {
          image.style.backgroundSize = 'contain';
        });
    } else {
      deskBlock.style.maxHeight = '0';
      deskBlock.style.maxHeight = deskBlock.scrollHeight - 'px';

      setTimeout(() => {
        deskBlock.style.display = 'none';
      }, 500);

      // для закрытия background problem_layout
      deskBlock
        .querySelectorAll(
          '.problem__main__bottom_layout_middle, .problem__main__bottom_layout_bottom, .problem__main__bottom_layout',
        )
        .forEach(function (image) {
          image.style.backgroundSize = '0';
        });
    }
  });

  mobBlocks.forEach(function (mobBlock) {
    mobBlock.style.maxHeight = mobBlock.scrollHeight - 'px';
    mobBlock.style.display =
      mobBlock.style.display === 'none' ? 'block' : 'none';
  });

  button.innerText =
    button.innerText === 'скрыть' ? 'читать подробнее' : 'скрыть';
}

// onclick btn for foooter Join
function joinButton(button) {
  button.style.backgroundImage =
    'url(../images/blocks/footer/desktop/footer__main__middle_button_click.png)';
  button.style.backgroundSize = 'contain';
  button.style.backgroundRepeat = 'no-repeat';
}

// onclick ScrollUp

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// burger-menu

const burgerButton = document.querySelector('.header__burger_button');
const burgerMenu = document.querySelector('.header__burger__menu');

burgerButton.addEventListener('click', function (e) {
  e.stopPropagation();
  document.body.classList.toggle('header__burger_menu_opened');

  burgerButton.classList.toggle('burger_active');
});

document.addEventListener('click', function (e) {
  const isBurgerMenuClicked = burgerMenu.contains(e.target);
  const isBurgerButtonClicked = burgerButton.contains(e.target);

  if (!isBurgerMenuClicked && !isBurgerButtonClicked) {
    document.body.classList.remove('header__burger_menu_opened');

    burgerButton.classList.remove('burger_active');
  }
});
