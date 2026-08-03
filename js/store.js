
class Store {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('bistro_cart_local_vfinal')) || [];
        this.taxRate = 0.15;
        this.updateBadge();
    }
    save() {
        localStorage.setItem('bistro_cart_local_vfinal', JSON.stringify(this.cart));
        this.updateBadge();
    }
    add(id, quantity = 1) {
        const product = PRODUCT_DB.find(p => p.id === id);
        if (!product) return;
        const existing = this.cart.find(i => i.id === id);
        if (existing) {
            existing.qty += quantity;
        } else {
            this.cart.push({ ...product, qty: quantity });
        }
        this.save();
        this.showToast(`${quantity}x ${product.name} agregado(s)`);
    }
    updateQty(id, delta) {
        const item = this.cart.find(i => i.id === id);
        if (item) {
            item.qty += delta;
            if (item.qty <= 0) {
                this.cart = this.cart.filter(i => i.id !== id);
            }
            this.save();
        }
    }
    remove(id) {
        this.cart = this.cart.filter(i => i.id !== id);
        this.save();
    }
    empty() {
        this.cart = [];
        this.save();
    }
    getTotals() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        const tax = subtotal * this.taxRate;
        const total = subtotal + tax;
        const count = this.cart.reduce((sum, item) => sum + item.qty, 0);
        return { subtotal, tax, total, count };
    }
    updateBadge() {
        const count = this.getTotals().count;
        document.querySelectorAll('.cart-badge').forEach(b => {
            b.textContent = count;
            b.classList.toggle('hidden', count === 0);
        });
    }
    showToast(message) {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2';
            document.body.appendChild(container);
        }
        const toast = document.createElement('div');
        toast.className = 'bg-stone-900 text-white px-6 py-3 rounded-lg shadow-2xl transform translate-x-full transition-transform duration-300 flex items-center gap-3 border-l-4 border-amber-500 font-medium';
        toast.innerHTML = `<i class="fa-solid fa-check-circle text-amber-500 text-xl"></i> <span>${message}</span>`;
        container.appendChild(toast);
        
        requestAnimationFrame(() => {
            toast.classList.remove('translate-x-full');
        });

        setTimeout(() => {
            toast.classList.add('translate-x-full');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}
window.appStore = new Store();
