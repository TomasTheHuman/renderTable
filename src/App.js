  import React from 'react';
  import {Table,Modal} from "antd";
  import "antd/dist/antd.css";


  class App extends React.Component{
    state = {
      mas:[],
    }
    async componentDidMount(){
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then(Result => Result.json())
        .then(data =>{this.setState({
          mas: data
          })
        })
    }

    render() {
      return (
      <Table  columns={columns} dataSource={this.state.mas} />
      );
    }
  }


  const columns = [
    {
      title: 'Имя',
      dataIndex: 'name',
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Номер телефона',
      dataIndex: 'phone',
    },
  ];


  export default App;