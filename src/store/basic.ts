import { defineStore } from "pinia";

export const useBasicStore = defineStore("basic", {
  state: () => {
    return {
      sidebar: { opened: true },
    };
  },
  actions: {
    setToggleSideBar() {
        this.sidebar.opened = !this.sidebar.opened
      },
  },
});
