'use client'
import { signIn } from 'next-auth/react';
import * as React from 'react';


export default function LoginForm() {
  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    }
    signIn("credentials", {
      ...data,
      callbackUrl:"/dashboard",
   })
  }
  return (
    <section className="w-1/2 h-auto bg-[#070709] rounded-xl ">
        <h1 className="text-5xl ml-11 text-white font-bold pt-12 ">
          Faça o seu login{" "}
          <span className="rounded-full  inline-block w-3 h-3 bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] ml-2"></span>
        </h1>
        <form onSubmit={login}>
          <div className="mx-11 mt-10">
            <label className="font-normal mt-10 text-sm text-gray-400">
              Email
            </label>
            <div className="bg-none focus-within:bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70]  ">
              
              <input
                type="email"
              id="email"
              name='email'
                className="  text-gray-800 text-sm rounded-lg  outline-none appearance-none w-full p-2.5"
                placeholder="nome@email.com"
                required
              />
            </div>
          </div>
          <div className="mx-11 mt-6">
            <label className="font-normal mt-10 text-sm text-gray-400">
              Senha
            </label>
            <div className="bg-none focus-within:bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70]  ">
               <input
              type="password"
              id="password"
              name='password'
              className="text-gray-800 text-sm rounded-lg outline-none appearance-none w-full p-2.5"
              placeholder="•••••••••"
              required
              />         
            </div>
           
          </div>
          <a className="font-normal flex justify-end underline mx-11 mt-4 text-sm text-gray-400">
            Esqueci minha senha
          </a>
          <div className="mx-11 mt-6">
            <button type="submit" className="bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] w-full font-bold text-2xl rounded-xl h-12 text-white">
              Entrar
            </button>
          </div>

          <a className="font-normal flex justify-center underline mx-11 mt-8 text-sm mb-10 text-gray-400 drop-shadow-md md:drop-shadow-xl">
            Ainda não tenho uma conta
          </a>
        </form>
      </section>
  );
};