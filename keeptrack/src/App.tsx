import { FC } from 'react';
import './App.scss';
import CounterPage from './counter/counter';

export const App: FC = () => {
  return (
    <>
      <div className='practice-grid-system'>
        <div className='practice-grid-system__header'>
          <h1>horizontal</h1>
          <CounterPage/>
        </div>
        {/* 
        this will take on full  available space with grid-container padding
        <div className="grid-container fluid ">

        this will take on full  available space without grid-container padding
         <div className="grid-container full ">
        */}
    <div className="grid-container ">
      {/*
       this removes gutters(gaps) between cells
       <div className='grid-x grid-margin-x medium-margin-collapse '>
       */}
      <div className='grid-x grid-margin-x  '>
        {/* 
        this creates margin-left to the column (skips two cells on the left )
        <div className='cell small-12 medium-4 medium-offset-2'>
         */}
          <div className='cell small-12 medium-4 '>
            <div className='practice-grid-system__first-column'>
              <div className='practice-grid-system__first-column__cell-one'> first colum cell 1</div>
              <div className='practice-grid-system__first-column__cell-two'> first colum cell 2</div>
              <div className='practice-grid-system__first-column__cell-three'> first colum cell 3</div>
            </div>
            </div>

            <div className='cell small-12 medium-8'>
            <div className='practice-grid-system__second-column'>
              <div>cell 2</div>
            </div>
          </div>  
          </div> 
          </div>
        </div>

        <div className='practice-grid-system'>
          <h1>vertical grid</h1>
        <div className='grid-container'>
          {/*
           this takes on the full height window height 
           <div className='grid-y grid-margin-y medium-grid-frame' >
           please note that to use `.grid-margin-x` or `.grid-margin-y` with `.grid-frame` 
           you need to hide the overflow on the body like so: `body {overflow: hidden;}`.
            However, take care not to unintentionally hide overflow body content on small screens when using `.medium-grid-frame`.
           */}
        <div className='grid-y grid-margin-y' >
          <div className='cell small-12 medium-4'>
            <div className='practice-grid-system__vertical-grid'>
              <div className='practice-grid-system__first-column__cell-one'> first colum cell 1</div>
              <div className='practice-grid-system__first-column__cell-two'> first colum cell 2</div>
              <div className='practice-grid-system__first-column__cell-three'> first colum cell 3</div>
            </div>
            </div>

            <div className='cell small-12 medium-8'>
            <div className='practice-grid-system__vertical-grid'>
              <div className='practice-grid-system__first-column__cell-one'> first colum cell 4</div>
              <div className='practice-grid-system__first-column__cell-two'> first colum cell 5</div>
              <div className='practice-grid-system__first-column__cell-three'> first colum cell 6</div>
            </div>
            </div>
            </div>
            </div>
          </div>
     


     
     

 
   
    </>
  );
}

