import Cart from "./Cart";

export default function Modal() {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Cart />
      </div>
    </div>
  )
}
