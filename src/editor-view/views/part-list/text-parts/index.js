import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../../../../store/editor-slice';
import { textTemplates } from '../../../config/parts-config'
import LText from '../../../parts/LText'

import './style.css';

export default function TextParts() {

  const dispatch = useDispatch();
  const onItemClick = useCallback((item) => {
    dispatch(addItem(item));
  }, [dispatch]);

  return (
    <div className='text-parts'>
      {textTemplates.map((item, index) => {
        return (
          <div key={index} className='component-item'>
            <div className='component-wrapper' key={index} onClick={() => onItemClick(item)}>
              <LText className={'inside-component'} {...item}></LText>
            </div>
          </div>
        )
      })}
    </div>
  )
}