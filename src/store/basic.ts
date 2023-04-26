import { defineStore } from "pinia";

export const useBasicStore = defineStore("basic", {
  state: () => {
    return {
      sidebar: { open: true },
    };
  },
  actions: {
    setToggleSideBar() {
        this.sidebar.opened = !this.sidebar.opened
        // this.$patch((state) => {
        //   state.sidebar.opened = !state.sidebar.opened
        // })
      },
  },
});
