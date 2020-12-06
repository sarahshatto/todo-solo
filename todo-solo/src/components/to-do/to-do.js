import React, {useState, useEffect} from 'react';
import MyMainForm from './form.js';
import List from './list.js';
import axios from 'axios';

function ToDo(){

    const [itemList, setItemList] = useState([])

    useEffect( () => {
        getAll();
    },[]);

    async function getAll(){
        try{
            let results = await axios({
                method: 'get',
                url: 'https://api-js401.herokuapp.com/api/v1/todo'
            });
            setItemList(results.data.results)
        }catch(err){
            console.log(err);
        }
       

    };

    async function makePost(item){
        try{
        let results = await axios({
            method: 'post',
            url: 'https://api-js401.herokuapp.com/api/v1/todo',
            data: item
        }); 
        console.log('POST RESULTS***********', results)
        getAll();
        }catch (e){
            console.log(e);
        }

    };

    async function makePut(item, id){
      try{
      let results = await axios({
          method: 'put',
          url: `https://api-js401.herokuapp.com/api/v1/todo/${id}`,
          data: item
      }); 
      console.log('Put RESULTS***********', results)
      getAll();
      }catch (e){
          console.log(e);
      }

  };

  async function makeDelete(id){
    try{
    let results = await axios({
        method: 'delete',
        url: `https://api-js401.herokuapp.com/api/v1/todo/${id}`
    }); 
    console.log('dElEtE RESULTS***********', results)
    getAll();
    }catch (e){
        console.log(e);
    }

};


    function updateList(arr){
        setItemList(arr)
    }

    return(
        <>

        <MyMainForm updateList={updateList} makePost={makePost}/>
        <List makeDelete={makeDelete} makePut={makePut} itemList={itemList} setItemList={setItemList}/>
        </>
    )
}

export default ToDo;