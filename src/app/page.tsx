import Image from "next/image";
import { features } from "process";

export default function Home() {
  return (
    <div className="flex items-center justify-center py-8">
      <section className="w-1/2 h-auto bg-[#070709] rounded-xl ">
        <h1 className="text-5xl ml-11 text-white font-bold pt-12 ">
          Faça o seu login{" "}
          <span className="rounded-full  inline-block w-3 h-3 bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] ml-2"></span>
        </h1>
        <form action="#">
          <div className="mx-11 mt-10">
            <label className="font-normal mt-10 text-sm text-gray-400">
              Email
            </label>
            <div className="bg-none focus-within:bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70]  ">
              
              <input
                type="email"
                id="email"
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
            <button className="bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] w-full font-bold text-2xl rounded-xl h-12 text-white">
              Entrar
            </button>
          </div>

          <a className="font-normal flex justify-center underline mx-11 mt-8 text-sm mb-10 text-gray-400 drop-shadow-md md:drop-shadow-xl">
            Ainda não tenho uma conta
          </a>
        </form>
      </section>
    </div>
  );
}
