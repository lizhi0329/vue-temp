// play/src/components/popper/popper.ts
let cachedContainer: HTMLElement
const selector = `van-popper-container-1996`

type PopperContainerType = {
  container: HTMLElement
  selector: string
}

export const usePopperContainer = (): PopperContainerType => {
  if (!cachedContainer && !document.querySelector(`#${selector}`)) {
    const container = document.createElement('div')
    container.id = selector
    cachedContainer = container
    document.body.appendChild(container)
  }

  return {
    container: cachedContainer,
    selector,
  }
}
