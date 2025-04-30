import React from 'react'

export default function OrderSuccess() {
    return (
        <div className="min-h-screen bg-white p-6">
            {/* Confirmation Box */}
            <div className="border border-pink-400 rounded-lg p-6 mb-8">
                <div className="flex items-center gap-2 text-green-600 text-lg font-semibold">
                    ✅ Your Order Is Confirmed
                </div>
                <p className="text-gray-500 mt-2">
                    An Email Been Sent To Your Mail Address <span className="font-medium">@Gmail.Com</span>
                </p>
            </div>

            {/* Cart Summary */}
            <div className="border border-pink-400 rounded-lg p-6">
                <div className="bg-pink-50 rounded-lg p-6">
                    <h3 className="font-semibold mb-4 text-gray-800">Cart Summary</h3>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-700">Sub Total:</span>
                            <span className="text-gray-600">$4,500.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-700">Discount:</span>
                            <span className="text-gray-600">$5.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-700">Shipping:</span>
                            <span className="text-gray-600">Free</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-700">Taxes:</span>
                            <span className="text-gray-600">$25.00</span>
                        </div>
                        <div className="border-t border-pink-200 pt-3 flex justify-between font-semibold text-pink-600">
                            <span>Total:</span>
                            <span>$4,520.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
