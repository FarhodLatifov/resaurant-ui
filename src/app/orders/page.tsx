const mockOrders = [
  {
    id: "12343561678",
    date: "2026-02-01",
    price: "$89.90",
    products: "Big Burger Menu (2x), Veggie Pizza (2x), Coca Cola 1L (2)",
    status: "On the way (approx, 10min)...",
  },
  {
    id: "12343561678",
    date: "2026-02-01",
    price: "$89.90",
    products: "Big Burger Menu (2x), Veggie Pizza (2x), Coca Cola 1L (2)",
    status: "On the way (approx, 10min)...",
  },
  {
    id: "12343561678",
    date: "2026-02-01",
    price: "$89.90",
    products: "Big Burger Menu (2x), Veggie Pizza (2x), Coca Cola 1L (2)",
    status: "On the way (approx, 10min)...",
  },
]

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
          {mockOrders.map((order, index) => (
            <tr className={`text-sm md:text-base ${index === 0 ? "bg-red-100" : "odd:bg-gray-100"}`} key={`${order.id}-${index}`}>
              <td className="hidden md:block py-6 px-1">{order.id}</td>
              <td className="py-6 px-1">{order.date}</td>
              <td className="py-6 px-1">{order.price}</td>
              <td className="hidden md:block py-6 px-1">{order.products}</td>
              <td className="py-6 px-1">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage
