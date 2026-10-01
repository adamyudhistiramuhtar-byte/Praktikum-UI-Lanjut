import { ref, computed } from 'vue'
import { products } from '@/data/products.js'

const cartItems = ref([])
const lastOrder = ref(null)
const toastMessage = ref('')
const toastVisible = ref(false)

let toastTimer = null

export function useCart() {
  const totalItems = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.qty, 0)
  })

  const subtotal = computed(() => {
    return cartItems.value.reduce((sum, item) => {
      const product = products.find(p => p.id === item.id)
      return sum + (product ? product.price * item.qty : 0)
    }, 0)
  })

  const cartProducts = computed(() => {
    return cartItems.value.map(item => {
      const product = products.find(p => p.id === item.id)
      return { ...product, qty: item.qty }
    }).filter(item => item.id)
  })

  function addToCart(productId, qty = 1) {
    const existing = cartItems.value.find(item => item.id === productId)
    if (existing) {
      existing.qty += qty
    } else {
      cartItems.value.push({ id: productId, qty })
    }
  }

  function updateQty(productId, delta) {
    const item = cartItems.value.find(item => item.id === productId)
    if (item) {
      item.qty += delta
      if (item.qty <= 0) {
        removeFromCart(productId)
      }
    }
  }

  function removeFromCart(productId) {
    cartItems.value = cartItems.value.filter(item => item.id !== productId)
  }

  function clearCart() {
    cartItems.value = []
  }

  function showToast(msg) {
    toastMessage.value = msg
    toastVisible.value = true
    if (toastTimer) clearTimeout(toastTimer)
    toastTimer = setTimeout(() => {
      toastVisible.value = false
    }, 2500)
  }

  function placeOrder(shippingCost, address) {
    const items = cartProducts.value.map(item => ({
      name: item.name,
      qty: item.qty,
      price: item.price * item.qty
    }))

    lastOrder.value = {
      number: '#ORD-2024' + String(Math.floor(Math.random() * 9000) + 1000),
      items,
      subtotal: subtotal.value,
      shipping: shippingCost,
      total: subtotal.value + shippingCost,
      address
    }

    clearCart()
    return lastOrder.value
  }

  return {
    cartItems,
    totalItems,
    subtotal,
    cartProducts,
    lastOrder,
    toastMessage,
    toastVisible,
    addToCart,
    updateQty,
    removeFromCart,
    clearCart,
    showToast,
    placeOrder
  }
}
