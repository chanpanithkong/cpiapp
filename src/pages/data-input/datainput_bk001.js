// import React, { Component } from 'react';
//
// import Form from '../data-input/form-input';
//
// class DataInput extends Component {
//   render() {
//     return <Form onSubmit={this.result} />;
//   }
// }
//
// export default DataInput;

import { useEffect, useState } from 'react';
import ExchangeRateApi from '../../api/exchangeRateApi';
//import LatestOrder from 'sections/widget/data/LatestOrder';

function App() {
  const { productlist, setProductList } = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {};
        const response = await ExchangeRateApi.get(params);
        console.log('Fetch products successfully: ', response);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    };
    fetchProductList().then();
  }, [setProductList]);
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h2 productlist={productlist}>hello</h2>;
}

export default App;

// import React from 'react';
// import { Form, InputNumber, Popconfirm, Table, Typography, Input } from 'antd';
// import { useState } from 'react';
// import { Button, Grid, Stack } from '@mui/material';
// const originData = [
//   {
//     key: '1',
//     name: 'Rental Fee',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer']
//   },
//   {
//     key: '2',
//     name: 'Electric',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser']
//   },
//   {
//     key: '3',
//     name: 'Water',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher']
//   },
//   {
//     key: '4',
//     name: 'Gas',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher']
//   }
// ];
// // for (let i = 0; i < 50; i++) {
// //   originData.push({
// //     key: i.toString(),
// //     name: `Edward ${i}`,
// //     age: 32,
// //     address: `London Park no. ${i}`
// //   });
// // }
// // eslint-disable-next-line react/prop-types
// const EditableCell = ({ editing, dataIndex, title, inputType, children, ...restProps }) => {
//   const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
//   return (
//     <td {...restProps}>
//       {editing ? (
//         <Form.Item
//           name={dataIndex}
//           style={{
//             margin: 0
//           }}
//           rules={[
//             {
//               required: true,
//               message: `Please Input ${title}!`
//             }
//           ]}
//         >
//           {inputNode}
//         </Form.Item>
//       ) : (
//         children
//       )}
//     </td>
//   );
// };
// const App = () => {
//   const [form] = Form.useForm();
//   const [data, setData] = useState(originData);
//   const [editingKey, setEditingKey] = useState('');
//   const isEditing = (record) => record.key === editingKey;
//   const edit = (record) => {
//     form.setFieldsValue({
//       name: '',
//       age: '',
//       address: '',
//       ...record
//     });
//     setEditingKey(record.key);
//   };
//   const cancel = () => {
//     setEditingKey('');
//   };
//   const save = async (key) => {
//     try {
//       const row = await form.validateFields();
//       const newData = [...data];
//       const index = newData.findIndex((item) => key === item.key);
//       if (index > -1) {
//         const item = newData[index];
//         newData.splice(index, 1, {
//           ...item,
//           ...row
//         });
//         setData(newData);
//         setEditingKey('');
//       } else {
//         newData.push(row);
//         setData(newData);
//         setEditingKey('');
//       }
//     } catch (errInfo) {
//       console.log('Validate Failed:', errInfo);
//     }
//   };
//   const columns = [
//     {
//       title: 'Items',
//       dataIndex: 'name',
//       width: '25%',
//       editable: false
//     },
//     {
//       title: 'Weight',
//       dataIndex: 'age',
//       width: '15%',
//       editable: false
//     },
//     {
//       title: 'Price',
//       dataIndex: 'address',
//       width: '40%',
//       editable: true
//     },
//     {
//       title: 'operation',
//       dataIndex: 'operation',
//       render: (_, record) => {
//         const editable = isEditing(record);
//         return editable ? (
//           <span>
//             <Typography.Link
//               onClick={() => save(record.key)}
//               style={{
//                 marginRight: 8
//               }}
//             >
//               Save
//             </Typography.Link>
//             <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
//               <a>Reset</a>
//             </Popconfirm>
//           </span>
//         ) : (
//           <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
//             Edit
//           </Typography.Link>
//         );
//       }
//     }
//   ];
//   const mergedColumns = columns.map((col) => {
//     if (!col.editable) {
//       return col;
//     }
//     return {
//       ...col,
//       onCell: (record) => ({
//         record,
//         inputType: col.dataIndex === 'age' ? 'number' : 'text',
//         dataIndex: col.dataIndex,
//         title: col.title,
//         editing: isEditing(record)
//       })
//     };
//   });
//   return (
//     <Form form={form} component={false}>
//       <Table
//         components={{
//           body: {
//             cell: EditableCell
//           }
//         }}
//         bordered
//         dataSource={data}
//         columns={mergedColumns}
//         rowClassName="editable-row"
//         pagination={{
//           onChange: cancel
//         }}
//       />
//       <Grid item xs={12}>
//         <Stack direction="row" spacing={1} justifyContent="right" sx={{ width: 1, px: 1.5, py: 0.75 }}>
//           <Button variant="contained" size="small">
//             Save
//           </Button>
//           <Button variant="contained" color="error" onClick={() => setMessage('')}>
//             Reset
//           </Button>
//         </Stack>
//       </Grid>
//     </Form>
//   );
// };
// export default App;
