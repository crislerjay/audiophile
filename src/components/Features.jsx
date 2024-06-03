export default function Features({features, includedItems}) {
  return (
    <div className="features">
      <div className="features-content">
        <h2 className="title-02">FEATURES</h2>
        <p className="text-02 text-dark-gray">{features}</p>
      </div>
      <div className="included">
        <h2 className="title-02">IN THE BOX</h2>
        <ul>
          {includedItems.map((inc, index) => (
            <li key={index}>
              <span className="text-02 text-orange">{inc.quantity}x</span>
              <span className="text-02 text-dark-gray">{inc.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
