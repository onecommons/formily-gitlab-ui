import { defineComponent } from '@vue/composition-api'
import { connect, mapProps, h } from '@formily/vue'
import { composeExport } from '../__builtins__'
import { Component } from 'vue'

export type FormItemProps = {
  required?: boolean
  layout?: 'vertical' | 'horizontal' | 'inline'
  label?: string | Component
}
export const FormBaseItem = defineComponent<FormItemProps>({
  name: 'FormItem',
  props: {
    className: {},
    required: {},
    label: {},
  },
  setup(props, { slots, attrs, refs }) {
    return () => {
      const gridStyles: Record<string, any> = {}
      const { label } = props

      const renderLabel =
        label &&
        h(
          'div',
          {},
          {
            default: () => [],
          }
        )
      return h(
        'div',
        {},
        {
          default: () => [renderLabel],
        }
      )
    }
  },
})

const Item = connect(
  FormBaseItem,
  mapProps(
    { validateStatus: true, title: 'label', required: true },
    (props, field) => {}
  )
)

export const FormItem = composeExport(Item, {
  BaseItem: FormBaseItem,
})

export default FormItem
