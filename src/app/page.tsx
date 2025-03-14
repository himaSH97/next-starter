import Image from "next/image";
import { FileText, Mail, Phone, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl p-8 bg-white rounded-lg shadow-lg border border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-orange-500 font-bold text-2xl">
              Nipun Hiamsh Wedisinghe
            </h1>
          </div>
          <div className="mt-2 text-gray-600 space-y-1">
            <p className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>+94778871208</span>
            </p>
            <p className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>nipun.himash.97@gmail.com</span>
            </p>
            <p className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>nipun.himash@flexcorps.site</span>
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end gap-2 mb-2">
            <FileText className="h-5 w-5 text-orange-500" />
            <h2 className="text-3xl font-bold text-black">Quotation</h2>
          </div>
          <p className="text-gray-500">
            <span className="font-medium">Date:</span> 14/03/2025
          </p>
          <p className="text-gray-500">
            <span className="font-medium">Quotation #:</span> QC-2531
          </p>
        </div>
      </div>

      {/* Client & Project Info */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <div className="!bg-orange-500 w-4 h-4 p-3 text-xs rounded-sm flex items-center justify-center text-white font-bold">
              IN
            </div>
            Invoice For
          </h2>
          <p className="text-lg font-medium text-gray-900">
            Grand Engineering (Pvt) Ltd
          </p>
          <p className="text-gray-600 mt-1">Client ID: CI-2503</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <div className="!bg-orange-500 p-3 w-4 h-4 text-xs rounded-sm flex items-center justify-center text-white font-bold">
              Pr
            </div>
            Project Details
          </h2>
          <p className="text-lg font-medium text-gray-900">
            Grand Engineering web platform and related services
          </p>
          <p className="text-gray-600 mt-1">Project ID: PI-2511</p>
        </div>
      </div>

      {/* Invoice Items */}
      <div className="mb-10">
        <div className="bg-gray-100 rounded-t-lg p-4 grid grid-cols-12 font-semibold text-gray-700">
          <div className="col-span-6">Description</div>
          <div className="col-span-2 text-center">Qty</div>
          <div className="col-span-2 text-right">Unit price</div>
          <div className="col-span-2 text-right">Total price</div>
        </div>

        <div className="border-x border-gray-200">
          {/* Web Application Portal */}
          <div className="p-4 border-b border-gray-200 hover:bg-gray-50 transition-coloRs. ">
            <div className="grid grid-cols-12 mb-2">
              <div className="col-span-6 font-medium text-gray-800">
                Web Application Redesign
              </div>
              <div className="col-span-2 text-center text-gray-600">1</div>
              <div className="col-span-2 text-right text-gray-600">
                Rs. 50,000.00
              </div>
              <div className="col-span-2 text-right font-medium text-gray-600">
                Rs. 50,000.00
              </div>
            </div>
            <div className="pl-4 text-sm text-gray-600 space-y-1.5">
              <p className="flex flex-col items-start gap-2">
                <div className="flex flex-row items-center gap-2">
                  <span className=" text-orange-500 "> •</span>
                  Total base pages: 8
                </div>
                <p className="mx-6 text-wrap max-w-[300px]">
                  {
                    "Home, About Us, Projects, Contact Us, Careers, Terms & Conditions, Privacy Policy, Constructions, Designs"
                  }
                </p>
              </p>
              <p className="flex flex-col items-start gap-2">
                <div className="flex flex-row items-center gap-2">
                  <span className=" text-orange-500 "> •</span>
                  Project Showcase pages: 23
                </div>
                <p className="mx-6 text-wrap max-w-[300px]">
                  {
                    "Same layout with different content for each project showcase page"
                  }
                </p>
              </p>
            </div>
          </div>

          {/* DigitalOcean Droplet */}
          <div className="p-4 border-b border-gray-200 grid grid-cols-12 hover:bg-gray-50 transition-coloRs. ">
            <div className="col-span-6 text-gray-800">Administrative Tasks</div>
            <div className="col-span-2 text-center text-gray-600">1</div>
            <div className="col-span-2 text-right text-gray-600">
              Rs. 10,000.00
            </div>
            <div className="col-span-2 text-right font-medium text-gray-600">
              Rs. 10,000.00
            </div>
          </div>

          {/* DigitalOcean Cloud Storage */}
        </div>

        {/* Total */}
        <div className="bg-gray-100 rounded-b-lg p-4 flex justify-end">
          <div className="w-1/3">
            <div className="flex justify-between py-2 text-gray-700">
              <span>Subtotal:</span>
              <span>Rs. 60,000.00</span>
            </div>
            <div className="flex justify-between py-2 text-gray-700">
              <span>Tax (0%):</span>
              <span>Rs. 0.00</span>
            </div>
            <div className="flex justify-between py-2 font-bold text-lg border-t border-gray-300 mt-2 pt-2">
              <span>Total:</span>
              <span className="text-orange-500">Rs. 60,000.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Info & Terms */}
      {/* <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Payment Information
          </h2>
          <div className="space-y-2 text-gray-600">
            <p>
              <span className="font-medium">Bank:</span> Commercial Bank
            </p>
            <p>
              <span className="font-medium">Account Name:</span> Kendocube Pvt
              Ltd
            </p>
            <p>
              <span className="font-medium">Account Number:</span> 1234567890
            </p>
            <p>
              <span className="font-medium">Branch:</span> Colombo
            </p>
          </div>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Terms & Conditions
          </h2>
          <div className="space-y-2 text-gray-600 text-sm">
            <p>1. Payment is due within 14 days of invoice date.</p>
            <p>2. Please include invoice number in payment reference.</p>
            <p>
              3. For questions about this invoice, please contact
              accounts@kendocube.com
            </p>
          </div>
        </div>
      </div> */}

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-6">
        <p>Thank you for your business!</p>
        <p className="mt-1">© 2025. All rights reserved.</p>
      </div>
    </div>
  );
}
