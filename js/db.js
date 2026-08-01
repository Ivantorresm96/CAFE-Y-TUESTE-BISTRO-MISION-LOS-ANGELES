const PRODUCT_DB = [
    {
        id: "c1", 
        name: "Espresso", 
        category: "Cafés", 
        price: 55, 
        tag: "Popular", 
        desc: "Concentrado y con cuerpo denso.", 
        img: "img/products/espresso.jpg" 
    },
    {
        id: "c2", 
        name: "Espresso Doble", 
        category: "Cafés", 
        price: 70, 
        tag: "", 
        desc: "Doble carga de energía pura.", 
        img: "img/products/espresso-doble.jpg" 
    },
    {
        id: "c3", 
        name: "Americano", 
        category: "Cafés", 
        price: 65, 
        tag: "", 
        desc: "Espresso suavizado con agua caliente.", 
        img: "img/products/americano.jpg" 
    },
    {
        id: "c4", 
        name: "Cappuccino", 
        category: "Cafés", 
        price: 85, 
        tag: "Clásico", 
        desc: "Espresso con leche vaporizada y espuma.", 
        img: "img/products/cappuccino.jpg" 
    },
    {
        id: "c5", 
        name: "Latte", 
        category: "Cafés", 
        price: 95, 
        tag: "", 
        desc: "Suave espresso con abundante leche.", 
        img: "img/products/latte.jpg" 
    },
    {
        id: "c6", 
        name: "Mocha", 
        category: "Cafés", 
        price: 110, 
        tag: "", 
        desc: "Deliciosa mezcla de café y chocolate.", 
        img: "img/products/mocha.jpg" 
    },
    {
        id: "c7", 
        name: "Flat White", 
        category: "Cafés", 
        price: 90, 
        tag: "Recomendado", 
        desc: "Microespuma sedosa sobre doble espresso.", 
        img: "img/products/flat-white.jpg" 
    },
    {
        id: "c8", 
        name: "Macchiato", 
        category: "Cafés", 
        price: 65, 
        tag: "", 
        desc: "Espresso 'manchado' con leche vaporizada.", 
        img: "img/products/macchiato.jpg" 
    },
    {
        id: "c9", 
        name: "Café de Olla", 
        category: "Cafés", 
        price: 75, 
        tag: "Tradicional", 
        desc: "Café con canela y piloncillo.", 
        img: "img/products/cafe-de-olla.jpg" 
    },
    {
        id: "c10", 
        name: "Café Filtrado", 
        category: "Cafés", 
        price: 80, 
        tag: "", 
        desc: "Extracción limpia y llena de matices.", 
        img: "img/products/cafe-filtrado.jpg" 
    },
    {
        id: "c11", 
        name: "Cortado", 
        category: "Cafés", 
        price: 70, 
        tag: "", 
        desc: "Proporción igual de espresso y leche.", 
        img: "img/products/cortado.jpg" 
    },
    {
        id: "c12", 
        name: "Affogato", 
        category: "Cafés", 
        price: 105, 
        tag: "Postre", 
        desc: "Helado de vainilla ahogado en espresso.", 
        img: "img/products/affogato.jpg" 
    },
    {
        id: "cf1", 
        name: "Iced Latte", 
        category: "Bebidas Frías", 
        price: 105, 
        tag: "Popular", 
        desc: "Latte clásico servido sobre hielo.", 
        img: "img/products/iced-latte.jpg" 
    },
    {
        id: "cf2", 
        name: "Iced Americano", 
        category: "Bebidas Frías", 
        price: 75, 
        tag: "", 
        desc: "Americano refrescante sobre hielo.", 
        img: "img/products/iced-americano.jpg" 
    },
    {
        id: "cf3", 
        name: "Cold Brew", 
        category: "Bebidas Frías", 
        price: 95, 
        tag: "Nuevo", 
        desc: "Extraído en frío por 18 horas.", 
        img: "img/products/cold-brew.jpg" 
    },
    {
        id: "cf4", 
        name: "Cold Brew Vainilla", 
        category: "Bebidas Frías", 
        price: 105, 
        tag: "", 
        desc: "Cold Brew con un toque de vainilla.", 
        img: "img/products/cold-brew-vainilla.jpg" 
    },
    {
        id: "cf5", 
        name: "Cold Brew Caramelo", 
        category: "Bebidas Frías", 
        price: 105, 
        tag: "", 
        desc: "Cold Brew endulzado con caramelo.", 
        img: "img/products/cold-brew-caramelo.jpg" 
    },
    {
        id: "cf6", 
        name: "Frappé Mocha", 
        category: "Bebidas Frías", 
        price: 125, 
        tag: "Más vendido", 
        desc: "Mezcla helada de café y chocolate.", 
        img: "img/products/frappe-mocha.jpg" 
    },
    {
        id: "cf7", 
        name: "Frappé Caramelo", 
        category: "Bebidas Frías", 
        price: 125, 
        tag: "", 
        desc: "Delicioso frappé con salsa de caramelo.", 
        img: "img/products/frappe-caramelo.jpg" 
    },
    {
        id: "cf8", 
        name: "Frappé Chocolate", 
        category: "Bebidas Frías", 
        price: 125, 
        tag: "", 
        desc: "Intenso sabor a chocolate coronado con crema.", 
        img: "img/products/frappe-chocolate.jpg" 
    },
    {
        id: "cf9", 
        name: "Frappuccino Vainilla", 
        category: "Bebidas Frías", 
        price: 125, 
        tag: "", 
        desc: "Dulce y refrescante crema de vainilla.", 
        img: "img/products/frappuccino-vainilla.jpg" 
    },
    {
        id: "ch1", 
        name: "Chocolate caliente", 
        category: "Chocolates", 
        price: 85, 
        tag: "Clásico", 
        desc: "Reconfortante chocolate oscuro derretido.", 
        img: "img/products/chocolate-caliente.jpg" 
    },
    {
        id: "ch2", 
        name: "Chocolate blanco", 
        category: "Chocolates", 
        price: 95, 
        tag: "", 
        desc: "Suave y cremosa bebida de cacao blanco.", 
        img: "img/products/chocolate-blanco.jpg" 
    },
    {
        id: "ch3", 
        name: "Chocolate helado", 
        category: "Chocolates", 
        price: 95, 
        tag: "", 
        desc: "Tu chocolate favorito, ahora refrescante.", 
        img: "img/products/chocolate-helado.jpg" 
    },
    {
        id: "t1", 
        name: "Té Verde", 
        category: "Té", 
        price: 60, 
        tag: "", 
        desc: "Infusión antioxidante y ligera.", 
        img: "img/products/te-verde.jpg" 
    },
    {
        id: "t2", 
        name: "Té Negro", 
        category: "Té", 
        price: 60, 
        tag: "", 
        desc: "Clásico té negro intenso.", 
        img: "img/products/te-negro.jpg" 
    },
    {
        id: "t3", 
        name: "Chai Latte", 
        category: "Té", 
        price: 95, 
        tag: "Recomendado", 
        desc: "Té especiado con leche vaporizada.", 
        img: "img/products/chai-latte.jpg" 
    },
    {
        id: "t4", 
        name: "Matcha Latte", 
        category: "Té", 
        price: 110, 
        tag: "Nuevo", 
        desc: "Té verde japonés en polvo con leche.", 
        img: "img/products/matcha-latte.jpg" 
    },
    {
        id: "t5", 
        name: "Té Helado Durazno", 
        category: "Té", 
        price: 70, 
        tag: "", 
        desc: "Té frío con sabor frutal.", 
        img: "img/products/te-helado-durazno.jpg" 
    },
    {
        id: "t6", 
        name: "Té Helado Limón", 
        category: "Té", 
        price: 70, 
        tag: "", 
        desc: "Refrescante té negro con limón.", 
        img: "img/products/te-helado-limon.jpg" 
    },
    {
        id: "b1", 
        name: "Limonada Natural", 
        category: "Bebidas Frías", 
        price: 60, 
        tag: "", 
        desc: "Clásica y refrescante.", 
        img: "img/products/limonada-natural.jpg" 
    },
    {
        id: "b2", 
        name: "Limonada Hierbabuena", 
        category: "Bebidas Frías", 
        price: 65, 
        tag: "Refrescante", 
        desc: "Toque de menta fresca.", 
        img: "img/products/limonada-hierbabuena.jpg" 
    },
    {
        id: "b3", 
        name: "Limonada Rosa", 
        category: "Bebidas Frías", 
        price: 65, 
        tag: "", 
        desc: "Dulce limonada con frutos rojos.", 
        img: "img/products/limonada-rosa.jpg" 
    },
    {
        id: "b4", 
        name: "Smoothie Fresa", 
        category: "Bebidas Frías", 
        price: 110, 
        tag: "", 
        desc: "Batido natural de fresas.", 
        img: "img/products/smoothie-fresa.jpg" 
    },
    {
        id: "b5", 
        name: "Smoothie Mango", 
        category: "Bebidas Frías", 
        price: 110, 
        tag: "", 
        desc: "Batido tropical de mango.", 
        img: "img/products/smoothie-mango.jpg" 
    },
    {
        id: "b6", 
        name: "Smoothie Tropical", 
        category: "Bebidas Frías", 
        price: 115, 
        tag: "", 
        desc: "Mezcla de frutas exóticas.", 
        img: "img/products/smoothie-tropical.jpg" 
    },
    {
        id: "b7", 
        name: "Milkshake Chocolate", 
        category: "Bebidas Frías", 
        price: 120, 
        tag: "", 
        desc: "Malteada cremosa de chocolate.", 
        img: "img/products/milkshake-chocolate.jpg" 
    },
    {
        id: "b8", 
        name: "Milkshake Vainilla", 
        category: "Bebidas Frías", 
        price: 120, 
        tag: "", 
        desc: "Clásica malteada de vainilla.", 
        img: "img/products/milkshake-vainilla.jpg" 
    },
    {
        id: "b9", 
        name: "Milkshake Oreo", 
        category: "Bebidas Frías", 
        price: 125, 
        tag: "Favorito", 
        desc: "Malteada con galleta triturada.", 
        img: "img/products/milkshake-oreo.jpg" 
    },
    {
        id: "j1", 
        name: "Naranja", 
        category: "Jugos", 
        price: 60, 
        tag: "", 
        desc: "Jugo recién exprimido.", 
        img: "img/products/naranja.jpg" 
    },
    {
        id: "j2", 
        name: "Piña", 
        category: "Jugos", 
        price: 60, 
        tag: "", 
        desc: "Jugo natural de piña.", 
        img: "img/products/pina.jpg" 
    },
    {
        id: "j3", 
        name: "Sandía", 
        category: "Jugos", 
        price: 60, 
        tag: "", 
        desc: "Jugo hidratante de sandía.", 
        img: "img/products/sandia.jpg" 
    },
    {
        id: "j4", 
        name: "Maracuyá", 
        category: "Jugos", 
        price: 65, 
        tag: "", 
        desc: "El toque ácido perfecto.", 
        img: "img/products/maracuya.jpg" 
    },
    {
        id: "j5", 
        name: "Mango", 
        category: "Jugos", 
        price: 65, 
        tag: "", 
        desc: "Jugo dulce de mango.", 
        img: "img/products/mango.jpg" 
    },
    {
        id: "j6", 
        name: "Fresa", 
        category: "Jugos", 
        price: 65, 
        tag: "", 
        desc: "Jugo natural de fresas.", 
        img: "img/products/fresa.jpg" 
    },
    {
        id: "p1", 
        name: "Croissant", 
        category: "Panadería", 
        price: 65, 
        tag: "Clásico", 
        desc: "Masa hojaldrada y mantequilla.", 
        img: "img/products/croissant.jpg" 
    },
    {
        id: "p2", 
        name: "Panini", 
        category: "Panadería", 
        price: 120, 
        tag: "", 
        desc: "Pan tostado con jamón y queso.", 
        img: "img/products/panini.jpg" 
    },
    {
        id: "p3", 
        name: "Bagel", 
        category: "Panadería", 
        price: 85, 
        tag: "", 
        desc: "Bagel con queso crema.", 
        img: "img/products/bagel.jpg" 
    },
    {
        id: "p4", 
        name: "Sandwich Club", 
        category: "Panadería", 
        price: 140, 
        tag: "Recomendado", 
        desc: "Pollo, tocino, lechuga y tomate.", 
        img: "img/products/sandwich-club.jpg" 
    },
    {
        id: "p5", 
        name: "Sandwich de Pollo", 
        category: "Panadería", 
        price: 135, 
        tag: "", 
        desc: "Pechuga en pan artesanal.", 
        img: "img/products/sandwich-de-pollo.jpg" 
    },
    {
        id: "p6", 
        name: "Pan de Banano", 
        category: "Panadería", 
        price: 55, 
        tag: "", 
        desc: "Suave, esponjoso y casero.", 
        img: "img/products/pan-de-banano.jpg" 
    },
    {
        id: "p7", 
        name: "Muffin Chocolate", 
        category: "Panadería", 
        price: 65, 
        tag: "", 
        desc: "Muffin con chispas de chocolate.", 
        img: "img/products/muffin-chocolate.jpg" 
    },
    {
        id: "p8", 
        name: "Muffin Arándanos", 
        category: "Panadería", 
        price: 65, 
        tag: "", 
        desc: "Muffin frutal.", 
        img: "img/products/muffin-arandanos.jpg" 
    },
    {
        id: "po1", 
        name: "Cheesecake", 
        category: "Postres", 
        price: 110, 
        tag: "Más vendido", 
        desc: "Tarta de queso con frutos rojos.", 
        img: "img/products/cheesecake.jpg" 
    },
    {
        id: "po2", 
        name: "Tiramisú", 
        category: "Postres", 
        price: 120, 
        tag: "Italiano", 
        desc: "Postre de café y mascarpone.", 
        img: "img/products/tiramisu.jpg" 
    },
    {
        id: "po3", 
        name: "Brownie", 
        category: "Postres", 
        price: 75, 
        tag: "", 
        desc: "Bizcocho denso de chocolate.", 
        img: "img/products/brownie.jpg" 
    },
    {
        id: "po4", 
        name: "Pie de Limón", 
        category: "Postres", 
        price: 95, 
        tag: "", 
        desc: "Relleno ácido y merengue.", 
        img: "img/products/pie-de-limon.jpg" 
    },
    {
        id: "po5", 
        name: "Galletas", 
        category: "Postres", 
        price: 45, 
        tag: "", 
        desc: "Galletas artesanales crujientes.", 
        img: "img/products/galletas.jpg" 
    },
    {
        id: "po6", 
        name: "Donas", 
        category: "Postres", 
        price: 50, 
        tag: "", 
        desc: "Glaseado perfecto.", 
        img: "img/products/donas.jpg" 
    },
    {
        id: "po7", 
        name: "Pastel de Chocolate", 
        category: "Postres", 
        price: 110, 
        tag: "", 
        desc: "Doble capa de chocolate.", 
        img: "img/products/pastel-chocolate.jpg" 
    },
    {
        id: "po8", 
        name: "Pastel Red Velvet", 
        category: "Postres", 
        price: 115, 
        tag: "Nuevo", 
        desc: "Textura suave con frosting.", 
        img: "img/products/pastel-red-velvet.jpg" 
    },
];
