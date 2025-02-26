"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: 9.99,
    features: ["Access to all stories", "Interactive timeline", "Monthly newsletter"],
  },
  {
    name: "Premium",
    price: 19.99,
    features: [
      "All Basic features",
      "Exclusive in-depth articles",
      "Ad-free experience",
      "Early access to new content",
    ],
  },
  {
    name: "Scholar",
    price: 29.99,
    features: [
      "All Premium features",
      "Access to research papers",
      "Quarterly virtual seminars",
      "Personalized reading recommendations",
    ],
  },
]

function Subscribe() {
  const [selectedPlan, setSelectedPlan] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-tertiary dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-caramel text-primary dark:text-accent mb-4">
            Unlock the Full Echoes of Africa Experience
          </h1>
          <p className="text-lg font-teresa text-text dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that best suits your passion for African history and culture. Dive deeper into the stories
            that shaped a continent.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 ${
                selectedPlan === index ? "scale-105 ring-2 ring-accent dark:ring-primary" : "hover:scale-105"
              }`}
            >
              <div className="p-6">
                <h2 className="text-2xl font-prata text-primary dark:text-accent mb-4">{plan.name}</h2>
                <p className="text-4xl font-caramel text-accent dark:text-primary mb-6">
                  ${plan.price}
                  <span className="text-base font-teresa text-text dark:text-gray-400">/month</span>
                </p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-text dark:text-gray-300 font-teresa">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPlan(index)}
                  className={`w-full py-2 px-4 rounded-md font-prata transition-colors duration-200 ${
                    selectedPlan === index
                      ? "bg-primary dark:bg-accent text-background dark:text-white"
                      : "bg-accent dark:bg-primary text-background dark:text-white hover:bg-primary dark:hover:bg-accent"
                  }`}
                >
                  {selectedPlan === index ? "Selected" : "Choose Plan"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedPlan !== null && (
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-prata text-primary dark:text-accent mb-4">Complete Your Subscription</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-prata text-text dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-accent dark:focus:ring-primary focus:border-accent dark:focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-prata text-text dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-accent dark:focus:ring-primary focus:border-accent dark:focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="card" className="block text-sm font-prata text-text dark:text-gray-300 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  id="card"
                  name="card"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-accent dark:focus:ring-primary focus:border-accent dark:focus:border-primary"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="expiry" className="block text-sm font-prata text-text dark:text-gray-300 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    name="expiry"
                    placeholder="MM/YY"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-accent dark:focus:ring-primary focus:border-accent dark:focus:border-primary"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="cvv" className="block text-sm font-prata text-text dark:text-gray-300 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-accent dark:focus:ring-primary focus:border-accent dark:focus:border-primary"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-accent dark:bg-primary text-background dark:text-white py-2 px-4 rounded-md font-prata hover:bg-primary dark:hover:bg-accent transition-colors duration-200"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-text dark:text-gray-300 font-teresa mb-4">Not ready to commit? No problem!</p>
          <Link
            to="/stories"
            className="inline-block bg-tertiary dark:bg-gray-700 text-text dark:text-gray-300 py-2 px-6 rounded-md font-prata hover:bg-secondary dark:hover:bg-gray-600 transition-colors duration-200"
          >
            Continue Exploring for Free
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Subscribe

