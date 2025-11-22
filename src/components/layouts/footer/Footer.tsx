import { IconBox, ImageView, Logo } from "@/components/common";
import Link from "next/link";

export function Footer() {
  //TODO fix mobile menu
  return (
    <footer className="container mb-[68px]">
      <div className="mb-[68px]">
        <div className="rounded-[6px] md:rounded-[14px] lg:rounded-[30px] bg-hero-pattern bg-[rgba(59,128,126,.2)] bg-opacity-20 bg-cover bg-top bg-no-repeat flex justify-between items-center mt-[38px] relative">
          <div className="min-h-[160px] pl-3 pt-3 sm:pl-4 sm:pt4 md:pl-6 md:pt-6 lg:pl-10 lg:py-10 xl:pl-14 xl:py-14 2xl:py-[72px] 2xl:pl-[72px]">
            <h2 className="max-w-[60%] text-heading5 sm:text-heading4 md:text-heading3 lg:text-heading2 tracking-[-0.04%] text-blue-300">Stay home & get your daily needs from our shop</h2>
            <div className="font-lato text-large tracking-[-0.04%] text-[#2B3D34] mt-8 hidden lg:block">Start Your Daily Sopping with Nest Mart</div>
          </div>
          <div className="absolute bottom-0 right-0 sm:h-full h-3/4 min-w-[180px] w-[50%]">
            <ImageView src="/assets/images/Screenshot (76).png" alt="banner" fill={true} className="object-contain" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between flex-wrap gap-[16px] divide-y-2 md:divide-y-0 mb-[70px]">
        <div className="max-w-[346px]">
          <Logo />

          <div className="font-lato text-medium mt-4 lg:mt-6">Pel len tes que pos uer rci lob ort is</div>
          
          <div className="flex items-start gap-2.5 mt-4 lg:mt-6">
            <IconBox icon="icon-marker-brand" title="Address:" titleClassName="font-bold"/>
            <Link href="https://www.google.com/maps?q=5171+W+Campbell+Ave,+Kent,+Utah+53127,+United+States" target="_blank" rel="noopener noreferrer" className="font-lato text-medium text-blue-300"> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</Link>
          </div>
          <div className="flex flex-wrap items-start gap-2.5 mt-2 lg:mt-3">
            <IconBox icon="icon-headset" title="Call Us:" iconClassName={"text-brand1"} titleClassName="font-bold mr-2"/>
            <Link href={"tel:+91540025124553"} className="font-lato text-medium text-blue-300"> (+91) - 540-025-124553</Link>
          </div>
          <div className="flex flex-wrap items-start gap-2.5 mt-2 lg:mt-3">
            <IconBox icon="icon-paper-plane" title="Email:" iconClassName={"text-brand1"} titleClassName="font-bold mr-3" size={27}/>
            <Link href={"mailto:contact@nestmart.com"} className="font-lato text-medium text-blue-300"> contact@nestmart.com</Link>
          </div>
          <div className="flex flex-wrap items-start gap-2.5 mt-2 lg:mt-3">
            <IconBox icon="icon-time-fast" title="Hours:" iconClassName={"text-brand1"} titleClassName="font-bold mr-3"/>
            <div className="font-lato text-medium text-blue-300"> 10:00 - 18:00, Mon - Sat</div>
          </div>
        </div>

        <div className="pt-4 md:pt-0">
          <div className="flex text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading4 text-blue-300 toggle">Company <IconBox icon={"icon-down-dark"} size={24} iconClassName={"inline-block md:hidden"}/></div>
          <ul className="hidden md:flex flex-col gap-2.5">
            <li className="font-lato text-medium text-blue-300 mt-4 lg:mt-6"><Link href="#">About Us</Link></li>
            <li className="font-lato text-medium text-blue-300"><Link href="#">Delivery Information</Link></li>
            <li className="font-lato text-medium text-blue-300"><Link href="#">Privacy Policy</Link></li>
            <li className="font-lato text-medium text-blue-300"><Link href="#">Terms & Conditions</Link></li>
            <li className="font-lato text-medium text-blue-300"><Link href="#">Contact Us</Link></li>
            <li className="font-lato text-medium text-blue-300"><Link href="#">Support Center</Link></li>
            <li className="font-lato text-medium text-blue-300"><Link href="#">Careers</Link></li>
          </ul>
        </div>
        <div className="pt-4 md:pt-0">
          <div className="flex text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading4 text-blue-300 toggle">Information <IconBox icon={"icon-down-dark"} size={24} iconClassName={"inline-block md:hidden"}/></div>
          <ul className="hidden md:flex flex-col gap-2.5">
            <li className="font-lato text-medium text-blue-300 mt-4 lg:mt-6"><Link href="#">Search Terms</Link></li>
            <li className="font-lato text-medium text-blue-300"><Link href="#">Advanced Search</Link></li>
            <li className="font-lato text-medium text-blue-300"><Link href="#">Help & FAQ's</Link></li>
            <li className="font-lato text-medium text-blue-300"><Link href="#">Store Location</Link></li>
            <li className="font-lato text-medium text-blue-300"><Link href="#">Orders & Returns</Link></li>
            <li className="font-lato text-medium text-blue-300"><Link href="#">Feedback for us</Link></li>
          </ul>
        </div>
        <div className="pt-4 md:pt-0">
          <div className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading4 text-blue-300">App & Payment</div>
          <div className="font-lato text-small text-blue-300 mt-4 lg:mt-6">Install NetMart App from App Store or Google Play</div>
          <div className="flex items-center gap-6 justify-center xl:justify-start pt-4 lg:pt-5">
            <Link href="#"><ImageView src="/assets/images/va724oeh 1.png" alt="Download app from apple store" width={129} height={39} /></Link>
            <Link href="#"><ImageView src="/assets/images/17kw6njp 1.png" alt="Download app from google play" width={129} height={39} /></Link>
          </div>
          <div className="font-lato text-small text-blue-300 text-center lg:text-left pt-4 lg:pt-5">Secured Payment Gateways</div>
          <div className="flex justify-center xl:justify-start pt-4 lg:pt-5">
            <ImageView src="/assets/images/payment-method%201.png" alt="payment methods" width={225} height={33} />
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="flex justify-center border-t-2 py-[38px] border-green-100">
        <div className="font-lato text-medium text-blue-300">© 2025, <span className="text-green-200">NestMart</span> - HTML E-commerce Template</div>
      </div>
    </footer>
  )
}
