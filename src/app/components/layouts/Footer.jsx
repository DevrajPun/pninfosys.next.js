import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="container mx-auto bg-[#337ab7] text-white">
        <div className="flex flex-col md:flex-row py-10 px-4 md:px-14">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="w-full flex justify-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/logo%2Fcolorlogo.png?alt=media&token=0386f0aa-e1e1-4950-924f-3eedaa82d967"
                alt="logo_png"
                className="md:w-full w-auto"
              />
            </div>
            <p className="text-justify font-light mt-4">
              PN INFOSYS is a leading global business consulting and IT service
              company. We provide a full range of maintenance and compliance
              services for Government and Commercial facilities both large and
              small. Whether you need to run your business more efficiently or
              accelerate revenue growth, PN INFOSYS can get you there.
            </p>
            <div className="flex justify-center gap-5 mt-1">
              <FaFacebookSquare className="text-2xl md:text-3xl" />
              <FaLinkedin className="text-2xl md:text-3xl" />
            </div>
          </div>
          <div className="w-full md:w-1/3 text-center font-light space-y-3 mb-6 md:mb-0">
            <h2 className="text-xl md:text-2xl font-semibold my-4">
              Get In Touch!
            </h2>
            <Link href="#" className="hover:underline block">
              www.pninfosys.com <br /> support@pninfosys.com
            </Link>
            <p>
              +91 7000846823 <br />
              +91 7415289378 <br />
              MIG-332 <br />
              Darpan Colony, Thatipur, <br /> Gwalior, Madhya Pradesh
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold my-4">
              COMPANIES WORKSHOP
            </h2>
            <p>
              <Link href="#" className="font-light hover:underline block">
                Xiaomi MI Company
              </Link>
              August 20 / Mr.Vaibhav Shrivastava
            </p>
            <p>
              <Link href="#" className="font-light hover:underline block">
                Bentchair Company
              </Link>
              October 06 / Mr.Nicket Bansal
            </p>
            <p>
              <Link href="#" className="font-light hover:underline block">
                MPCT College Gwalior
              </Link>
              November 02 / PN Infosys Team
            </p>
            <p>
              <Link href="#" className="font-light hover:underline block">
                RJIT College Tekanpur
              </Link>
              February 24 / PN Infosys Team
            </p>
          </div>
        </div>
        <br />
        <hr className="font-light" />
        <div className="py-10">
          <h3 className="text-center">
            <span className="font-light">Copyright © 2024 </span>
            <Link href="#">| PN INFOSYS IT COMPANY IN GWALIOR ! .</Link>
            <span className="font-light"> All rights reserved.</span>
          </h3>
        </div>
      </footer>
    </>
  );
}

export default Footer;
