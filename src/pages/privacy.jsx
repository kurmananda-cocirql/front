"use client"

import { motion } from "framer-motion"

export default function PrivacyPage() {
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

  return (
    <main className="min-h-screen bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-12 max-w-4xl"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <div className="w-20 h-1 bg-[#FECE18] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Your privacy matters to us. Learn how we protect and handle your personal information.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
          {/* Section 1 - Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                At CoCirql, your privacy matters. This Privacy Policy outlines how we collect, use, share, and safeguard
                the personal data of our users—Learners and Coaches—in compliance with Indian laws, including the DPDP
                Act, 2023 and the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or
                Information) Rules, 2011.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We act as a Data Fiduciary, which means we only collect and process personal data with your knowledge,
                consent, and for legitimate purposes.
              </p>
            </div>
          </section>

          {/* Section 2 - What Data We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. What Data We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We collect only what is essential to deliver our services:
            </p>

            <div className="space-y-8">
              {/* 2.1 Basic Personal Information */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2.1 Basic Personal Information</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#FECE18] mr-3 mt-1">•</span>
                    <span className="text-gray-700">Full Name</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FECE18] mr-3 mt-1">•</span>
                    <span className="text-gray-700">Contact details (Email, Phone)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FECE18] mr-3 mt-1">•</span>
                    <span className="text-gray-700">Age or Date of Birth (and guardian consent for minors)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FECE18] mr-3 mt-1">•</span>
                    <span className="text-gray-700">Profile photo (optional)</span>
                  </li>
                </ul>
              </div>

              {/* 2.2 Learning & Coaching Data */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2.2 Learning & Coaching Data</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#FECE18] mr-3 mt-1">•</span>
                    <span className="text-gray-700">Workshop attendance records</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FECE18] mr-3 mt-1">•</span>
                    <span className="text-gray-700">Feedback, learning performance, buddy-pairing preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FECE18] mr-3 mt-1">•</span>
                    <span className="text-gray-700">Coach application forms, credentials</span>
                  </li>
                </ul>
              </div>

              {/* 2.3 Sensitive Personal Data */}
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  2.3 Sensitive Personal Data (collected only when necessary)
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#FECE18] mr-3 mt-1">•</span>
                    <span className="text-gray-700">
                      Health information relevant to physical workshops (e.g., yoga limitations)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FECE18] mr-3 mt-1">•</span>
                    <span className="text-gray-700">ID Proofs (e.g., for KYC or under-18 parental consent)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FECE18] mr-3 mt-1">•</span>
                    <span className="text-gray-700">
                      Payment info (handled via secure third-party payment gateways; not stored by us)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 - Why We Collect Your Data */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Why We Collect Your Data</h2>
            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">We collect data to:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Create and manage your account</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Schedule and deliver workshops and feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Facilitate buddy-matching and community interaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Process secure payments and issue receipts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Comply with legal obligations or respond to lawful requests</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-medium">
                We always follow the principles of purpose limitation and data minimization - we collect only what's
                needed and relevant.
              </p>
            </div>
          </section>

          {/* Section 4 - Consent & Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Consent & Children's Privacy</h2>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">
                    We take your informed, voluntary, and revocable consent before collecting or using your data.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">
                    For users below 18, verifiable parental/guardian consent is mandatory. No behavioural tracking or
                    ads are served to minors.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">You may withdraw consent anytime by writing to us.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 - Data Sharing & Transfers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Data Sharing & Transfers</h2>
            <div className="bg-red-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4 font-semibold">We do not sell your data.</p>
              <p className="text-gray-700 leading-relaxed mb-4">We may share limited data:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">
                    With trusted third-party service providers (e.g., for hosting, payment, video conferencing) strictly
                    on a need-to-know basis and under binding data-protection agreements.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">
                    In case of legal requirements (court orders or regulatory investigations).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">
                    For international transfers, we comply with government notifications on adequate protection
                    standards or obtain your explicit consent.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6 - Data Storage & Retention */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Data Storage & Retention</h2>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                Your data is stored securely on servers located in India (or other permitted jurisdictions).
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">
                    We retain personal data only as long as necessary for service delivery or legal compliance.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">
                    Inactive accounts (no log-in or activity for 36 months) will be deactivated and deleted, with
                    advance notice sent to the user.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7 - Security Measures */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Security Measures</h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement reasonable security practices under Section 43A of the IT Act, including:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Data encryption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Access controls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Regular vulnerability audits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Secure backups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Breach-response protocols</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8 - In Case of Data Breach */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. In Case of Data Breach</h2>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
              <p className="text-gray-700 leading-relaxed mb-4">
                If a data breach occurs that affects your personal data, we will:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Notify you promptly with details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">
                    Inform the Data Protection Board of India within 72 hours, as required
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Take corrective actions to contain the breach</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 9 - Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Your Rights</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">As a user, you have the right to:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Access your personal data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Request corrections or deletion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Withdraw your consent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">File a grievance for redressal</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-medium">
                Our Grievance Officer will acknowledge and resolve complaints within 30 days.
              </p>
            </div>
          </section>

          {/* Section 10 - Coach Obligations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Coach Obligations</h2>
            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">Coaches onboarded on CoCirql must:</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Use learner data only for CoCirql-approved purposes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Maintain confidentiality and report breaches immediately</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Help with user requests (access, correction, deletion)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3 mt-1">•</span>
                  <span className="text-gray-700">Avoid personal use of learner data without explicit consent</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-medium">
                These conditions are built into our contractual terms with all Coaches.
              </p>
            </div>
          </section>

          {/* Section 11 - Updates & Transparency */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Updates & Transparency</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                We will update this Privacy Policy as laws evolve or platform features change.
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                You will be notified via email and platform banners at least 7 days before any material change takes
                effect.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <div className="bg-[#FECE18] bg-opacity-10 p-8 rounded-lg border border-[#FECE18] border-opacity-30">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Questions About Your Privacy?</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or how we handle your personal data, please don't
                hesitate to reach out to us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:support@cocirql.com"
                  className="bg-[#FECE18] hover:bg-[#E6B800] text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-300 text-center"
                >
                  Email: support@cocirql.com
                </a>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <section className="text-center">
            <p className="text-gray-500 text-sm">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </section>
        </motion.div>
      </motion.div>
    </main>
  )
}
