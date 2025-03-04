import { useContext } from "react";
import { DataContext } from "../Contex/ProductData";

const CratItems = () => {
  const { cart } = useContext(DataContext);

  return (
    <div>
      <h3>Product in Cart </h3>
      {cart.map((item) => (
       <div className="overflow-x-auto">
       <table className="table">
         <thead>
           <tr>
             <th>
               <label>
                 <input type="checkbox" className="checkbox" />
               </label>
             </th>
             <th>Name</th>
             <th>Job</th>
             <th>Favorite Color</th>
             <th></th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <th>
               <label>
                 <input type="checkbox" className="checkbox" />
               </label>
             </th>
             <td>
               <div className="flex items-center gap-3">
                 <div className="avatar">
                   <div className="mask mask-squircle w-12 h-12">
                     <img
                       src="/tailwind-css-component-profile-2@56w.png"
                       alt="Avatar Tailwind CSS Component"
                     />
                   </div>
                 </div>
                 <div>
                   <div className="font-bold">Hart Hagerty</div>
                   <div className="text-sm opacity-50">United States</div>
                 </div>
               </div>
             </td>
             <td>
               Zemlak, Daniel and Leannon
               <br />
               <span className="badge badge-ghost badge-sm">
                 Desktop Support Technician
               </span>
             </td>
             <td>Purple</td>
             <th>
               <button className="btn btn-ghost btn-xs">details</button>
             </th>
           </tr>
         </tbody>
       </table>
       </div>}
  )
};

export default CratItems;
