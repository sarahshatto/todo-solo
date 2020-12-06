import React from 'react';
import Toast from 'react-bootstrap/Toast';
import Badge from 'react-bootstrap/Badge';
import {PaginatedList} from 'react-paginated-list';
//npm i react-paginated-list and npm i styled-components? Not sure about this ask joe
import {If, Else, Then} from 'react-if';


function List(props){
//We have item list in props!!!!!! Dummy!  
  return(
    <PaginatedList
      list = {props.itemList}
      itemsPerPage = {5}
      renderList = {list => (
        <>
        {list.map((item) => (
          <Toast key={item._id}>
            <Toast.Header>
              
              <If condition={!item.complete}>

              <Then>
              <Badge pill variant="danger">
                Pending
              </Badge>{' '}
              </Then>

              <Else>
              <Badge pill variant="success">
                Complete
              </Badge>{' '}
              </Else>

              </If>

              <strong className="mr-auto">{item.assignee}</strong>
              <small>Difficulty: {item.difficulty}</small>
            </Toast.Header>
            <Toast.Body>{item.text}</Toast.Body>
          </Toast>

        ))}
        </>
      )}
    />
  )
}

export default List;