import Image from "next/image";
import { features } from "process";

export default function Home() {
  return (
    <div className="flex items-center justify-center py-8">
      <section className="w-1/2 h-auto bg-slate-600 rounded-xl ">
        <h1 className="text-5xl text-white font-bold pt-12 ml-11 ">
          Faça o seu login
        </h1>
        <form action="#">
          <div className="mx-11 mt-10">
            <label className="font-normal mt-10 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="nome@email.com"
              required
            />
          </div>
          <div className="mx-11 mt-6">
            <label className="font-normal mt-10 text-sm text-gray-400">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="•••••••••"
              required
            />
          </div>
          <a className="font-normal flex justify-end underline mx-11 mt-4 text-sm text-gray-400">
            Esqueci minha senha
          </a>
          <div className="mx-11 mt-6">
            <button className="bg-green-500 w-full font-bold text-2xl rounded-xl h-12 text-white">
              Entrar
            </button>
          </div>

          <a className="font-normal flex justify-center underline mx-11 mt-8 text-sm mb-10 text-gray-400">
            Ainda não tenho uma conta
          </a>
        </form>
      </section>
    </div>
  );
}
