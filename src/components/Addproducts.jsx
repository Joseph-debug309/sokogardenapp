import React, { useState } from 'react'

const Addproducts = () => {

  // Introduce the hook
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 p-4 card shadow">
        <h3 className='text-primary'>Welcome to add products</h3>

        <form>
          <input type="text" 
          placeholder='Enter the product name'
          className='form-control'
          required 
          value={product_name}
          onChange={(e) => setProductName(e.target.value)}
           /> <br />

           {/*{product_name}*/}

           <input type="text" 
          placeholder='Enter the product description'
          className='form-control'
          required 
          value={product_description}
          onChange={(e) => setProductDescription(e.target.value)}
           /> <br />

           {/*{product_description}*/}

           <input type="number" 
          placeholder='Enter the price of the product'
          className='form-control'
          required 
          value={product_cost}
          onChange={(e) => setProductCost(e.target.value)}
           /> <br />

           {/*{product_cost}*/}

           <label className='text-primary'>Product photo</label>

           <input type="file"
           className='form-control' 
           required
           accept='image/*'
           onChange={(e) => setProductPhoto(e.target.files(0))} /> <br />

           <input type="submit" 
           value='Add product'
           className='btn btn-outline-primary'/>
           
        </form>
      </div>
      
    </div>
  )
}

export default Addproducts;
