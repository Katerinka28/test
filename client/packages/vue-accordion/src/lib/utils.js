/*
  eslint-disable
    import/prefer-default-export
*/
export const documentOffsetTop = el => el.offsetTop +
  (el.offsetParent ? documentOffsetTop(el.offsetParent)
    : INITIAL_HEIGHT)