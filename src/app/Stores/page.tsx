import React from 'react'

export default function page() {
  const stores = [
    {
      name: 'Store 1',
      description: '123 Main St, City',
      image: '/images/store1.jpg',
      details: ['Mon-Fri: 9am-6pm', 'Sat: 10am-4pm', 'Sun: Closed'],
    },
    {
      name: 'Store 2',
      description: '456 Oak Ave, Town',
      image: '/images/store1.jpg',
      details: ['Mon-Sat: 8am-8pm', 'Sun: 10am-2pm'],
    },
    {
      name: 'Store 3',
      description: '789 Pine Rd, Village',
      image: '/images/store1.jpg',
      details: ['Mon-Fri: 10am-5pm', 'Sat-Sun: Closed'],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold text-blue-900 mb-4">Our Stores</h1>
      {stores.map((store, index) => (
        <div key={index} className="flex border-4 border-pink-500 mb-4 p-4 rounded-lg">
          <img src={store.image} alt={store.name} className="w-32 h-32 object-cover mr-4" />
          <div className="flex-1">
            <h2 className="text-xl font-bold">{store.name}</h2>
            <p className="text-gray-600">{store.description}</p>
          </div>
          <div className="text-right">
            {store.details.map((detail, index) => (
              <p key={index} className="text-sm text-gray-500">{detail}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
