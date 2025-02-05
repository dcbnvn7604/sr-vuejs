import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import App from '@/App.vue'

test('app', () => {
  const wrapper = mount(App)

  expect(wrapper.text()).toContain('App')
})