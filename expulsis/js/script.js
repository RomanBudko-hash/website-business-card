'use strict'

const addDynamic = () => {
  const DESCRIPTION = document.querySelectorAll('.main__descr');
  const getElement = (className) => document.querySelector(className);
  
  const [LEFTBUTTON, RIGHTBUTTON, LEFTSIDEIMAGE, RIGHTSIDEIMAGE] = 
  [
    getElement('.btn-left'), 
    getElement('.btn-right'), 
    getElement('.main__left-side'), 
    getElement('.main__right-side')
  ];
  
  const setListener = (button, elRender, className) => {
    button.addEventListener('click', () => {
      elRender.classList.toggle(className)
    })
  }
  
  setListener(LEFTBUTTON, DESCRIPTION[0], 'main__descr_active');
  setListener(RIGHTBUTTON, DESCRIPTION[1], 'main__descr_active');
  setListener(LEFTBUTTON, LEFTSIDEIMAGE, 'main_fade');
  setListener(RIGHTBUTTON, RIGHTSIDEIMAGE, 'main_fade');
}

addDynamic()