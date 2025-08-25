"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ContentCopy, CheckCircle, QrCodeScanner, AccountBalance, CreditCard, Security } from "@mui/icons-material"

export default function PaymentPage() {
  const [copied, setCopied] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState(null)

  const upiId = "abhinav.30011990@okhdfcbank"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(upiId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const quickAmounts = [500, 1000, 1500, 2000, 2500, 3000]

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Decorative Background Elements */}
      

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative container mx-auto px-6 py-12 max-w-6xl"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#FECE18] to-orange-400 rounded-full mb-6 shadow-lg">
            <QrCodeScanner className="text-white text-3xl" />
          </div>
          <h1 className="text-5xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-6">
            Make a Payment
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#FECE18] to-orange-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete your workshop booking with our secure UPI payment system.
            <span className="text-purple-600 font-semibold"> Quick, secure, and instant.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Payment Options */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Quick Amount Selection */}
            

            {/* Payment Methods */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                  <CreditCard className="text-white text-lg" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Payment Methods</h2>
              </div>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-6 border-2 border-[#FECE18] bg-gradient-to-r from-[#FECE18]/10 to-orange-300/10 rounded-2xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FECE18] to-orange-400 rounded-full flex items-center justify-center mr-4">
                    <QrCodeScanner className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">UPI Payment</h3>
                    <p className="text-gray-600">Scan QR code or use UPI ID</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-md">
                    Recommended
                  </div>
                </motion.div>
                <div className="flex items-center p-6 border-2 border-gray-200 rounded-2xl opacity-60 bg-gray-50/50">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <CreditCard className="text-gray-500 text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-600 text-lg">Card Payment</h3>
                    <p className="text-gray-500">Credit/Debit cards</p>
                  </div>
                  <div className="bg-gray-300 text-gray-600 px-4 py-2 rounded-full font-bold text-sm">Coming Soon</div>
                </div>
                <div className="flex items-center p-6 border-2 border-gray-200 rounded-2xl opacity-60 bg-gray-50/50">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <AccountBalance className="text-gray-500 text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-600 text-lg">Net Banking</h3>
                    <p className="text-gray-500">Direct bank transfer</p>
                  </div>
                  <div className="bg-gray-300 text-gray-600 px-4 py-2 rounded-full font-bold text-sm">Coming Soon</div>
                </div>
              </div>
            </div>

            {/* UPI ID Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ID</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">UPI ID</h2>
              </div>
              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2 font-medium">Pay to:</p>
                  <p className="font-mono text-lg text-gray-900 font-semibold">{upiId}</p>
                </div>
                <motion.button
                  onClick={copyToClipboard}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#FECE18] to-orange-400 hover:from-orange-400 hover:to-[#FECE18] text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg"
                >
                  {copied ? <CheckCircle className="text-lg" /> : <ContentCopy className="text-lg" />}
                  {copied ? "Copied!" : "Copy"}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - QR Code */}
          <motion.div variants={itemVariants} className="lg:sticky lg:top-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl text-center border border-white/30">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                  <QrCodeScanner className="text-white text-xl" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Scan to Pay
                </h2>
              </div>

              {/* QR Code Image */}
              <motion.div className="mb-8" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <div className="relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-23%20at%2011.28.43_0145ee0e.jpg-Fj2jhKCwYsdguSfTKX2Zq4Xpvj3sXb.jpeg"
                    alt="UPI QR Code for payment to abhinav kshitij"
                    className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl border-4 border-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>

              {/* Payment Instructions */}
              <div className="space-y-6 text-left mb-8">
                {[
                  "Open any UPI app (Google Pay, PhonePe, Paytm, etc.)",
                  "Scan the QR code above",
                  `Enter amount ${selectedAmount ? `₹${selectedAmount}` : ""} and complete payment`,
                  "Take a screenshot of the payment confirmation",
                  "Your payment confirmation via email in 24 hours.",
                ].map((instruction, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-[#FECE18] to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {instruction.includes("₹") ? (
                        <>
                          Enter amount{" "}
                          {selectedAmount && (
                            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FECE18] to-orange-500">
                              ₹{selectedAmount}
                            </span>
                          )}{" "}
                          and complete payment
                        </>
                      ) : (
                        instruction
                      )}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Payment Details */}
              <div className="p-6 bg-gradient-to-r from-gray-50 to-indigo-50 rounded-2xl border border-gray-200">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Payee:</span>
                    <span className="font-bold text-gray-900">Abhinav Kshitij</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Bank:</span>
                    <span className="font-bold text-gray-900">HDFC Bank</span>
                  </div>
                  {selectedAmount && (
                    <div className="flex items-center justify-between pt-2 border-t border-gray-300">
                      <span className="text-gray-600 font-medium">Amount:</span>
                      <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#FECE18] to-orange-500">
                        ₹{selectedAmount}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Support Section */}
        <motion.div variants={itemVariants} className="mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 border-2 border-blue-200 rounded-3xl p-10 text-center shadow-xl">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Security className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help with Payment?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              If you're facing any issues with the payment process or need assistance, our support team is here to help
              you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="mailto:info@cocirql.com?subject=Payment Support"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#FECE18] to-orange-400 hover:from-orange-400 hover:to-[#FECE18] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg"
              >
                Email Support
              </motion.a>
              <motion.a
                href="/help"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg"
              >
                Help Center
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Security Notice */}
        <motion.div variants={itemVariants} className="mt-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-100 border-2 border-green-200 rounded-2xl p-6 text-center shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <CheckCircle className="text-white text-lg" />
              </div>
              <span className="font-bold text-green-800 text-lg">100% Secure Payment</span>
            </div>
            <p className="text-green-700">
              All payments are processed securely through UPI with bank-grade encryption. We never store your payment
              information.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}
