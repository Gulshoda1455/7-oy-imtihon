import { Table } from "antd";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";

const columns = [
    {
      title:"Image",
      dataIndex:"image",
      render:(imgUrl)=>{
        return <img width={100} src={imgUrl} alt={imgUrl}/>
      },
    
    },
      {
        title: 'Name',
        dataIndex: 'name',
      },
     
      {
        title: 'Edit',
        dataIndex: 'edit',
        render:(_,record)=>{
          return <EditCategory productId={record._id}/>
        }
      },
      {
        title: 'Delete',
        dataIndex: 'delete',
        render:(_,record)=>{
          return <DeleteCategory productId={record._id}/>
        }
      },
    ];
function CategoriesTable({category}) {
  return (
    <div>
       <Table columns={columns} dataSource={category} size="middle" /> 
    </div>
  )
}

export default CategoriesTable;