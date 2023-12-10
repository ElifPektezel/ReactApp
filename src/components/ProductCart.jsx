import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import '../style/ProductCart.css';
const ProductCard = ({ dt }) => {
    const [openEdit, setOpenEdit] = useState(false)
  return (
    <div className="ProductCart">
      <img src={dt?.url} className="ProductImg" alt="" />
      <div className="ProductCartText">
        <div className="text-lg font-semibold">{dt?.name} </div>
        <div>{dt?.price} </div>
      </div>
      <div onClick={() => setOpenEdit(!openEdit)} className="absolute top-0 right-2">
      <HiDotsHorizontal color="white" size={24}  />
      </div>
      openEdit && (
        <div className="ProductEdit">
            <div>Sil</div>
            <div>Güncelle</div>
        </div>
      )
    </div>
  );
};

export default ProductCard;
