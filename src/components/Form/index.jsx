import React, { useState } from "react";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import "./form.scss";
import Button from "../Common/Button";
const Form = ({
    cart = [],
    total = 0,
    className = "",
    clearCart = () => {},
    getOrderId = () => {},
}) => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [repeatEmail, setRepeatEmail] = useState("");

    const extraClassName = className ? ` ${className}` : "";
    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };
    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangeRepeatEmail = (e) => {
        setRepeatEmail(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            buyer: { nombre: name, apellido: lastName, email: email },
            items: cart,
            total: total,
            date: serverTimestamp(),
        };
        const orderCollections = collection(db, "orders");
        addDoc(orderCollections, order).then((res) => {
            getOrderId(res.id);
            clearCart();
        });
    };
    return (
        <form className={`form${extraClassName}`} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre..."
                value={name}
                onChange={handleChangeName}
            />
            <input
                type="text"
                placeholder="Apellido..."
                value={lastName}
                onChange={handleChangeLastName}
            />
            <input
                type="number"
                placeholder="Telefono..."
                value={phone}
                onChange={handleChangePhone}
            />
            <input
                type="email"
                placeholder="Email..."
                value={email}
                onChange={handleChangeEmail}
            />
            <input
                type="email"
                placeholder="Verificar email..."
                value={repeatEmail}
                onChange={handleChangeRepeatEmail}
            />
            <Button className="--primary" label="Comprar" />
        </form>
    );
};

export default Form;
