import { checkEllipsis } from '@/utils'
import { usePopperContainer } from '@/components/popper/popper'
import './index.css'

export default defineComponent({
  setup() {
    const { container } = usePopperContainer()
    const el = ref<HTMLElement | null>(null)
    onMounted(() => {
      console.log(el, 'el', container)
      container.innerHTML = 'tooltips'
      container.style.position = 'fixed'
      const styles = el.value!.getBoundingClientRect()
      console.log(styles)

      container.style.left = styles.left + 'px'
      container.style.right = styles.right + 'px'
      container.style.top = styles.top + 'px'
      console.log(checkEllipsis())
    })
    return () => (
      <div ref={el} class={'ellipsis box'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    )
  },
})
