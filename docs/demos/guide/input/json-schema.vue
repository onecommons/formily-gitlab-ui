<template>
  <FormProvider :form="form">
    <SchemaField :schema="{
      type: 'object',
      properties: {
        input: {
          type: 'string',
          title: '输入框',
          // 'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
    }}">

    </SchemaField>
    <Submit @submit="onSubmit">提交</Submit>
  </FormProvider>
</template>

<script>
import {createForm} from '@formily/core'
import {FormProvider, createSchemaField} from '@formily/vue'
import {Form, FormItem, Input, Submit} from '@formily/gitlab-ui'

const schema = {
  type: 'object',
  properties: {
    input: {
      type: 'string',
      title: '输入框',
      // 'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    // textarea: {
    //   type: 'string',
    //   title: '文本框',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'Input.TextArea',
    // },
  },
}

const form = createForm()
const {SchemaField} = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

export default {
  components: {Form, SchemaField, Submit, Input, FormProvider},
  data() {
    return {
      form,
      schema,
    }
  },
  methods: {
    onSubmit(value) {
      console.log(value)
    },
  },
}
</script>
