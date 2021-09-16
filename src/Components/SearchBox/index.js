import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const SearchBox = ({ setGithubSearch }) => {
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
    setGithubSearch(data.searchBox);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="user/repo" type="text" {...register("searchBox")} />
        <p>{errors.searchBox?.message}</p>
        <button>Pesquisar</button>
      </form>
    </div>
  );
};

export default SearchBox;
