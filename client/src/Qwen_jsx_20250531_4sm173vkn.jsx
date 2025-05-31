import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

// Home Page
const Home = () => (
  <section className="bg-gradient-to-r from-pink-100 to-yellow-50 py-12">
    <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Indulge in Sweetness</h2>
        <p className="text-lg text-gray-700 mb-6">Handcrafted cakes made with love, locally sourced ingredients, and a personal touch — perfect for birthdays, weddings, or just because.</p>
        <Link to="/menu" className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full font-semibold transition">
          View Our Cakes
        </Link>
      </div>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src="https://placehold.co/600x400?text=Celebration+Cakes+Nairobi" alt="Celebration Cake" className="rounded-lg shadow-md w-full" />
      </div>
    </div>
  </section>
);

const InstagramSection = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-pink-700 mb-6">Follow Us on Instagram</h2>
      <p className="text-gray-700 mb-6 max-w-lg mx-auto">See our latest creations, promotions, and behind-the-scenes moments!</p>
      <a href="https://www.instagram.com/davi_.gwaash" target="_blank" rel="noopener noreferrer" className="inline-block bg-pink-100 text-pink-700 px-6 py-2 rounded-full hover:bg-pink-200 transition">
        @davi_.gwaash
      </a>
    </div>
  </section>
);

// About Us
const About = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">About SweetCrumb Bakery</h2>
      <div className="text-center mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          We are a small family-run bakery based in Nairobi, Kenya. Every cake we bake is made with love, precision, and a sprinkle of joy.
        </p>
        <p className="text-gray-700 mt-4">
          From custom birthday cakes to elegant wedding designs, we pride ourselves on freshness, quality, and attention to detail.
        </p>
      </div>
      <div className="flex justify-center">
        <img src="https://placehold.co/600x400?text=Baking+with+Love" alt="Bakers at work" className="rounded-lg shadow-md" />
      </div>
    </div>
  </section>
);

// Menu / Product Gallery
const Menu = () => {
  const cakeTypes = ['Birthday', 'Wedding', 'Cupcakes', 'Cookies', 'Anniversary', 'Custom'];
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-12">Our Delicious Cakes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakeTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg shadow overflow-hidden transform transition hover:scale-105 duration-300">
              <img src={`https://placehold.co/300x200?text=${encodeURIComponent(type)}+Cake`} alt={`${type} Cake`} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{type} Cake</h3>
                <p className="text-gray-600 mt-2">Perfect for any occasion. Customizable size and design.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-pink-600 font-medium">From Ksh 1,500</span>
                  <Link to="/order" className="bg-pink-600 hover:bg-pink-700 text-white text-sm px-3 py-1 rounded">
                    Place Order
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => (
  <section className="py-16 bg-pink-50">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">Get In Touch</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          <p className="text-gray-700">
            <strong>Phone:</strong> <a href="tel:+254701709217" className="text-pink-600 hover:underline">+254 701 709 217</a> (WhatsApp available)
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> <a href="mailto:davi017gitau@gmail.com" className="text-pink-600 hover:underline">davi017gitau@gmail.com</a>
          </p>
          <p className="text-gray-700">
            <strong>Location:</strong> Nairobi, Kenya
          </p>
          <div className="mt-6 flex justify-center">
            <a href="https://wa.me/254701709217" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 10c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7-8-3.134-8-7z" />
                <path d="M10 13c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
                <path d="M10 11c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" />
                <path d="M10 14c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Admin Panel
const AdminPanel = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/orders');
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">Admin Panel – Orders</h2>
        <button onClick={fetchOrders} className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded mb-4">Refresh Orders</button>
        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-white shadow rounded">
            <thead>
              <tr className="bg-pink-100">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Cake</th>
                <th className="px-4 py-2">Size</th>
                <th className="px-4 py-2">Qty</th>
                <th className="px-4 py-2">Delivery</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order, i) => (
                  <tr key={i} className="border-b">
                    <td className="px-4 py-2">{order.name}</td>
                    <td className="px-4 py-2">{order.phone}</td>
                    <td className="px-4 py-2">{order.email}</td>
                    <td className="px-4 py-2">{order.cakeType}</td>
                    <td className="px-4 py-2">{order.cakeSize}</td>
                    <td className="px-4 py-2">{order.quantity}</td>
                    <td className="px-4 py-2">{order.deliveryOption}</td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="7" className="text-center py-4">No orders yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// Order Form
const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cakeType: '',
    cakeSize: '',
    quantity: 1,
    deliveryOption: 'pickup',
    deliveryAddress: '',
    customMessage: '',
    deliveryDate: '',
    deliveryTime: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Order submitted successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          cakeType: '',
          cakeSize: '',
          quantity: 1,
          deliveryOption: 'pickup',
          deliveryAddress: '',
          customMessage: '',
          deliveryDate: '',
          deliveryTime: ''
        });
      } else {
        alert('Failed to submit order.');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting order.');
    }

    // Send email via mailto:
    let subject = encodeURIComponent("New Cake Order");
    let body = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Cake Type: ${formData.cakeType}
Cake Size: ${formData.cakeSize}
Quantity: ${formData.quantity}
Delivery Option: ${formData.deliveryOption === 'delivery' ? formData.deliveryAddress : 'Pickup'}
Custom Message: ${formData.customMessage || 'None'}
Delivery Date & Time: ${formData.deliveryDate} at ${formData.deliveryTime}
    `.trim();
    window.location.href = `mailto:davi017gitau@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  const cakeTypes = ['Birthday', 'Wedding', 'Cupcakes', 'Cookies', 'Anniversary', 'Custom'];
  const sizes = ['6-inch', '8-inch', '10-inch', 'Dozen Cupcakes'];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">Place Your Cake Order</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1">Full Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full border border-gray-300 p-3 rounded" />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Phone Number (WhatsApp preferred) *</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full border border-gray-300 p-3 rounded" />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email Address *</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full border border-gray-300 p-3 rounded" />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Cake Type *</label>
            <select name="cakeType" value={formData.cakeType} onChange={handleInputChange} required className="w-full border border-gray-300 p-3 rounded">
              <option value="">Select one</option>
              {cakeTypes.map((type, i) => <option key={i} value={type}>{type}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Cake Size *</label>
            <select name="cakeSize" value={formData.cakeSize} onChange={handleInputChange} required className="w-full border border-gray-300 p-3 rounded">
              <option value="">Select one</option>
              {sizes.map((size, i) => <option key={i} value={size}>{size}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Quantity *</label>
            <input type="number" name="quantity" min="1" value={formData.quantity} onChange={handleInputChange} required className="w-full border border-gray-300 p-3 rounded" />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Delivery or Pickup *</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" name="deliveryOption" value="pickup" checked={formData.deliveryOption === 'pickup'} onChange={handleInputChange} className="form-radio text-pink-600" />
                <span className="ml-2">Pickup</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="deliveryOption" value="delivery" checked={formData.deliveryOption === 'delivery'} onChange={handleInputChange} className="form-radio text-pink-600" />
                <span className="ml-2">Delivery</span>
              </label>
            </div>
          </div>

          {formData.deliveryOption === 'delivery' && (
            <div>
              <label className="block text-gray-700 mb-1">Delivery Address *</label>
              <input type="text" name="deliveryAddress" value={formData.deliveryAddress} onChange={handleInputChange} required className="w-full border border-gray-300 p-3 rounded" />
            </div>
          )}

          <div>
            <label className="block text-gray-700 mb-1">When do you need it?</label>
            <div className="grid grid-cols-2 gap-4">
              <input type="date" name="deliveryDate" value={formData.deliveryDate} onChange={handleInputChange} className="border border-gray-300 p-3 rounded" />
              <input type="time" name="deliveryTime" value={formData.deliveryTime} onChange={handleInputChange} className="border border-gray-300 p-3 rounded" />
            </div>
          </div>

          <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded font-semibold transition">
            Send Order Request
          </button>
        </form>

        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Proceed to Payment</h3>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="YOUR_BUTTON_ID_HERE" />
            <input type="hidden" name="business" value="david017gitau@gmail.com" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold">
              Pay via PayPal
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-pink-50 text-gray-800 font-sans">
        {/* Header */}
        <header className="bg-white shadow sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold text-pink-700">SweetCrumb Bakery</h1>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-pink-600">Home</Link>
              <Link to="/about" className="hover:text-pink-600">About Us</Link>
              <Link to="/menu" className="hover:text-pink-600">Menu</Link>
              <Link to="/order" className="hover:text-pink-600">Order Now</Link>
              <Link to="/admin" className="hover:text-pink-600">Admin</Link>
              <Link to="/contact" className="hover:text-pink-600">Contact</Link>
            </nav>
            <Link to="/order" className="md:hidden bg-pink-600 text-white px-4 py-1 rounded-full text-sm">
              Order
            </Link>
          </div>
        </header>

        {/* Mobile Nav */}
        <div className="md:hidden bg-white border-t border-pink-200">
          <div className="flex justify-around py-2 text-xs">
            <Link to="/" className="text-gray-600">Home</Link>
            <Link to="/about" className="text-gray-600">About</Link>
            <Link to="/menu" className="text-gray-600">Menu</Link>
            <Link to="/contact" className="text-gray-600">Contact</Link>
          </div>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<><Home /><InstagramSection /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-pink-800 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} SweetCrumb Bakery</p>
            <div className="mt-3">
              <a href="https://instagram.com/davi_.gwaash" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 mx-2">
                <svg className="h-6 w-6 inline" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069 3.204 0 3.584.014 4.85.072 4.354.2 6.78 2.618 6.98 6.98.059 1.28.073 1.69.073 4.948 0 3.204-.013 3.583-.07 4.849-.072 4.354-.196 6.78-2.617 6.98-6.98.059-1.28.073-1.69.073-4.948 0-3.204-.013-3.583-.07-4.849-.149-3.227-1.664-4.771-4.919-4.919-1.266-.058-1.644-.07-4.85-.07-3.204 0-3.584.012-4.849.07-3.26.149-4.771 1.699-4.919 4.92-.058 1.265-.07 1.645-.07 4.849 0 3.205.014 3.668.072 4.948.196 4.354 2.618 6.78 6.98 6.98 1.266.058 1.644.07 4.85.07 3.204 0 3.584-.014 4.849-.072 4.354-.2 6.78-2.618 6.98-6.98.059-1.28.073-1.69.073-4.948 0-3.204-.013-3.583-.07-4.849-.149-3.227-1.664-4.771-4.919-4.919-1.266-.057-1.645-.069-4.849-.069-3.204 0-3.584.014-4.85.072-4.354.2-6.78 2.618-6.98 6.98-1.265.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.645-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07 3.204 0 3.584.014 4.849.072 4.354.2 6.78 2.618 6.98 6.98.059 1.28.073 1.69.073 4.948 0 3.205-.014 3.668-.072 4.948-.196 4.354-2.618 6.78-6.98 6.98-6.98z"/>
                  <path d="M12 0C8.743 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.743 0 12c0 3.257.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.743 24 12 24c3.257 0 3.668-.014 4.948-.072 4.354-.2 6.78-2.618 6.98-6.98.059-1.28.073-1.69.073-4.948 0-3.204-.013-3.583-.07-4.849-.149-3.225-1.664-4.771-4.919-4.919-1.266-.058-1.644-.07-4.85-.07-3.204 0-3.584.012-4.849.07-3.26.149-4.771 1.699-4.919 4.92-.058 1.265-.069 1.645-.069 4.849 0 3.205.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.266.058 1.644.07 4.85.07 3.204 0 3.584-.012 4.849-.07 3.26-.149 4.771-1.699 4.919-4.92.058-1.265.069-1.645.069-4.849 0-3.204-.014-3.668-.072-4.948-.196-4.354-2.618-6.78-6.98-6.98-1.265-.058-1.645-.07-4.85-.07-3.204 0-3.584.012-4.849.07-3.26.149-4.771 1.699-4.919 4.92-.058 1.265-.069 1.645-.069 4.849 0 3.205.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 6.98z"/>
                  <path d="M12 5.838a6.162 6.162 0 100 12.324A6.162 6.162 0 0012 5.838zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
                  <path d="M10 14a2 2 0 114 0 2 2 0 01-4 0z"/>
                  <path d="M10 16a4 4 0 014-4v8h-8v-4c0-2.21 1.79-4 4-4z"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;