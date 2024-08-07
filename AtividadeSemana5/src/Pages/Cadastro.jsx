import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Cadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function cadastrar(data) {
    console.log("Cadastro!");
    console.log(data);
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(cadastrar)}>
        <h1>Cadastro</h1>
        <hr />
        <div>
          <label htmlFor="nome">Nome</label>
          <input 
            type="text" 
            id="nome" 
            className="form-control" 
            {...register("nome", {required: true, maxLength: 150})}
            />
            {errors.nome && <small className="invalid">O nome é inválido!</small>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            className="form-control" 
            {...register("email", { required: true })}
            />
            {errors.email && <small className="invalid">O email é inválido!</small>}
        </div>

        <div>
          <label htmlFor="datadenascimento">Data de Nascimento</label>
          <input 
            type="datadenascimento" 
            id="datadenascimento" 
            className="form-control" 
            {...register("datadenascimento", { required: true })}
            />
            {errors.datadenascimento && <small className="invalid">A data de nascimento é obrigatória!</small>}
        </div>

        <div>
          <label htmlFor="senha">Senha</label>
          <input 
            type="password" 
            id="senha" 
            className="form-control" 
            {...register("senha", {required: true, minLength: 6})}
            />
            {errors.senha && <small className="invalid">A senha é inválida!</small>}
        </div>
        <div className="form-check mt-1">
        <input className="form-check-input" type="checkbox" id="autoSizingCheck2"/>
          <label className="form-check-label" for="autoSizingCheck2">
            Lembrar de mim
          </label>
        </div>
        <Button variant="info" className="mt-1 w-100" type="submit">
          Cadastrar
        </Button>
        <Button variant="danger" className="mt-1 w-100" type="button">
          Cadastrar com o Google
        </Button>
      </form>
    </main>
  );
}

export default Cadastro;
