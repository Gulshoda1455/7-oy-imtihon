import CategoriesTable from "../../components/CategoriesTable";
import CreateCategories from "../../components/CreateCategories";
import useGetCategory from "../../hooks/useGetCategory"


function Categories() {

  

  const category = useGetCategory();
  return (
    <div>
      <CreateCategories/>
         <CategoriesTable category={category}/>
    </div>
  )
}

export default Categories