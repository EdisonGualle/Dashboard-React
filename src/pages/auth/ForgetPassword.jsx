import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
const ForgetPasssword = () => {
    const [showPassword, setShowPassword] = useState(false);


    return (
        <div className=" bg-secondary-100 p-8 rounded-xl shadow-2xl    lg:w-[450px]">
            <h1 className=" text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center">
                Recuperar  <span className="text-primary">contraseña</span>
            </h1>
            <form className="bg-secondary-100 mb-8">
                <div>
                    <div className=" relative mb-4">
                        <RiMailLine className=" absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
                        <input type="email" className="py-3 pl-8 pr-4  bg-secondary-900 w-full outline-none rounded-lg " placeholder="Correo Electronico" />
                    </div>
                </div>
                <div>
                    <button type="submit" className="bg-primary text-black  uppercase font-bold w-full py-3 px-4 rounded-lg hover:text-green-950 transition-colors ">
                        Enviar instrucciones
                    </button>
                </div>
            </form>
            <div className="flex flex-col items-center gap-4 ">
            <span className="flex items-center gap-2">
                    ¿Ya tienes cuenta?
                    <Link to="/auth"
                        className="text-primary hover:text-green-100 transition-colors">
                        Ingresar
                    </Link>
                </span>
                <span className="flex items-center gap-2">
                    ¿No tienes cuenta?
                    <Link to="/auth/registro"
                        className="text-primary hover:text-green-100 transition-colors">
                        Registrarse
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default ForgetPasssword;
