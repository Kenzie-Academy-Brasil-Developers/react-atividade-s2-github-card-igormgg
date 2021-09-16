import "./styles.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const SearchBox = ({ setGithubResult }) => {
  const formSchema = yup.object().shape({
    searchBox: yup.string().required("*Digite sua busca"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    fetch(`https://api.github.com/repos/${data.searchBox}`)
      .then((response) => response.json())
      .then((response) => setGithubResult(response))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Busque um repositório no Github</h1>
      <input placeholder="user/repo" type="text" {...register("searchBox")} />
      <button>Pesquisar</button>
      <p>{errors.searchBox?.message}</p>
    </form>
  );
};

export default SearchBox;
