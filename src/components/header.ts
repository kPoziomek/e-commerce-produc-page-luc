export function headerComponent() {
  return {
    activeTab: 'men',
    actionHeader:[{src:"/assets/icons/marker.svg", alt:"Location"},
      {src:"/assets/icons/account.svg", alt:"Account"},
      {src:"/assets/icons/search.svg", alt:"Search"},
      {src:"/assets/icons/heart.svg", alt:"Wishlist"},
      ],

    navigationLinks:["BOOTS","SHOES","READY TO WEAR", "ACCESSORIES", "LIFESTYLE", "COLLABORATIONS", "SHOP THE LOOK"],

    setActiveTab(tab: string) {
      this.activeTab = tab;
    },

    isActiveTab(tab: string) {
      return this.activeTab === tab;
    }
  };
}

// Mobile navigation component
export function mobileNavigationComponent() {
  return {
    mobileMenuOpen: false,
    activeTab: 'men',
    selectedCategory: "",
    userActions:[
      {src:"/assets/icons/account.svg", alt:"Account", action:"Account", text:"ACCOUNT"}
      ,{src:"/assets/icons/heart.svg", alt:"Wishlist", action:"Wishlists", text:"WISHLISTS"}
      ,{src:"/assets/icons/marker.svg", alt:"Stores", action:"Stores", text:"STORES"}],
    categories: {},
    showSubcategories: false,

    async init() {
      try {
        const response = await fetch('/src/data/categories.json');
        this.categories = await response.json();
      } catch (error) {
        console.error('Failed to load categories:', error);
      }
    },

    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },

    setActiveTab(tab:string) {
      this.activeTab = tab;
    },

    selectCategory(categoryName:string ) {
      this.selectedCategory = categoryName;
      this.showSubcategories = true;
    },

    goBackToCategories() {
      this.showSubcategories = false;
    }
  };
}
