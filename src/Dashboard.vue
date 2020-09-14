<template>
  <div id="dashboard">
    <div class="search">
      <img
        src="@/assets/icons/search-icon.svg"
        alt="search"
        class="search-icon"
      />
      <input
        class="search-input"
        v-model="search"
        type="text"
        placeholder="Buscar por nombre, DNI o telefono"
      />
    </div>

    <router-link to="/new-store" class="new-store"
      ><img
        src="@/assets/icons/add-icon.svg"
        alt="new store"
        class="new-store-icon"
      />
      Agregar tienda nueva</router-link
    >

    <div class="stores" v-for="store in filteredStores" v-bind:key="store.id">
      <div class="store">
        <div class="store-details">
          <p class="seller">{{ store.seller }}</p>
          <p class="dni">DNI {{ store.dni }}</p>
          <p class="phone">
            <img src="@/assets/icons/phone-icon.svg" alt="Phone" />
            {{ store.phone }}
          </p>
        </div>
        <div class="store-products">
          <div class="product" v-for="product in store.products" :key="product">
            <!-- TODO: Usar imagenes de productos -->
            <div class="product-image"></div>
            <p class="product-name">{{ product }}</p>
          </div>
        </div>
        <div class="store-actions">
          <router-link to="/edit-store" class="edit-store"
            ><img src="@/assets/icons/edit-icon.svg" alt="Edit store" />Editar
            tienda</router-link
          >
          <router-link to="/catalog" class="store-catalog"
            ><img src="@/assets/icons/catalog-icon.svg" alt="Catalog" /> Ver
            catalogo</router-link
          >
        </div>
        <small v-if="store.orders > 50" class="hot-store">
          HOT
        </small>
      </div>
    </div>
  </div>
</template>

<script>
const products = ["Limon", "Pollo", "Tomate", "Pescado"];
export default {
  name: "App",
  data() {
    return {
      search: "",
      stores: [
        {
          id: 1,
          seller: "Osorio Sanchez Juanita",
          dni: "60012051",
          phone: "987651234",
          orders: 10,
          email: "osorio@gmail.com",
          products,
        },
        {
          id: 2,
          seller: "Puma Bacilio Santusa",
          dni: "99679321",
          phone: "989456123",
          orders: 90,
          email: null,
          products,
        },
      ],
      query: "",
    };
  },
  methods: {
    addStore(e) {
      e.preventDefault();
    },
    printTextAlert() {
      if (this.stores.phone === "") {
        return " Por favor completar los datos pendientes";
      }
    },
  },
  computed: {
    filteredStores() {
      if (this.search === "") {
        return this.stores;
      }
      return this.stores.filter((store) => {
        const { seller, dni, phone } = store;
        return (seller + dni + phone)
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style lang="scss">
#dashboard {
  padding: 8px 15px;
}

.search {
  padding: 8px 9px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  height: 36px;

  .search-input {
    background: #f5f5f5;
    box-sizing: border-box;
    font-size: 12px;
    outline: none;
    border: none;
    height: 100%;
    width: 100%;
    padding: 0;
    margin-left: 8px;
  }

  .search-input::placeholder {
    color: #c9c9c9;
    font-size: 12px;
    padding-left: 8px;
  }
}

.new-store {
  color: #626262;
  text-decoration: none;
  font-size: 12px;
  margin-top: 16px;
  display: flex;
  align-items: center;

  .new-store-icon {
    margin-right: 3px;
  }
}

.stores {
  margin-top: 12px;
  padding: 0 5px;
  .store {
    position: relative;
    background: #f9f9f9;
    display: flex;
    padding: 12px 8px;

    .store-details {
      font-size: 8px;
      padding-left: 8px;
      .seller,
      .dni,
      .phone {
        margin: 0;
      }
      .seller {
        font-size: 12px;
      }
    }

    .store-products {
      padding-left: 16px;
      display: flex;

      .product {
        margin-left: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .product-image {
        background: #c4c4c4;
        border-radius: 12px;
        width: 20px;
        height: 20px;
      }

      .product-name {
        font-size: 6px;
      }
    }

    .store-actions {
      padding-left: 14px;
      align-items: flex-end;
      justify-content: center;
      display: flex;
      flex-direction: column;
      margin-left: auto;
      .edit-store,
      .store-catalog {
        padding-top: 7px;
        display: flex;
        align-items: center;
        font-size: 8px;
        text-decoration: none;
        color: #2c2c2c;
      }
    }

    .hot-store {
      top: 0;
      right: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: red;
      height: 15px;
      width: 25px;
      font-size: 6px;
      position: absolute;
      color: white;
    }
  }
}
</style>
