
export const Header = () => {
  return (
    <header className="py-6  shadow-xl">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <a href="" className="text-gradient">
            João <br />
            <span className="text-white">Pedro</span>
          </a>
          <button className="btn btn-sm"><a href="mailto:joaobronharo@therionej.com.br">Entrar em contato</a></button>
        </div>
      </div>
    </header>
  );
};
