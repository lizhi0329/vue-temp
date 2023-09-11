import { RouterView } from 'vue-router'
import './app.scss'

export default defineComponent({
  setup() {
    return () => (
      <div>
        <RouterView></RouterView>
        <div class="default-btn">app btn</div>
      </div>
    )
  }
})
