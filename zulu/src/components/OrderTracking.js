// src/components/OrderTracking.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderTracking = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const { data } = await axios.get("/api/orders");
            setOrders(data);
        };
        fetchOrders();
    }, []);

    return (
        <div>
            <h2>Your Orders</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        Order {order.id} - Status: {order.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderTracking;
