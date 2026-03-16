import React, { useState , useRef } from 'react'
import Loader from './Loader';
import axios from 'axios';

const Addproducts = () => {

  // Introduce the hook
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  const imageInputRef = useRef(null)


  // declare the additional hool to manage the states of the application
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // ⦁	Come up with the function that will handle the submit function
  const handleSubmit = async (e) =>{
    // Prevent the site from reloading
    e.preventDefault()

    // Set a loading hook activating it
    setLoading(true)

     

    try{
      // create a form data
      const formdata = new FormData()

      // append the details to the form data created
      formdata.append("product_name", product_name)
      formdata.append("product_description", product_description)
      formdata.append("product_cost", product_cost)
      formdata.append("product_photo", product_photo)

      // interact with axios to access the method post
      const response = await axios.post("http://josephdebug.alwaysdata.net/api/add_product", formdata)

      // set the loading hook back to default
      setLoading(false)

      // Update the success hook with a message
      setSuccess(response.data.message)

      // clearing the hooks 
      setProductName("");
      setProductDescription("");
      setProductCost("");
      imageInputRef.current.value= "";
      // setProductPhoto("");

  }

  catch(error){
    // Set the loading hook back to default
    setLoading(false)

    // update the setError with a message
    setError(error.message)
  }
  }

  


  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 p-4 card shadow">
        <h3 className='text-primary'>Welcome to add products</h3>

        {/* Bind the loading hooks */}
        {loading && <Loader/>}

        <h3 className="text-success">{success}</h3>
        <h4 className='text-danger'>{error}</h4>
      

        <form onSubmit={handleSubmit}>
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
           onChange={(e) => setProductPhoto(e.target.files[0])} 
           ref={imageInputRef}/> <br />

           <input type="submit" 
           value='Add product'
           className='btn btn-outline-primary'
            />
           
        </form>
      </div>
      
    </div>
  )
}

export default Addproducts;
