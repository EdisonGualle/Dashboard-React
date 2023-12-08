import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine} from "react-icons/ri";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className=" bg-secondary-100 p-8 rounded-xl shadow-2xl    lg:w-[450px]">
      <h1 className=" text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center">
        Iniciar  <span className="text-primary">sesión</span>
      </h1>
      <form className="bg-secondary-100 mb-8">
        <div>
          <button className="flex items-center gap-4 bg-secondary-900 w-full justify-center py-3 px-4 rounded-full mb-8">
            <img src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" className="w-4 h-4" />
            Ingresa con google
          </button>
          <div className=" relative mb-4">
            <RiMailLine className=" absolute top-1/2 -translate-y-1/2 left-2 text-primary"/>
            <input type="email" className="py-3 pl-8 pr-4  bg-secondary-900 w-full outline-none rounded-lg " placeholder="Correo Electronico" />
          </div>
          <div className=" relative mb-4">
            < RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary"/>
            <input type={showPassword ? "text" : "password"} className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg " placeholder="Contraseña" />
            {showPassword? (
              < RiEyeOffLine onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary" />

            ) : (
              < RiEyeLine onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary" />
            )}
          </div>
        </div>
        <div>
          <button type="submit" className="bg-primary text-black  uppercase font-bold w-full py-3 px-4 rounded-lg hover:text-green-950 transition-colors ">
            Ingresar
          </button>
        </div>
      </form>
      <div className="flex flex-col items-center gap-4 ">
        <Link to="/auth/olvide-password" className="hover:text-primary transition-colors">¿Olvidaste tu contraseña?</Link>
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

export default Login;
