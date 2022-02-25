import { accessorType } from '~/store'

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType,
  }
  interface Context {
    $notion: {
      getPageBlocks: (
        notionPageId: string
      ) => Object,
      getPageTable: (
        notionPageId: string
      ) => Object,
    },
  }
}
