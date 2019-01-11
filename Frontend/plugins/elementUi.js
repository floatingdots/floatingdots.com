import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioButton,
  RadioGroup,
  Select,
  Option,
} from 'element-ui'
import localeEn from 'element-ui/lib/locale/lang/en'
import localeJa from 'element-ui/lib/locale/lang/ja'
import '@/assets/styles/element.sass'

const myElements = [
  Button,
  Form,
  FormItem,
  Input,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioButton,
  RadioGroup,
  Select,
  Option,
]

export default ({ app }) => {
  app.i18n.mergeLocaleMessage('en', localeEn)
  app.i18n.mergeLocaleMessage('ja', localeJa)

  myElements.forEach(el => {
    Vue.use(el, {
      i18n: (key, value) => app.i18n.t(key, value),
    })
  })
}
