const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-100">
            <td className="hidden md:block py-6 px-1">12343561678</td>
            <td className="py-6 px-1">2026-02-01</td>
            <td className="py-6 px-1">$89.90</td>
            <td className="hidden md:block py-6 px-1">Big Burger Menu (2x), Veggie Pizza (2x), Coca Cola 1L (2)</td>
            <td className="py-6 px-1">On the way (approx, 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12343561678</td>
            <td className="py-6 px-1">2026-02-01</td>
            <td className="py-6 px-1">$89.90</td>
            <td className="hidden md:block py-6 px-1">Big Burger Menu (2x), Veggie Pizza (2x), Coca Cola 1L (2)</td>
            <td className="py-6 px-1">On the way (approx, 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12343561678</td>
            <td className="py-6 px-1">2026-02-01</td>
            <td className="py-6 px-1">$89.90</td>
            <td className="hidden md:block py-6 px-1">Big Burger Menu (2x), Veggie Pizza (2x), Coca Cola 1L (2)</td>
            <td className="py-6 px-1">On the way (approx, 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage
