import React from "react";
import { Link } from "react-router-dom";
import { basket } from "../data";

export default function BasketCount() {
  return (
    <div className="BasketCount">
      <Link to="/basket">Basket({basket.length} items)</Link>
    </div>
  );
}
