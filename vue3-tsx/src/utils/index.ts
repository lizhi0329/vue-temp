const checkEllipsis = (): boolean => {
  const box = document.querySelector('.box')!
  const range = document.createRange()
  range.setStart(box, 0)
  range.setEnd(box, box.childNodes.length)
  const rangeWidth = range.getBoundingClientRect().width
  const rangeHeight = range.getBoundingClientRect().height
  const contentWidth = rangeWidth - Math.floor(rangeWidth)
  const { left, right } = getPadding(box)
  const horizontalPadding = left + right
  if (rangeWidth + horizontalPadding > box.clientWidth) {
    // result.textContent = '存在省略号'
    return true
  } else {
    // result.textContent = '容器宽度足够，没有省略号了'
    return false
  }
}

// 上面代码17行中的getPadding函数
const getPadding = (el: HTMLElement | Element) => {
  const style = window.getComputedStyle(el, null)
  const paddingLeft = Number.parseInt(style.paddingLeft, 10) || 0
  const paddingRight = Number.parseInt(style.paddingRight, 10) || 0
  const paddingTop = Number.parseInt(style.paddingTop, 10) || 0
  const paddingBottom = Number.parseInt(style.paddingBottom, 10) || 0
  return {
    left: paddingLeft,
    right: paddingRight,
    top: paddingTop,
    bottom: paddingBottom,
  }
}

export { checkEllipsis }
