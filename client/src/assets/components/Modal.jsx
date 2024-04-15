// import React, { useState } from 'react';

// export default function Modal() {
//     const [ modal, setModal ] = useState(false);

//     const toggleModal = () => {
//         setModal(!modal);
//     }
    
//     if(modal) {
//     document.body.classList.add('active-modal')
//     } else {
//     document.body.classList.remove('active-modal')
//     }i

//     return (
//         <>
//         <div class="modal" tabindex="-1">
//             <div class="modal-dialog">
//             <div class="modal-content">
//             <div class="modal-header">
//                 <h5 class="modal-title">Login</h5>
//                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//         <div class="modal-body">
//            <Login />
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-primary" onClick={toggleModal}>Login</button>
//       </div>
//     </div>
//   </div>
// </div>

//         {modal && (
//             <Login />
//         )}
//         </>
//     );
// }