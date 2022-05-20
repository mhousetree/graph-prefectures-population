<template>
  <svg
    class="blank"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="15"
      height="15"
      fill="white"
      stroke="#C8C8C8"
    />
  </svg>
  <svg
    class="checked"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="15"
      height="15"
      fill="white"
      stroke="#C8C8C8"
    />
    <path
      d="M2.5 7.5L6.68992 12.621L13.1899 2.62102"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
</template>

<style scoped lang="scss">
.checked {
  display: none;
}

input:checked + label {
  .blank {
    display: none;
  }
  .checked {
    display: block;
  }
}
</style>
