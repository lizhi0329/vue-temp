import { defineComponent } from 'vue'
import './index.scss'

export default defineComponent({
  setup() {
    return () => (
      <div>
        <div class="default-btn">一个按钮</div>
      </div>
    )
  }
})
