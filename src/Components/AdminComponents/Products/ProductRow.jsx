import React from 'react';
import { Table,Td,Tr,Tbody } from '@chakra-ui/react';

function ProductRow (image,name,title,price ) {
  return (
    <div>
         <Table>
              <Tbody>
                <Tr>
                  <Td>image</Td>
                  <Td>name</Td>
                  <Td>Price</Td>
                  <Td>title</Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
              </Tbody>
              

</Table>
    </div>
  )
}

export default ProductRow