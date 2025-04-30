export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-gray-700 pb-10">
        <div>
          <h4 className="font-bold mb-2 uppercase">Be the first to know</h4>
          <p className="mb-4">Sign up for updates from mettā muse.</p>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="p-2 w-full sm:w-64 text-black"
            />
            <button className="border border-white px-4 py-2 uppercase">Subscribe</button>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2 uppercase">Contact Us</h4>
          <p className="mb-1">+44 221 133 5360</p>
          <p className="mb-2">customercare@mettamuse.com</p>
          <h4 className="font-bold mb-1 uppercase">Currency</h4>
          <div className="flex items-center gap-2">
            <img
              src="https://img.icons8.com/color/48/usa.png"
              alt="USD"
              className="w-5 h-5"
            />
            <span>USD</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        <div>
          <h4 className="font-bold mb-2">mettā muse</h4>
          <ul className="space-y-1 text-gray-400">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-gray-400">
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" className="w-6 h-6" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" className="w-6 h-6" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2">mettā muse ACCEPTS</h4>
          <div className="flex gap-2 flex-wrap">
            <img src="https://img.icons8.com/color/48/000000/google-pay-india.png" alt="GPay" className="w-8" />
            <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard" className="w-8" />
            <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" className="w-8" />
            <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" className="w-8" />
            <img src="https://img.icons8.com/ios-filled/50/ffffff/mac-os.png" alt="Apple Pay" className="w-8" />
            <img src="https://img.icons8.com/color/48/000000/discover.png" alt="Other" className="w-8" />
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-10 text-xs">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}
