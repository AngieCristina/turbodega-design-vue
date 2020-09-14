<template>
  <header>
    <h2 class="brand">Turbobodega</h2>
    <div class="avatar">
      <p class="user-initials">{{ currentUserInitials }}</p>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    currentUser: {
      name: "Alex Gonzales",
    },
  }),
  computed: {
    currentUserInitials() {
      return this.currentUser.name.split(" ").reduce((initials, word) => {
        return initials + word[0];
      }, "");
    },
  },
};
</script>

<style lang="scss">
header {
  padding: 7px 10px 7px 15px;
  display: flex;
  background: #6cd4cd;
  align-items: center;
  justify-content: center;
  height: 44px;

  .brand {
    margin: 0;
    font-weight: normal;
    font-size: 16px;
  }

  .avatar {
    margin-left: auto;
    background: white;
    border-radius: 15px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    .user-initials {
      margin: 0;
      font-size: 12px;
    }
  }
}
</style>
