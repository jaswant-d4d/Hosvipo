import { Copyright, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import { getCurrentYear } from "../../utils/generals"

const quickLinks = [
  { path: "/", label: "Home" },
  { path: "/features", label: "Features" },
  { path: "/solutions", label: "Solutions" },
  { path: "/pricing", label: "Pricing" },
  { path: "/about-us", label: "About Us" },
  { path: "/contact", label: "Contact" },
]
const solutionsLinks = [
  { path: "/features", label: "For Hospitals" },
  { path: "/for-clinics", label: "For Clinics" },
  { path: "/for-doctors", label: "For Doctors" },
  { path: "/for-patients", label: "For Patients" },
  { path: "/laboratories", label: "Laboratories" },
]
const supportLinks = [
  { path: "/help", label: "Help Center" },
  { path: "/documentation", label: "Documentation" },
  { path: "/faq", label: "FAQs" },
  { path: "/privacy-policy", label: "Privacy Policy" },
  { path: "/terms", label: "Terms & Conditions" },
  { path: "/contact-support", label: "Contact Support" },
]
function Footer() {
  return (
    <section className="border-y border-slate-100 bg-slate-700/10 overflow-hidden ">
      <footer className="max-w-360 mx-auto px-6 sm:p-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-1 gap-6 xl:grid-cols-3 text-center sm:text-start">
          <div className="col-span-1">
            <div className="space-y-4 col-span-1">
              <img src="/logo.png" alt="" className="h-20 lg:h-24 w-auto mx-auto sm:ms-0 object-contain shrink-0" />
              <p className="xl:max-w-sm  text-slate-700">Hospivo is a comprehensive hospital management system design to streamline operations and improve patient care.</p>

              <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6">
                <div className="bg-primary-light rounded-full p-3"><MessageCircle className="size-5 text-primary" /></div>
                <div className="bg-primary-light rounded-full p-3"><MessageCircle className="size-5 text-primary" /></div>
                <div className="bg-primary-light rounded-full p-3"><MessageCircle className="size-5 text-primary" /></div>
                <div className="bg-primary-light rounded-full p-3"><MessageCircle className="size-5 text-primary" /></div>
              </div>
            </div>
          </div>
          <div className="col-span-2 grid sm:grid-cols-2 gap-6 md:grid-cols-4">
            <div className="">
              <h6 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h6>
              <ul className="space-y-4  ">
                {quickLinks?.map((link) => (
                  <li key={link.path} className="text-slate-700 hover:text-slate-900 ">
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <h6 className="text-lg font-semibold text-slate-900 mb-4">Solutions</h6>
              <ul className="space-y-4  ">
                {solutionsLinks?.map((link) => (
                  <li key={link.path} className="text-slate-700 hover:text-slate-900 ">
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <h6 className="text-lg font-semibold text-slate-900 mb-4">Supports</h6>
              <ul className="space-y-4  ">
                {supportLinks?.map((link) => (
                  <li key={link.path} className="text-slate-700 hover:text-slate-900 ">
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <h6 className="text-lg font-semibold text-slate-900 mb-4">Contact Us</h6>
              <ul className="space-y-4  ">
                <li><a href="tel:15551233544" className="flex items-center justify-center sm:justify-start gap-3 text-slate-700"> <Phone className="size-5 " /> +1 (555) 123-3544</a></li>
                <li><a href="mailto:info@hospivo.com" className="flex items-center justify-center sm:justify-start gap-3 text-slate-700"> <Mail className="size-5 " /> info@hospivo.com</a></li>
                <li className="flex items-center justify-center sm:justify-start gap-3 text-slate-700"> <MapPin className="size-5 " /> 102 Healthcare St. <br />Medical City, MC 12343</li>
              </ul>
            </div>
          </div>

        </div>
      </footer>
      <div className="border-t px-6 lg:px-8 py-6 flex justify-center  items-center gap-1 text-slate-500">
        <Copyright className="size-4" />
        <p className="">
          {getCurrentYear()} Hospivo. All rights reserved.
        </p>
      </div>
    </section>
  )
}

export default Footer
