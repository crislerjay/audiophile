import Cart from "./Cart";
import Confirmation from "./Confirmation";

export default function Modal({open}) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {open === 'openCart' ? <Cart /> : null}
        {open === 'openConfirmation' ? <Confirmation /> : null}
      </div>
    </div>
  )
}
