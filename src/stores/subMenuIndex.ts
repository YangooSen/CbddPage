import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSubMenuIndex = defineStore("subMenuIndex", () => {
  const subMenuIndex = ref("");
  function setSubMenuIndex(index: string) {
    subMenuIndex.value = index;
  }

  return { subMenuIndex, setSubMenuIndex };
});
