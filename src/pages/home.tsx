import { defineComponent } from 'vue'
import styles from './home.module.scss'
import test from '../utils/test.cjs'

export default defineComponent({
  setup() {
    console.log(test)

    return () => (
      <div>
        <div class={styles.defaultBtn}>一个按钮</div>
      </div>
    )
  }
})
