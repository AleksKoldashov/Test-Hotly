import { createSlice } from '@reduxjs/toolkit'

const AddElem=(add, addItem)=>{
 const arr = add.find(
  item=>item===addItem
)

if(!arr&&addItem!=='Sort'){
  return [ ...add,addItem]
}else{
 return [...add]
} 
}

const DelElem=(del, delItem)=>{
  const arr = del.filter(
    item=>item!==delItem
  )
  return [...arr]
}

// return [ ...state.add,action.payload]
export const counterSlice = createSlice({
  name: 'stateManeger',
  initialState: {
    add: []
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    addSort: (state, action) =>{
    
      state.add = AddElem(state.add, action.payload)
    },
    DelElmSort: (state, action) =>{
      
      state.add = DelElem(state.add, action.payload)
    },
    RemoveSort: (state, action) =>{
      state.add = []
    },
  },
})

export const { 
  increment,
  addSort,
  DelElmSort,
  RemoveSort } = counterSlice.actions

export default counterSlice.reducer