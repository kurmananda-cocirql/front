"use client"

import { useState } from "react"

// Back arrow icon component
const BackArrowIcon = () => (
  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
)

// User icon for form fields
const UserIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)

// Email icon
const EmailIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

// Phone icon
const PhoneIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

// Credit card icon
const CreditCardIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  </svg>
)

// Upload icon
const UploadIcon = () => (
  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
)

// Chevron down icon
const ChevronDownIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

// Toggle Switch Component
const ToggleSwitch = ({ enabled, onChange, label, description }) => (
  <div className="flex items-start space-x-4 py-4">
    <button
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        enabled ? "bg-blue-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
    <div>
      <div className="font-medium text-gray-900">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  </div>
)

const UserProfileEdit = () => {
  const [formData, setFormData] = useState({
    fullName: "Rahul",
    email: "email@gmail.com",
    phone: "+91 (123) 456-9878",
    accountType: "Pro",
    cardNumber: "9978 1128 1558 1978",
    cardHolderName: "Rahul",
    country: "India",
  })

  const [toggles, setToggles] = useState({
    autoPayoutEnabled: true,
    notifyPayments: true,
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleToggleChange = (field, value) => {
    setToggles((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-yellow-400">
      {/* Header */}
      <div className="bg-yellow-400 px-6 py-6">
        <div className="flex items-center justify-between">
          <button className="p-2">
            <BackArrowIcon />
          </button>
          <div className="text-2xl font-bold text-black">spiral</div>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Profile Header */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
              <UserIcon />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black">Rahul</h1>
              <p className="text-black opacity-70">email@gmail.com</p>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-2xl transition-colors">
            Save Changes
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 space-y-6">
        {/* Personal Info Section */}
        <div className="bg-white rounded-2xl p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Personal Info</h2>
              <p className="text-gray-600 text-sm">You can change your personal information settings here.</p>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon />
                    </div>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <EmailIcon />
                    </div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <PhoneIcon />
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Account Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Type</label>
                  <div className="relative">
                    <select
                      value={formData.accountType}
                      onChange={(e) => handleInputChange("accountType", e.target.value)}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                    >
                      <option value="Pro">Pro</option>
                      <option value="Basic">Basic</option>
                      <option value="Premium">Premium</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ChevronDownIcon />
                    </div>
                  </div>
                </div>
              </div>

              {/* Change Avatar */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Change Avatar</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <UploadIcon />
                  <p className="mt-2 text-sm text-gray-600">
                    <span className="text-blue-500 font-medium">Click here</span> to upload your file or drag.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Supported Format: SVG, JPG, PNG (10mb each)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payments Section */}
        <div className="bg-white rounded-2xl p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Payments</h2>
              <p className="text-gray-600 text-sm">You can change your payment credentials here.</p>
            </div>

            {/* Right Column - Payment Settings */}
            <div className="lg:col-span-2 space-y-6">
              {/* Payment Toggles */}
              <div className="space-y-2">
                <ToggleSwitch
                  enabled={toggles.autoPayoutEnabled}
                  onChange={(value) => handleToggleChange("autoPayoutEnabled", value)}
                  label="Enable Auto Payout"
                  description="Autopayout occurs at the end of each month."
                />
                <ToggleSwitch
                  enabled={toggles.notifyPayments}
                  onChange={(value) => handleToggleChange("notifyPayments", value)}
                  label="Notify New Payments"
                  description="You will be notified when a payment has been made."
                />
              </div>

              {/* Credit Card */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Credit Card</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.cardNumber}
                    onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                    className="block w-full px-3 py-3 pr-16 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">VISA</span>
                  </div>
                </div>
              </div>

              {/* Card Holder Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Holder Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CreditCardIcon />
                  </div>
                  <input
                    type="text"
                    value={formData.cardHolderName}
                    onChange={(e) => handleInputChange("cardHolderName", e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-lg">🇮🇳</span>
                  </div>
                  <select
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    className="block w-full pl-12 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ChevronDownIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-8"></div>
    </div>
  )
}

export default UserProfileEdit
