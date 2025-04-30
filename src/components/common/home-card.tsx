import React from 'react'

export default function HomeCard({ icon: Icon, title, items }) {
    return (
        <div className="bg-pink-50 rounded-xl p-4 flex items-center gap-4">
        <div className="bg-primaryColor text-white rounded-full w-12 h-12 flex items-center justify-center">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <p className="font-semibold text-sm">{title}</p>
          <p className="text-xs text-gray-500">{items} Items</p>
        </div>
      </div>
    )
}
