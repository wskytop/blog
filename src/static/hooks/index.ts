import { onMounted, onUnmounted, ref } from "vue";

export const useHandler = () => {
  const isMobile = ref(true);
  const domWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const isMobileMth = () => {
    return domWidth <= 750;
  };
  const onResize = () => {
    isMobile.value = isMobileMth();
  };

  onMounted(() => {
    window.addEventListener("resize", onResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });

  return {
    isMobile,
  };
};
