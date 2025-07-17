import Alpine from 'alpinejs'
import { headerComponent, mobileNavigationComponent } from './components/header.ts'
import { productDetails } from './components/productDetails.ts'

// Register components globally

Alpine.data('headerComponent', headerComponent)
Alpine.data('mobileNavigationComponent', mobileNavigationComponent)
Alpine.data('productDetails', productDetails)


// Initialize Alpine.js
window.Alpine = Alpine

Alpine.start()

console.log('Alpine.js initialized')
