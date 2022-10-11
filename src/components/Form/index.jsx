import React, { useState } from "react";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import "./form.scss";
import Input from "./Input";
import Button from "../Common/Button";
const Form = ({
    cart = [],
    total = 0,
    className = "",
    clearCart = () => {},
    getOrderId = () => {},
}) => {
    const [name, setName] = useState({ value: "", valid: null });
    const [lastName, setLastName] = useState({ value: "", valid: null });
    const [phone, setPhone] = useState({ value: "", valid: null });
    const [email, setEmail] = useState({ value: "", valid: null });
    const [repeatEmail, setRepeatEmail] = useState({ value: "", valid: null });

    const [errorSubmit, setErrorSubmit] = useState("");

    const extraClassName = className ? ` ${className}` : "";
    const regex = {
        name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        tel: /^\d{7,14}$/,
    };

    const validateEmails = email.value === repeatEmail.value;
    const handleSubmit = (e) => {
        e.preventDefault();
        const validateFields =
            name.valid &&
            lastName.valid &&
            phone.valid &&
            email.valid &&
            repeatEmail.valid &&
            validateEmails;

        if (validateFields) {
            const order = {
                buyer: { name: name, apellido: lastName, email: email },
                items: cart,
                total: total,
                date: serverTimestamp(),
            };
            const orderCollections = collection(db, "orders");
            addDoc(orderCollections, order).then((res) => {
                getOrderId(res.id);
                clearCart();
            });
        } else {
            setErrorSubmit(
                "Completa bien el formulario, todos los campos son obligatorios"
            );
            setTimeout(() => {
                setErrorSubmit("");
            }, 5000);
        }
    };

    return (
        <form className={`form${extraClassName}`} onSubmit={handleSubmit}>
            {errorSubmit && (
                <span className="error-message --error-submit">
                    {errorSubmit}
                </span>
            )}
            <Input
                type="text"
                placeholder="Nombre.."
                state={name}
                handleState={setName}
                regex={regex.name}
                validate={name.valid}
                errorMessage="El nombre debe tener entre 2 y 40 letras"
            />
            <Input
                type="text"
                placeholder="Apellido..."
                state={lastName}
                handleState={setLastName}
                regex={regex.name}
                validate={lastName.valid}
                errorMessage="El apellido debe tener entre 2 y 40 letras"
            />
            <Input
                type="number"
                placeholder="Telefono..."
                state={phone}
                handleState={setPhone}
                regex={regex.tel}
                validate={phone.valid}
                errorMessage="El número de teléfono debe tener entre 7 a 14 números"
            />
            <Input
                type="email"
                placeholder="Email..."
                state={email}
                handleState={setEmail}
                regex={regex.email}
                validate={email.valid}
                errorMessage="Ingrese un mail válido"
            />

            <Input
                type="email"
                placeholder="Verificar email..."
                state={repeatEmail}
                handleState={setRepeatEmail}
                regex={regex.email}
                validate={repeatEmail.valid}
                errorMessage="Ingrese un mail válido"
            />
            {!validateEmails && (
                <span className="error-message --repeat-email">
                    Los mails ingresados deben coincidir
                </span>
            )}
            <Button className="--primary" label="Comprar" />
        </form>
    );
};

export default Form;
