import { defineStore } from 'pinia'

export const useSidebarStoreTenant = defineStore('sidebarStoreTenant', () => {
  const currentActionTenant = ref<string>('')
  const sideBarActionTenant = ref(false)
  const props = ref<any>()
  return {
    currentActionTenant,
    sideBarActionTenant,
    props
  }
})
