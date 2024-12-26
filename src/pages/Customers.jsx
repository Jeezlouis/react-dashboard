import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Selection, Sort, Filter, Page, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid, } from '../data/dummy'
import { Header } from '../components';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
         <Header category='Page' title='Customers' />
         <GridComponent
           id='gridcomp'
           dataSource={customersData}
           allowPaging
           allowSorting
           toolbar={['Delete']}
           onSettings={{allowDeleting: true, allowEditing:true}}
          width='auto'
         >
           <ColumnsDirective>
             {customersGrid.map((item, index) => (
               <ColumnDirective key={index} {...item} />
             ))}
           </ColumnsDirective>
           <Inject services={[ Selection, Sort, Filter, Page, Edit, Toolbar ]} />
         </GridComponent>
       </div>
  )
}

export default Customers
