import React, { useState } from "react";
import { useForm } from "react-hook-form";
function FavPlanetsList(props) {
  const [planetInput, setPlanetInput] = useState(props.editPlanet ? props.editPlanet.value :'');
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  //to set the input
  const handleOnChange = (e) => {
    setPlanetInput(e.target.value);
  };
  const handleFormRefreshing = (e) => {
    e.preventDefault();
    //adding form props: id, text
      props.onSubmit({
      id: Math.floor(Math.random() * 500),
      text: planetInput,
    });
    setPlanetInput('');
    
    
  };
  return (
    <div>
    <form onSubmit={handleFormRefreshing} onSubmit={handleSubmit(onSubmit)} className='planet-form'>
      {props.editPlanet ? (
        <>
          <input
            placeholder='Update your Planet'
            value={planetInput}
            onChange={handleOnChange}
            name='text'
            className='planet-input edit'
          />
          <button onClick={handleFormRefreshing} className='planet-button edit'>
            Update Planet
          </button></>) : 

          (<> <input
          onChange={handleOnChange}
          type="text"
          placeholder="Add Your Favorite Planet"
          value={planetInput}
          name="text"
          ref={register({ required: true, maxLength: 20 })}
          className='planet-input edit'/>
        <button onClick={handleFormRefreshing} className='planet-button'>Add planet</button>
        <button onClick={props.deletAll} className='planet-button'>Delete All</button></>
          )}
      </form> 
    </div>);
}

          
export default FavPlanetsList;
