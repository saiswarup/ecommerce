import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import Category from './Category'



const Products = () => {
    const [data, setDate] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setDate(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                console.log(filter)
            }
            
        }
        getProducts()
    }, [])

    const Loading = () => {
        return (
            <>  {filter.map((product) => {
                return (
                    <>
                        <div className='col-md-3 mb-4'>
                            <div className="card h-100 text-center p-4" key={product.id} >
                                <img src={product.image} className="card-img-top" alt={product.title}  height="250px"/>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0,12)}....</h5>
                                    <p className="card-text lead fw-bold">${product.price}</p>
                                    <NavLink to={`/products/${product.id}`} className='btn btn-outline-dark'>
                                    Buy Now
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}</>
        )
    }
    const ShowProducts = () => {
        return (
            <>
                {filter.map((product) => {
                    return (
                        <>
                            <div className='col-md-3'>
                                <div className="card" >
                                    <img src={product.image} className="card-img-top" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">${product.price}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className='container my-4 py-4'>
                <div className='row'>
                    <div className='col-9 mb-4'>
                        <h1 className='display-4 fw-bolder text-center'>
                            Latest Product
                        </h1>
                    </div>
                </div>

                <div className='row'>
                    <div class="col-3">
                        <div class="row">
                            <div class="col">
                                <label for="cars">Category:</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Select Category:</option>
                                    <option value="1">Tv</option>
                                    <option value="2">Mobile</option>
                                    <option value="3">Home</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label for="cars">Brand:</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Select Brand:</option>
                                    <option value="1">Tv</option>
                                    <option value="2">Mobile</option>
                                    <option value="3">Home</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label for="cars">Product:</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Select Product:</option>
                                    <option value="1">Tv</option>
                                    <option value="2">Mobile</option>
                                    <option value="3">Home</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p>Please select your Price Range:</p>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        100-200
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        200-500
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        500-5000
                                    </label>
                                </div>
                            </div>
                            <button type="button" class="btn btn-primary">Submit</button>
                        </div>


                        
                    </div>
                    
                    <div class="col-9">
                        <div className='row'>
                            {Loading ? <Loading /> : <ShowProducts />}
                        </div>
                    </div>
                </div>
            </div>
        </div>


        
        
    )
}
export default Products;
