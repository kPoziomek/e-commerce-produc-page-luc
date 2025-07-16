import Alpine from 'alpinejs'
import { headerComponent, mobileNavigationComponent } from './components/header.ts'

// Register components globally

Alpine.data('headerComponent', headerComponent)
Alpine.data('mobileNavigationComponent', mobileNavigationComponent)


// Initialize Alpine.js
window.Alpine = Alpine

Alpine.start()

console.log('Alpine.js initialized')
